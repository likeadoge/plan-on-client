<template>
  <div class="page-outer">
    <flex-col style="height:100%;positon:relative" class="page-inner">
      <flex-fixed>
        <flex-row style="magin:0;height:64px;line-height:72px;margin-bottom:0;padding-left:4px">
          <flex-fixed>
            <router-link to="/" style="vertical-align: -2px;">
              <a-button type="link" icon="left" :size="'large'" />
            </router-link>
          </flex-fixed>
          <flex-fill>
            <span style="font-size: 18px;color:#333;">
              {{boardInfo.title}}
            </span>
            <span
              v-if="projectInfo.beginTime && projectInfo.endTime"
              style="padding-left:18px;vertical-align: 2px;"
            >{{projectInfo.beginTime.format('yyyy-MM-DD')}} 至 {{ projectInfo.endTime.format('yyyy-MM-DD')}}</span>
          </flex-fill>
        </flex-row>
      </flex-fixed>

      <flex-fill :style="{ positon:'relative',overflow:'auto',}">
        <div
          :style="{
            display:'grid',
            gridGap:'16px',
            padding:'5px 20px 20px 20px',
            width:`${(cols.length ) * 328 + 80+20}px`,
            gridTemplateColumns:`${new Array(cols.length||0).fill(0).map(v=>'312px').join(' ') } 80px`
          }"
        >
          <div v-for="v in cols" :key="v.colId" class="col-header">
            {{v.title}}
            <span
              class="col-header-count"
            >({{cards.filter(c=>c.colId === v.colId).length }})</span>
          </div>

          <div></div>

          <template v-for="v in cells">
            <cell-panel
              v-if=" v.type === 'panel'"
              :key="`${v.rowId}-${v.colId}`"
              :rowId="v.rowId"
              :colId="v.colId"
              :cards="v.cards"
              :userList="allUserList"
              @del="cardId=>delCard(cardId)"
              @update="({rowId,colId,cards})=>updateItems({rowId,colId,cards})"
              @openDetail="v=>openDetail(v)"
            >
              <new-card-panel
                :boardId="id"
                :rowId="v.rowId"
                :colId="v.colId"
                :cards="v.cards"
                @add="(card,cb)=>addCard(card,cb)"
                :userList="allUserList"
              />
            </cell-panel>

            <row-opreater
              v-if="v.type === 'operate' "
              :key="`${v.rowId}`"
              :rowId="v.rowId"
              @rowUp="({rowId})=>rowUp(rowId)"
              @rowDown="({rowId})=>rowDown(rowId)"
              @rowTop="({rowId})=>rowTop(rowId)"
              @rowBottom="({rowId})=>rowBottom(rowId)"
              @rowDelete="({rowId})=>rowDelete(rowId)"
              @rowCopy="({rowId})=>rowCopy(rowId)"
            />
          </template>
          <a-button @click="()=>rowAdd()" style="height:48px;text-align:left;">
            <icon-font type="icon-AddItem" style="font-size: 14px;" />添加泳道
          </a-button>
        </div>
      </flex-fill>
    </flex-col>

    <!-- <card-modal :userList="allUserList" ref="cardModal" @reload="()=>loadDetail()" /> -->
  </div>
</template>

<script>
import RowOpreater from "./board/RowOpreater";
import CellPanel from "./board/CellPanel";
import NewCardPanel from "./board/NewCardPanel";
// import CardModal, { outer as modalOuter } from "./board/CardModal";

import * as projectRequest from "@/service/board";

import { BoardInfo, ProjectInfo } from "@/model/Project";

