<script setup lang="ts">
import { NConfigProvider, NButton } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#ff6600'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="container">
      <h1>测试组件库</h1>
      <div class="demo-section">
        <h2>原生按钮</h2>
        <div class="button-group">
          <n-button>测试按钮</n-button>
        </div>
        <h2>组件库按钮</h2>
        <div class="button-group">
          <my-button></my-button>
          <my-button type="primary">主要按钮</my-button>
          <my-button type="success">成功按钮</my-button>
          <my-button type="warning">警告按钮</my-button>
          <my-button type="error">错误按钮</my-button>
        </div>
      </div>
    </div>
  </n-config-provider>
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

<!-- 全局样式 -->
<style>
/* 修改所有按钮的基础样式 */
.n-button {
  border-radius: 20px !important;  /* 圆角按钮 */
  height: 40px !important;         /* 统一高度 */
  padding: 0 24px !important;      /* 左右内边距 */
  font-weight: bold !important;    /* 粗体文字 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important; /* 添加阴影 */
  transition: all 0.3s ease !important;  /* 平滑过渡效果 */
}

/* 悬停效果 */
.n-button:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
}

/* 点击效果 */
.n-button:active {
  transform: translateY(1px) !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
}
</style>
<!-- git+https://github.com/Maxiaochuan123/my-components.git#main --sparse=/dist -->