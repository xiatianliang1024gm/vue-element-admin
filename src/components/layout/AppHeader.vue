<script setup lang="ts">
import { isCollapse } from '@/stores/layout/isCollapse'
</script>
<template>
  <el-header>
    <!-- 展开 折叠的icon -->
    <el-icon class="collapse-icon">
      <IEpFold v-show="!isCollapse" @click="isCollapse = !isCollapse" />
      <IEpExpand v-show="isCollapse" @click="isCollapse = !isCollapse" />
    </el-icon>

    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 下拉框 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" src="https://i.imgur.com/yXOvdOSs.jpg" />
        <el-icon class="el-icon--right">
          <IEpArrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #e9e9eb;
}

.collapse-icon {
  /* icon 在header中 受整体高度的约束 */
  margin-right: 15px;
}

.el-dropdown {
  /* 该元素推到其容器的最右边的效果。这通常用于实现将元素右对齐的布局 */
  margin-left: auto;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
