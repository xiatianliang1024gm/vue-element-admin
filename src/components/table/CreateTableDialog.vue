<script setup lang="ts">
import { isDialogFormVisible } from '@/stores/table/isDialogFormVisible'
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})
const formLabelWidth = '140px'
</script>

<template>
  <el-dialog v-model="isDialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isDialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="isDialogFormVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