export default {
  components: {
    RowOpreater,
    CellPanel,
    // CardModal,
    NewCardPanel,
  },
  props: ["id"],
  data: () => ({
    rows: [],
    cols: [],
    cards: [],
    allUserList: [],
    boardInfo: BoardInfo.blank(),
    projectInfo: ProjectInfo.blank(),
  }),
  mounted() {
    this.loadDetail();
  },
  computed: {
    cells() {
      return this.rows.flatMap(({ rowId }) =>
        this.cols
          .map(({ colId }) => ({
            rowId,
            colId,
            type: "panel",
            cards: this.cards.filter(
              (v) => v.rowId === rowId && v.colId === colId
            ),
          }))
          .concat([
            {
              rowId,
              colId: null,
              type: "operate",
            },
          ])
      );
    },
  },
  methods: {
    loadDetail() {
      return projectRequest
        .getBoradDetail(this.id)
        .then(({ boardInfo, projectInfo, rows, cols, cards }) => {
          this.rows = rows
          this.cards = cards
          this.cols = cols
          this.boardInfo = boardInfo;
          this.projectInfo = projectInfo
          this.allUserList = projectInfo.editableUser.userList
        })
        .then(() => {});
    },
    cellVersion({ rowId, colId }) {
      const e = this.cards.find((v) => v.rowId === rowId && v.colId === colId);
      return e ? e.version : "";
    },
    // 添加卡片
    addCard(card, cb) {
      projectRequest
        .addCard(card)
        .then(() => this.loadDetail())
        .then(() => cb.res())
        .catch((e) => {
          cb.rej(e);
        });
    },
    delCard(cardId) {
      this.$confirm({
        title: "提示",
        content: "确定删除卡片么？卡片删除后不可恢复",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk: () => {
          projectRequest
            .delCard(cardId)
            .then(() => {
              return this.loadDetail();
            })
            .then(() => {
              this.$message.success("卡片成功删除！");
            });
        },
      });
    },
    rowAdd() {
      projectRequest.addBoardRow(this.id).then(() => this.loadDetail());
    },
    rowUp(rowId) {
      const rows = this.rows.flatMap((v, i, arr) => {
        if (v.rowId === rowId && arr[i - 1]) {
          return [v, arr[i - 1]];
        } else if (arr[i + 1] && arr[i + 1].rowId === rowId) {
          return [];
        } else {
          return [v];
        }
      });
      projectRequest.sortBoardRows(rows).then(() => this.loadDetail());
    },
    rowDown(rowId) {
      const rows = this.rows.flatMap((v, i, arr) => {
        if (v.rowId === rowId && arr[i + 1]) {
          return [arr[i + 1], v];
        } else if (arr[i - 1] && arr[i - 1].rowId === rowId) {
          return [];
        } else {
          return [v];
        }
      });
      projectRequest.sortBoardRows(rows).then(() => this.loadDetail());
    },
    rowDelete(rowId) {
      this.$confirm({
        title: "提示",
        content: "确定删除泳道么？泳道删除后不可恢复",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk: () => {
          projectRequest
            .deleteBoardRow(rowId)
            .then(() => this.loadDetail())
            .then(() => {
              this.$message.success("泳道成功删除！");
            });
        },
      });
    },
    // 拖动卡片
    updateItems({ rowId, colId, cards }) {
      if (!this.$updateCache) this.$updateCache = [];
      if (this.$updateTimeout) clearTimeout(this.$updateTimeout);
      this.$updateCache.push({
        rowId,
        colId,
        version: this.cellVersion({ rowId, colId }),
        cards: cards.map((v, i) => Object.assign({}, v, { sort: i })),
      });

      this.$updateTimeout = setTimeout(() => {
        this.updateItemsList(this.$updateCache);
        this.$updateCache = [];
        this.$updateTimeout = null;
      }, 50);

      this.cards = this.cards
        .filter((v) => v.rowId !== rowId || v.colId !== colId)
        .concat(
          cards.map((v, sort) => Object.assign({}, v, { colId, rowId, sort }))
        );
    },
    updateItemsList(cells) {
      return projectRequest
        .updateCards(this.id, cells)
        .finally(() => this.loadCells(cells));
    },
    loadCells(cells) {
      return projectRequest
        .getCellsCard(
          this.id,
          cells.map(({ rowId, colId }) => ({ rowId, colId }))
        )
        .then((arr) => {
          arr.forEach(({ rowId, colId, cards }) => {
            this.cards = this.cards
              .filter((v) => v.rowId !== rowId || v.colId !== colId)
              .concat(cards);
          });
        });
    },
    openDetail(v) {
      console.log(v);
      // this.$refs.cardModal[modalOuter.open](v);
    },
  },
};
</script>

<style lang="css" scoped>
.page-outer {
  height: 100%;
  width: 100%;
  padding: 32px 48px 32px 48px;
}

.page-inner {
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: auto;
}

.col-header {
  background: rgb(242, 243, 243);
  line-height: 24px;
  text-align: left;
  padding: 16px 16px 4px;
  font-size: 16px;
  margin-bottom: -16px;
}

.col-header-count {
  padding-left: 2px;
  color: rgb(183, 183, 183);
}
</style>