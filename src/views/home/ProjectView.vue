<template>
  <div class="cntr">
    <modal-project-info ref="modalProject" />

    <project-item
      :info="v.info"
      :id="v.info.projectId"
      :boardList="v.boardList"
      v-for="v in list"
      :key="v.info.projectId"
      @editProject="v=>editProject(v)"
    />
  </div>
</template>

<script>
import ProjectItem from "./project/ProjectItem";
import ModalProjectInfo, {
  outer as outMP,
} from "./project/ModalProjectInfo";
import * as projRequest from "@/service/project";

export const outer = {
  addProject: "ADD",
};

export default {
  components: { ProjectItem, ModalProjectInfo },
  data: () => ({
    list: [],
  }),

  mounted() {
    projRequest
      .getProjectList()
      .then((list) => (this.list = list))
      .then(() => console.log(this.list));
  },
  methods: {
    [outer.addProject]() {
      this.addProject();
    },
    addProject() {
      this.$refs.modalProject[outMP.add]();
    },
    editProject(v) {
      this.$refs.modalProject[outMP.edit](v);
    },
  },
};
</script>

<style lang="css" scoped>
.cntr {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0 24px;
}
</style>