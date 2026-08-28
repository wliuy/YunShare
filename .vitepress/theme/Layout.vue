<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="home-announcement">
        <span>
          资源站即将迎来重大改版，<b>暂停更新</b>，相关内容请访问导航站
          <a href="https://dh.89729981.xyz/" target="_blank" rel="noopener">dh.89729981.xyz</a> 和博客站
          <a href="https://www.89729981.xyz/" target="_blank" rel="noopener">www.89729981.xyz</a>。关注公众号【寂静如雪】以防迷路。
        </span>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.home-announcement {
  box-sizing: border-box;
  width: 100%;
  flex-shrink: 0;
  padding: 13px 20px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 15px;
  line-height: 1.7;
  font-weight: 600;
  color: #b45309;
  background: linear-gradient(180deg, #fff7ed 0%, #fffbeb 100%);
  border-bottom: 1px solid #fde68a;
}
.home-announcement a {
  color: #b45309;
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.home-announcement a:hover {
  color: #92400e;
}

@media (max-width: 959px) {
  .home-announcement {
    padding: 10px 14px;
    margin-bottom: 28px;
    font-size: 13px;
  }
}
</style>