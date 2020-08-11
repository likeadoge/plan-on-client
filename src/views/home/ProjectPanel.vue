<template>
  <div>
    <task-panel
      ref="panel"
      v-for="(v) in projectList"
      :key="v.id"
      :id="v.id"
      :title="v.name"
      :sub-title="v.describe"
      :templateId="v.templateId"
      :orgId="v.orgId"
      :beginTime="v.beginTime"
      :endTime="v.endTime"
      :boardList="v.boardList"
      @loadProject="loadProject"
      @sortBoard="boards=>sortBoards(v.id, boards)"
      @addBoard="()=>addBoard(v.id)"
      @editBoard="(id,name)=>editBoard(v.id,id,name)"
      @reload="loadSingleProject(v.id)"
      @reloadAll="loadProject()"
    />

    <modal-board ref="modalBoard" @reload="id=> loadSingleProject(id)" />
  </div>
</template>

<script>
import TaskPanel from "./TaskPanel";
import ModalBoard, { outer as outerMD } from "./ModalBoard";

import * as itemRequest from "@/request/item";


export const outer = {
  reload:'RELOAD'
}


export default {
  components: {
    TaskPanel,
    ModalBoard,
  },
  data() {
    return {
      projectList: [],
      boardList: [],
      panels: [],
    };
  },
  methods: {
    [outer.reload](){
      this.loadProject() 
    },
    earth(localid) {
      document.querySelector('.anchor#el'+localid).click();
    },
    loadProject() {
      itemRequest.getProject().then((res) => {
        this.projectList = res;
        this.$emit('updateProjectIndex',this.projectList.map(({id,name})=>({id,name})))
      });
    },
    loadSingleProject(projectId) {
      return itemRequest.getProjectInfo(projectId).then((data) => {
        this.projectList.forEach((v) => {
          if (v.id === data.id) {
            Object.assign(v, data);
          }
        });
      });
    },
    loadBoard() {
      itemRequest.getAll().then((res) => {
        this.boardList = res;
      });
    },
    sortBoards(projectId, arr) {
      const target = this.projectList.find((v) => v.id == projectId);
      if (target) {
        target.boardList = arr.map((v, sort) => Object.assign(v, { sort }));
        itemRequest
          .sortBoard(arr)
          .then(() => this.loadSingleProject(projectId));
      }
    },
    addBoard(projectId) {
      this.$refs.modalBoard[outerMD.add]({ projectId });
    },
    editBoard(projectId, id, name) {
      this.$refs.modalBoard[outerMD.edit]({ projectId, id, name });
    },
  },
  mounted() {
    this.loadProject();
    this.loadBoard();
  },
};
</script>
<style scoped>
</style>