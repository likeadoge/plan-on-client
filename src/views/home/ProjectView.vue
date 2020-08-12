<template>
  <div class="cntr">
    
    <modal-project-info />
    <project-item
      :info="v.info"
      :id="v.info.projectId"
      :boardList="v.boardList"
      v-for="v in list"
      :key="v.info.projectId"
    />
  </div>
</template>

<script>
import ProjectItem from "./project/ProjectItem";
import ModalProjectInfo from "./project/ModalProjectInfo";
import * as projRequest from "@/service/project";

export default {
  components: { ProjectItem, 
  ModalProjectInfo 
  },
  data: () => ({
    list: [],
  }),
  mounted() {
    projRequest.getProjectList().then((list) => (this.list = list)).then(()=>console.log(this.list));
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