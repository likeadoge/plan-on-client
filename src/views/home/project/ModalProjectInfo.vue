<template>
  <a-modal v-model="visible" :width="720" centered title="新建项目" >
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="项目名称">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="项目模板">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="所属用户组">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option v-for="v in groupList" :key="'a-'+v.gid" :value="v.gid">{{v.name}}</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="可见用户组">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="起止时间">
        <a-range-picker  style="width: 100%;" />
      </a-form-model-item>
      <a-form-model-item label="项目描述">
        <a-input v-model="form.desc" :rows="3" type="textarea" />
      </a-form-model-item>
    </a-form-model>

    <template #footer>
      <div style="text-align:right">
        <a-button size="large"  type="link" @click="()=>visible = false">取消</a-button>
        <async-button size="large" type="primary">新建</async-button>
      </div>
    </template>
  </a-modal>
</template>

<script>
import * as userRequest from "@/service/user";

export const outer = {
  open: "OPEN",
  edit: "EDIT",
};

export default {
  data: () => ({
    visible: true,

    operaterType: "add",
    groupList: [],

    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
    form: {
      name: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",

      title: "",
      template: null,
      beginTime: null,
      endTime: null,
      desc: "",
    },
  }),
  methods: {
    loadUserGroup() {
      userRequest.getALlUserGroup()
        .then((arr) => (this.groupList = arr))
        .then(()=>console.log(this.groupList))
    },
  },
  mounted(){
    this.loadUserGroup()
  }
};
</script>

<style scoped>
</style>