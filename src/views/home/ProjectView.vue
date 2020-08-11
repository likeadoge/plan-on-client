<template>
  <div class="cntr">
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
import * as projRequest from "@/request/project";

export default {
  components: { ProjectItem },
  data: () => ({
    list: [],
  }),
  mounted() {
    projRequest.getProjectList().then((list) => (this.list = list));
  },
};
</script>

<style lang="css" scoped>
.cntr {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding:0 24px;
}
</style>