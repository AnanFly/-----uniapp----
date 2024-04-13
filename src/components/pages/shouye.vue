<template>
  <view class="shouye">
    首页
    <!-- <web-view
      :fullscreen="false"
      class="web-view"
      style="height: 150px"
      src="https://preh5.hzylgs.com"
    /> -->
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
onMounted(() => {
  console.log("首页,onMounted");
});
</script>

<style scoped lang="scss">
.shouye {
  height: $page-height;
  //   .web-view {
  //     height: 100%;
  //   }
}
</style>
