<template>
  <div style="overflow: hidden;padding-top: 9px">
    <a-collapse :bordered="false" :id="id" :defaultActiveKey="id">
      <a :id="'el'+id" class="anchor" :href="'#'+`${'el'+id}`" style="color: #fcfcfd;"></a>
      <a-collapse-panel :key="id">
        <template slot="header">
          <icon-font
            type="icon-project"
            style="font-size: 18px; color: #45e2e2; margin-right: 10px;"
          />
          <span style="font-size: 18px; color: #333;">{{title}}</span>
        </template>
        <template slot="extra">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="saveTemplate(id, title)">保存为模板</a-menu-item>
              <a-menu-item key="2" @click="editProject">编辑</a-menu-item>
              <a-menu-item key="3" @click="handleLib">归档</a-menu-item>
              <a-menu-item key="4" @click="handleDel">删除</a-menu-item>
            </a-menu>
            <a-button type="link" @click.stop="()=>{}">
              <icon-font style="font-size: 18px; color: #999;" type="icon-more" />
            </a-button>
          </a-dropdown>
        </template>
        <draggable
          v-model="list"
          class="board-cntr"
          :filter="'.board-add'"
          :draggable="'.board'"
          :element="'div'"
          :ghostClass="'board-card-ghost'"
          :group="{name:'board-card'}"
          style="padding-bottom:16px；display: grid; grid-row-gap: 20px; grid-column-gap: 20px; grid-template-columns: repeat(auto-fill, minmax(268px,1fr));"
        >
          <div
            class="board border-card"
            v-for="(v,i) in boardList"
            :key="v.id"
            style="padding: 16px 20px; border: #f2f2f2; box-shadow: 0 3px 8px 0 rgba(46,49,72,.1)"
            @click="openCellPanel(v.id)"
          >
            {{i + 1}}.&nbsp;&nbsp;{{v.name}}
            <div style="float: right; margin-top: 55px;">
              <a @click.stop="editBoard(v.id, v.name)">
                <icon-font style="font-size: 15px;" type="icon-edit" class="icon-edit" />
              </a>
              <a @click="delBoard(v.id)" style="margin-left: 10px;">
                <icon-font style="font-size: 16px; color: #f84040;" type="icon-delete" />
              </a>
            </div>
          </div>
          <div
            class="board-add border-card"
            style="display: flex; justify-content: center; align-items: center;"
            @click="()=>addBoard()"
          >
            <icon-font type="icon-AddItem" style="font-size: 16px;" />
            <span style="margin-left: 8px; font-size: 16px;">添加看板</span>
          </div>
        </draggable>
      </a-collapse-panel>
    </a-collapse>
    <info-library ref="infolib" :id="id" @exeLib="exeLib" />
    <custom-template-modal ref="template" @exeTemplate="exeTemplate" />
    <create-project-modal ref="project" @addProject="addProject" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import InfoLibrary from "../components/InfoLibrary";
import CustomTemplateModal from "../components/CustomTemplateModal";
import CreateProjectModal from "../components/CreateProjectModal";
import * as item from "../../request/item";

export default {
  components: {
    draggable,
    InfoLibrary,
    CustomTemplateModal,
    CreateProjectModal,
  },
  props: [
    "id",
    "title",
    "subTitle",
    "templateId",
    "orgId",
    "beginTime",
    "endTime",
    "boards",
    "boardList",
  ],
  data() {
    return {
      visibleBoard: false,
      visibleDel: false,
      visibleLib: false,
      visibleTemplate: false,
      newBoard: [],
      editshow: false,
    };
  },
  methods: {
    editBoard(id, name) {
      this.$emit("editBoard", id, name);
    },
    addBoard() {
      this.$emit("addBoard");
    },
    loadBoard() {
      this.$emit("reload");
    },
    loadAllBoard() {
      this.$emit("reloadAll");
    },
    handleClick(event) {
      event.stopPropagation();
    },
    handleDel() {
      // this.$refs.infodel.visibleDel = true;
      this.$confirm({
        title: "提示",
        content: "确定将项目删除么？项目删除后不可恢复",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk: () => {
          item.Deleteproject(this.id).then(() => {
            this.$message.success("项目成功删除！");
            this.loadAllBoard();
          });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    handleLib() {
      // console.log("项目归档")
      this.$refs.infolib.visibleLib = true;
    },
    exeLib(id) {
      item
        .Libraryproject(id)
        .then(() => {
          this.$message.success("项目已归档，请在归档库进行查看！");
          this.$emit("loadProject");
          this.loadBoard();
          // }
        })
        .catch((err) => this.$message.info(err));
    },
    saveTemplate(id, title) {
      this.$refs.template.title = "保存为模板";
      this.$refs.template.visibleTemplate = true;
      this.$refs.template.edit(id, title);
    },
    exeTemplate(id, name) {
      item
        .saveTemplate(id, name)
        .then(() => {
          this.$message.success("模板保存成功！");
          this.$emit("loadProject");
        })
        .catch(() => {
          this.$message.error("error");
        });
    },
    editProject() {
      this.$refs.project.visibleProject = true;
      this.$refs.project.title = "编辑项目";
      this.$refs.project.edit(
        this.id,
        this.title,
        this.templateId,
        this.orgId,
        this.beginTime,
        this.endTime,
        this.subTitle
      );
      this.$refs.project.loadDepart();
      this.$refs.project.loadCustomTemplate();
    },
    openCellPanel(id) {
      this.$router.push({ path: `/board/${id}` });
    },
    addProject(value) {
      const { name, templateId, orgId, beginTime, endTime, describe } = value;
      const id = this.id;
      item
        .Editproject({
          id,
          name,
          templateId,
          orgId,
          beginTime,
          endTime,
          describe,
        })
        .then(() => {
          this.$emit("loadProject");
          this.loadBoard();
        })
        .catch((msg) => this.message(msg));
    },
    delBoard(id) {
      event.stopPropagation();

      this.$confirm({
        title: "提示",
        content: "确定删除看板么？看板删除后不可恢复",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk: () => {
          item.delBoard(id).then(() => {
            this.$message.success("看板已删除");
            this.loadBoard();
          });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
  },
  computed: {
    list: {
      get() {
        return this.boardList;
      },
      set(arr) {
        this.$emit("sortBoard", arr);
      },
    },
  },
};
</script>

<style scoped>
.ant-collapse > div {
  background-color: #fcfcfd;
}
.ant-collapse-item {
  border-bottom: none;
}
.ant-collapse-header {
  margin-bottom: 24px;
}

.ant-collapse-content-box > div {
  border-bottom-color: #fcfcfd;
  margin-top: 8px;
}
.task-panel {
  margin: 30px;
  margin-bottom: 100px;
}
.board {
  height: 104px;
  background-color: #fff;
}
.board-add {
  height: 104px;
  border-style: dashed !important;
  border-color: #ddd;
}
.board-cntr {
  display: grid;
  gap: 16px 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.board-card-ghost {
  opacity: 0.5;
}
.board > div {
  display: none;
}
.board:hover > div {
  display: block;
}
.board:hover {
  box-shadow: 0px 8px 10px 0px rgba(46, 49, 72, 0.1) !important;
}
.board-add:hover {
  border-color: #13c2c2;
}
</style>


