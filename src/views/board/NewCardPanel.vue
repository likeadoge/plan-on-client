<template>
  <flex-fixed v-if="!viewer()">
    <div style class="add-btn" v-if="!isAddingCard">
      <a-button type="link" icon="plus" @click="()=>toggleStatus()">添加卡片</a-button>
    </div>
    <div v-if="isAddingCard" style class="input panel card">
      <a-textarea v-model="cardInfo.content" :rows="4" />

      <div
        style="margin-top:12px"
        v-if="cardInfo.executors.length>0 || cardInfo.hour||cardInfo.endTime"
      >
        <a-avatar
          v-for="(v) in cardInfo.executors"
          :key="v.uid"
          size="small"
          :style="{ 
                        backgroundColor: 'rgb(19,194,194)', 
                        verticalAlign: '-7px', 
                        marginRight:'6px',
                        fontSize:'10px'
                    }"
        >{{v.realname[0]}}</a-avatar>

        <a-avatar
          v-if="cardInfo.hour"
          size="small"
          :style="{ 
                        backgroundColor: 'rgb(56,194,238)', 
                        verticalAlign: '-7px', 
                        marginRight:'6px',
                        fontSize:'10px'
                    }"
        >{{cardInfo.hour}}</a-avatar>

        <div v-if="cardInfo.endTime" class="date-tag_add">
          {{
          cardInfo.endTime.format('MM,月,DD,日').split(',').map(v=>Number(v)?Number(v):v).join('')
          }}
        </div>
      </div>
      <div class="detail-btn-cntr">
        <!-- 执行人按钮 -->
        <!-- <btn-user-select
                    :userList="userList"
                    :selectedList="cardInfo.executors"
                    @change="arr=>cardInfo.executors = arr"
        />-->
        <!-- 截至时间按钮 -->
        <!-- <btn-time-select :time="cardInfo.endTime" @change="t=>cardInfo.endTime = t" /> -->
        <!-- 工时按钮 -->
        <!-- <btn-workhour :hour="cardInfo.hour" @change="t=>cardInfo.hour = t" /> -->
      </div>
      <div class="btn-cntr">
        <async-button type="primary" @click="cb=>cb(add())" style="margin-right:8px;">确定</async-button>
        <a-button type="link" @click="()=>toggleStatus()">取消</a-button>
      </div>
    </div>
  </flex-fixed>
</template>

<script>
import { CardInfo } from "@/model/Project";
import { auth } from "@/utils/auth";

// import BtnUserSelect from "./BtnUserSelect";
// import BtnTimeSelect from "./BtnTimeSelect";
// import BtnWorkhour from "./BtnWorkhour";
export default {
  props: ["userList", "rowId", "colId", "boardId", "cards"],
  components: {
    // BtnUserSelect,
    // BtnTimeSelect,
    // BtnWorkhour,
  },

  data: () => ({
    isAddingCard: false, // 'def'||'add'
    cardInfo: CardInfo.blank(),
  }),
  methods: {
    ...auth(),
    toggleStatus() {
      this.isAddingCard = !this.isAddingCard;
      if (this.isAddingCard) {
        this.cardInfo = CardInfo.blank();
        this.cardInfo.rowId = this.rowId;
        this.cardInfo.colId = this.colId;
        this.cardInfo.boardId = this.boardId;
      }
    },
    add() {
      if (!this.cardInfo.content.trim()) {
        return this.$message.warning("卡片内容不能为空！");
      } else {
        this.cardInfo.sort =
          this.cards.length === 0
            ? 0
            : this.cards[this.cards.length - 1].sort + 1;

        return new Promise((res, rej) => {
          this.$emit("add", this.cardInfo, {
            res,
            rej,
          });
        }).then(() => {
          this.isAddingCard = false;
        });
      }
    },
  },
};
</script>


<style scoped>
.card.panel {
  border-radius: 4px;
  /* background-color: #fff; */
  
  background: rgb(242, 243, 243);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.01);
  transition: all 0.3s ease-out;
  padding: 18px;
  margin-bottom: 12px;
}
.card.panel.input {
  padding: 8px;
  overflow: hidden;
  margin-top: -16px;
}

.card.panel.input .detail-btn {
  margin-right: 8px;
}

.card.panel.input .btn-cntr {
  padding: 12px 0 0 0;
}
.card.panel.input .detail-btn-cntr {
  padding: 12px 0 0 0;
  float: right;
  height: 32px;
  line-height: 32px;
}

.card.panel.input .detail-btn.last {
  margin-right: 2px;
}

.add-btn {
  margin-top: -16px;
  margin-left: -16px;
}

.date-tag_add {
  display: inline-block;
  background: rgb(235, 235, 235);
  font-size: 12px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 12px;
}
</style>