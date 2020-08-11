<template>
  <div style="padding:48px;height:100%">
    <a-layout style="padding: 24px 0; background: #fff;height:100%">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          style="height: 100%"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" />进行中
            </span>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="laptop" />已归档
            </span>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="sub3"><a-icon type="notification" />回收站</a-menu-item>
          <a-menu-item key="sub4"><a-icon type="notification" />模板库</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        

        <project-view />



      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import ProjectView from './home/ProjectView'

export default {
  components:{ProjectView}
};
</script>

<style scoped>
</style>
