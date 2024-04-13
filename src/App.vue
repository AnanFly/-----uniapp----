<template></template>
<script lang="ts">
import autoUpdate from "../src/utils/autoUpdate.js";
export default {
  onLaunch: function () {
    // 监测是否需要更新
    autoUpdate();
  },
};
</script>
<style scoped lang="scss">
@import "./uni_modules/vk-uview-ui/index.scss";
// @import "./styles/common.scss";
</style>
