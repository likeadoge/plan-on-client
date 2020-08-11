<template>
  <a-modal
    :visible="visible"
    :title="opreateType==='add'?'新建看板':'编辑看板'"
    @cancel="cancel"
    :width="700"
  >
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="看板名称" ref="name" prop="name">
        <a-input v-model="form.name" placeholder="请输入看板名称" />
      </a-form-model-item>
    </a-form-model>
    <template slot="footer">
      <a-checkbox v-show="opreateType==='add'" v-model="checked" style="float: left;">继续创建看板</a-checkbox>
      <a-button @click="cancel">取消</a-button>
      <a-button type="primary" @click="submit">确定</a-button>
    </template>
  </a-modal>
</template>

<script>
import * as itemRequest from "@/request/item";

export const outer = {
  add: "ADD",
  edit: "EDIT",
};

export default {
  data: () => ({
    opreateType: "add", // "add" || "edit"
    visible: false,
    id: "",
    projectId: "",
    checked: false,

    form: {
      name: "",
    },
    rules: {
      name: [{ required: true, message: "请输入看板名称", trigger: "change" }],
    },
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }),
  methods: {
    submit() {
      return this.$refs.form.validate((valid) => {
        if (valid && this.opreateType == "add") {
          itemRequest
            .createBoard({
              name: this.form.name,
              projectId: this.projectId,
            })
            .then(()=>{
              this.form.name = ''
              if(!this.checked) this.visible = false 
            })
            .finally(() => {
              this.$emit("reload", this.projectId);
            });
        } 
        else if (valid && this.opreateType == "edit") {
          itemRequest
            .editBoard({
              id:this.id,
              name: this.form.name,
              projectId: this.projectId,
            })
            .then(()=>{
              this.visible = false 
            })
            .finally(() => {
              this.$emit("reload", this.projectId);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel() {
      this.visible = false;
    },
    [outer.add]({ projectId }) {
      this.projectId = projectId;
      this.form.name = "";
      this.opreateType = "add";
      this.visible = true;
    },
    [outer.edit]({ projectId, name, id }) {
      this.id = id;
      this.projectId = projectId;
      this.form.name = name;
      this.opreateType = "edit";
      this.visible = true;
    },
  },
};
</script>
<style scoped>
</style>