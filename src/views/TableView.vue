<script setup lang="ts">
import { isDialogFormVisible } from '@/stores/table/isDialogFormVisible'
import CreaeteTableDialog from '@/components/table/CreateTableDialog.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>表格名称</span>
        <el-button @click="isDialogFormVisible = true" class="button" type="primary" size="large"
          >创建</el-button
        >
      </div>
    </template>
    <!-- 创建弹窗 -->
    <CreaeteTableDialog />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column>
        <el-button type="primary" size="small">
          <el-icon><IEpEdit /></el-icon>
        </el-button>
        <el-button type="danger" size="small">
          <el-icon><IEpDelete /></el-icon>
        </el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: auto;
  /* height: 100vh; */
}
</style>
