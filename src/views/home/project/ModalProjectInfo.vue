<template>
  <a-modal v-model="visible" :width="720" centered :title="operaterType === 'add'?'新建项目':'编辑项目'">
    <a-form-model :model="info" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="项目名称">
        <a-input v-model="info.title" />
      </a-form-model-item>
      <a-form-model-item label="项目模板">
        <simple-selector
          :list="templateList"
          :id="'templateId'"
          :label="'name'"
          :disabled="operaterType === 'add'?false:true"
          :value.sync="info.template"
        />
      </a-form-model-item>
      <a-form-model-item label="所属用户组">
        <simple-selector
          :list="groupList"
          :id="'gid'"
          :label="'name'"
          :value.sync="info.editableUser"
        />
      </a-form-model-item>
      <a-form-model-item label="可见用户组">
        <simple-selector
          :list="groupList"
          :id="'gid'"
          :label="'name'"
          :value.sync="info.viewableUser"
        />
      </a-form-model-item>
      <a-form-model-item label="起止时间">
        <a-range-picker v-model="dataRange" style="width: 100%;" />
      </a-form-model-item>
      <a-form-model-item label="项目描述">
        <a-input v-model="info.desc" :rows="5" type="textarea" />
      </a-form-model-item>
    </a-form-model>

    <template #footer>
      <div style="text-align:right">
        <a-button size="large" type="link" @click="()=>visible = false">取消</a-button>
        <async-button size="large" type="primary" @click="(cb)=>cb(submit())">{{operaterType === 'add'?'新建':'保存'}}</async-button>
      </div>
    </template>
  </a-modal>
</template>

<script>
import * as userRequest from "@/service/user";
import * as projRequest from "@/service/project";
import { ProjectInfo } from "@/model/Project";

export const outer = {
  open: "OPEN",
  edit: "EDIT",
};

export default {
  data: () => ({
    visible: false,
    operaterType: "add", // add  || edit
    groupList: [],
    templateList: [],

    labelCol: { span: 5 },
    wrapperCol: { span: 16 },

    info: ProjectInfo.blank(),
  }),
  computed: {
    dataRange: {
      get() {
        return [this.info.beginTime, this.info.endTime];
      },
      set(v) {
        this.info.beginTime = v ? v[0] : null;
        this.info.endTime = v ? v[1] : null;
      },
    },
  },
  methods: {
    loadList() {
      return Promise.all([
        userRequest
          .getUserGroupList()
          .then((arr) => (this.groupList = arr))
          .then(() => console.log("groupList", this.groupList)),
        projRequest
          .getTemplateList()
          .then((arr) => (this.templateList = arr))
          .then(() => console.log("templateList", this.templateList)),
      ]);
    },
    loadProjectInfo(id) {
      return projRequest
        .getProjectInfo(id)
        .then((info) => (this.info = info))
        .then(() => console.log("info", this.info));
    },
    [outer.add]() {
      this.operaterType = "add";
      this.visible = true;
      this.info = ProjectInfo.blank();
      this.loadList();
    },
    [outer.edit](id) {
      this.operaterType = "edit";
      this.visible = true;
      this.info = ProjectInfo.blank();
      this.loadList();
      this.loadProjectInfo(id);
    },
    submit() {
      console.log(this.info);
      this.visible = false
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>
</style>