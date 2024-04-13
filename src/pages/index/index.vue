<template>
  <template v-if="current === 0">
    <shouye />
  </template>
  <template v-else>
    <my />
  </template>
  <tabbar @switch-tab-num="switchTabbar" />
</template>
<script setup lang="ts">
import tabbar from "../../components/tabbar.vue";
import shouye from "../../components/pages/shouye.vue";
import my from "../../components/pages/my.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const current = ref(0);
const switchTabbar = (index: number) => {
  console.log("索引", index);
  current.value = index;
};
</script>
<style scoped lang="scss">
.default {
  color: #000;
}
.active {
  color: #f00;
}
</style>
