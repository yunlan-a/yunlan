<!-- src\layout\AppLayout.vue -->
<template>
    <el-container>
      <el-aside width="200px">
        </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <!-- 子路由出口 -->
          <h2>container</h2>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="scss">
  .el-container {
    height: 100vh;
  }
  .el-header {
    background-color: #B3C0D1;
  }
  .el-aside {
    width: auto;
    background-color: #304156;
  }
  .el-main {
    background-color: #E9EEF3;
  }
  </style>
  
  