<template>
  <styled-card
    style="height:140px"
    padding
    level
    hover
    :class="['card',status]"
    @click.native="()=>linkToBoard(boardInfo.boardId)"
  >
    <flex-col style="height:100%;">
      <flex-fill class="title">
        <span v-if="this.status === 'view'">{{boardInfo.title}}</span>
        <a-input
          v-if="this.status === 'edit'"
          type="textarea"
          style="height:100%"
          v-model="editTitle"
        />
      </flex-fill>
      <flex-fixed class="btn" @click.native.stop v-if="owner()">
        <template v-if="this.status === 'view'">
          <a-button icon="edit" @click="()=>toggleStatus()" type="link" size="small"></a-button>
          <a-button icon="delete" type="link" size="small"></a-button>
        </template>
        <template v-if="this.status === 'edit'">
          <a-button type="primary" class="btn-next">保存</a-button>
          <a-button @click="()=>toggleStatus()" type="link">取消</a-button>
        </template>
      </flex-fixed>
    </flex-col>
  </styled-card>
</template>

<script>
import { auth } from "@/utils/auth";
export default {
  props: ["boardInfo"],
  data: () => ({
    status: "view" || "edit",
    editTitle: "",
  }),
  methods: {
    ...auth(),
    toggleStatus() {
      this.status = this.status === "view" ? "edit" : "view";
      this.editTitle = this.status === "edit" ? this.boardInfo.title : "";
    },
    linkToBoard(boardId) {
      if (this.status === "view") this.$router.push(`/board/${boardId}`);
    },
  },
};
</script>


<style scoped>
.title {
  overflow: hidden;
}

.card.view .btn {
  text-align: right;
  margin: 6px 0 -6px;
  height: 0;
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.card.view:hover .btn {
  height: 24px;
}

.card.edit .btn {
  margin: 8px 0 -8px;
  height: 32px;
  transition: all 0.3s ease-out;
  overflow: hidden;
}
</style>

