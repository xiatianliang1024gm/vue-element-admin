<script setup lang="ts">
import { isCollapse } from '@/stores/layout/isCollapse'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeIndex = computed(() => {
  const index = route.matched?.[2]?.path
  console.log('matched index', index)
  return index
})
</script>

<template>
  <el-aside>
    <!-- 1. router: 开启菜单路由 点击后路由到el-menu-item index地址 unique-opened:保证最多只有一个菜单是打开状态  default-active: 选中的子菜单 不能是sub-menu -->
    <el-menu router unique-opened :collapse="isCollapse" :default-active="activeIndex">
      <a class="logo" href="/">
        <img src="@/assets/favicon.ico" fit="cover" />
        <h1 v-show="!isCollapse">管理后台</h1>
      </a>
      <!-- el-image src 使用assets图片有问题 -->
      <!-- <el-image
      style="width: 100px; height: 100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover"
    /> -->
      <el-sub-menu index="/1">
        <template #title>
          <el-icon><IEpLocation /></el-icon>
          <span>菜单栏1</span>
        </template>
        <el-menu-item index="/1/table">子菜单1</el-menu-item>
        <el-menu-item index="/1/tree">子菜单2</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/2">
        <template #title>
          <el-icon><IEpLocation /></el-icon>
          <span>菜单栏2</span>
        </template>
        <el-menu-item index="/2/1">子菜单1</el-menu-item>
        <el-menu-item index="/2/2">子菜单2</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-aside {
  background-color: #dedfe0;
  height: 100vh;
  width: auto;
  /* flex布局对其中的menu生效，如果不是flex，menu撑不满 */
  display: flex;
}
.el-menu {
  /* --active-text-color: #ffd04b; */
  /* background-color: #545c64; */
  background-color: #dedfe0;
  /* --text-color: #fff; */

  /* 3. 菜单栏右侧1px的边界去掉 */
  border-right: none;
  width: 200px;
  &.el-menu--collapse {
    width: 60px;
  }
}

.el-menu-item {
  background-color: #dedfe0;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 2. 去掉 a 链接的下划线 */
  text-decoration: none;
  color: black;
  & img {
    width: 20px;
    height: 20px;
  }
}
</style>
