<template>
  <div class="main" style="padding:48px 32px;height:100%">
    <a-layout style="padding: 24px 0; background: #fff;height:100%">
      <a-layout-sider width="200" style="background: #fff">
        <flex-col  style="height:100%">
          <flex-fixed class="new-btn-cntr">
            <a-button type="primary"  @click="()=>addProject()">新建项目</a-button>
          </flex-fixed>
          <flex-fill>
            <a-menu
          mode="inline"
          style="height: 100%"

          :selected-keys="[selectedKey]"
          :open-keys="[openedMenu]"
        >
          <a-sub-menu key="processing" @click.native="()=>{openedMenu = 'processing'}">
            <span slot="title">
              <a-icon type="user" />进行中
            </span>
            <a-menu-item key="1"  @click.native="()=>selectedKey = '1'">option1</a-menu-item>
            <a-menu-item key="2"  @click.native="()=>selectedKey = '2'">option2</a-menu-item>
            <a-menu-item key="3"  @click.native="()=>selectedKey = '3'">option3</a-menu-item>
            <a-menu-item key="4"  @click.native="()=>selectedKey = '4'">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="done" @click.native="()=>openedMenu = 'done'">
            <span slot="title">
              <a-icon type="laptop" />已归档
            </span>
            <a-menu-item key="5"  @click.native="()=>selectedKey = '5'">option5</a-menu-item>
            <a-menu-item key="6"  @click.native="()=>selectedKey = '6'">option6</a-menu-item>
            <a-menu-item key="7"  @click.native="()=>selectedKey = '7'">option7</a-menu-item>
            <a-menu-item key="8"  @click.native="()=>selectedKey = '8'">option8</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="sub3"  @click.native="()=>selectedKey = 'sub3'"><a-icon type="notification" />回收站</a-menu-item>
          <a-menu-item key="sub4"  @click.native="()=>selectedKey = 'sub4'"><a-icon type="notification" />模板库</a-menu-item>
        </a-menu>
          </flex-fill>
        </flex-col>
      </a-layout-sider>
      <a-layout-content>
        <project-view  ref="projectView"/>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import ProjectView,{outer as outPV} from './home/ProjectView'

export default {
  components:{ProjectView},
  data:()=>({
    selectedKey:'',
    openedMenu:'processing',
  }),
  methods:{
    addProject(){
      this.$refs.projectView[outPV.addProject]()
    }
  }
};
</script>

<style scoped>
.new-btn-cntr{
  padding: 8px 16px;
  border-right: 1px solid #e8e8e8;
}

.new-btn-cntr>button{
  width:100%;text-align:center
}


.main >>> li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open{
  height: calc(100% - 144px);
}

.main >>> li.ant-menu-submenu{
  transition: height 0.3s ease-out;
  height: 48px;
}
</style>
