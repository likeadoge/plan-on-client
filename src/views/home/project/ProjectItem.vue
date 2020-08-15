<template>
  <div>
    <a-collapse default-active-key="1" :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" :style="customStyle" @click.native.stop>
        <template #header>
          {{info.title}}
          <a-dropdown  v-if="owner()">
            <a class="ant-dropdown-link" @click.stop="e => e.preventDefault()">
              <a-icon type="more" :rotate="90" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>保存为模板</a-menu-item>
              <a-menu-item @click="()=>editProject()">编辑</a-menu-item>
              <a-menu-item>归档</a-menu-item>
              <a-menu-item>删除</a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>

        <div class="board-list">
          <styled-card
            padding
            level
            hover
            v-for="v in boardList"
            @click.native="()=>linkToBoard(v.boardId)"
            :key="v.boardId"
            style="height:140px"
          >
            <p>{{v.title}}</p>
          </styled-card>

          <dashed-button v-if="owner()" :style="{height:'140px'}" :icon-size="32" @click="cb=>cb(addBoard())"></dashed-button>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import * as boardRequest from '@/service/board'

export default {
  props: ["id", "info", "boardList"],
  mounted() {
    console.log(this.boardList);
  },
  computed: {},
  data() {
    return {
      customStyle:
        "background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden",
    };
  },
  methods: {
    owner() {
      return true;
    },
    editor() {
      return false;
    },
    viewer() {
      return false;
    },
    editProject() {
      this.$emit("editProject", this.id);
    },
    linkToBoard(boardId) {
      this.$router.push(`/board/${boardId}`);
    },
    addBoard(){
      return boardRequest.addBoard(this.id).then(()=>this.$emit('reload'))
    }
  },
};
</script>

<style scoped>
.board-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
</style>