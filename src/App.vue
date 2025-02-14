<script setup lang="ts">
// 组件已全局注册，无需导入
</script>

<template>
  <div class="container">
    <h1>测试组件库</h1>
    <div class="demo-section">
      <h2>按钮组件</h2>
      <div class="button-group">
        <my-button></my-button>
        <my-button type="primary">主要按钮</my-button>
        <my-button type="success">成功按钮</my-button>
        <my-button type="warning">警告按钮</my-button>
        <my-button type="error">错误按钮</my-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.button-group {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  color: #666;
}
</style>
