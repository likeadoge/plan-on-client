<template>
  <div>
    <a-collapse default-active-key="1" :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" :style="customStyle" @click.native.stop>
        <template #header>
          {{info.title}}
          <a-dropdown>
            <a class="ant-dropdown-link" @click.stop="e => e.preventDefault()">
              <a-icon type="more" :rotate="90" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">保存为模板</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="()=>editProject()">编辑</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">归档</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">删除</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>

        <div class="board-list">
          <styled-card
            padding
            level
            hover
            v-for="v in boardList"
            :key="v.boardId"
            style="height:140px"
          >
            <p>{{v.title}}</p>
          </styled-card>
        </div>
        <!-- <p>{{ text }}</p> -->
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  props: ["id", "info", "boardList"],
  mounted() {
    console.log(this.boardList);
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        "background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden",
    };
  },
  methods: {
    editProject() {
      this.$emit("editProject", this.id);
    },
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