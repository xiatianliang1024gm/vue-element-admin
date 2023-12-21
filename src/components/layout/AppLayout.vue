<script setup lang="ts">
import AppAside from '@/components/layout/AppAside.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>
<template>
  <div>
    <el-container>
      <AppAside />
      <el-container class="header-and-main">
        <AppHeader />
        <el-main>
          <!-- 打洞slot 避免页面太大撑爆了，加滚动条 -->
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.header-and-main {
  /* header和main在一个contain中 纵向排布 */
  flex-direction: column;
  height: 100vh;
}
.el-main {
  background-color: #f4f4f5;
}
</style>
