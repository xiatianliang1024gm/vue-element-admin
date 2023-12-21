<script setup lang="ts"></script>

<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <!-- route是当前的path，router是带历史的访问路径stack -->
      <el-button @click="$router.push({ name: 'home' })" type="primary">Back</el-button>
    </template>
  </el-result>
</template>

<style scoped></style>
