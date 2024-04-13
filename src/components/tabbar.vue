<template>
  <view class="tabbar">
    <view
      v-for="item in list"
      :key="item.index"
      @click="switchTab(item)"
      :class="['tabbar-item', current === item.index ? 'active' : '']"
    >
      <view class="tabbar-icon">
        <image
          :src="current === item.index ? item.selectedIconPath : item.iconPath"
        />
      </view>
      <view class="tabbar-text" v-if="item.text">{{ item.text }}</view>
    </view>
  </view>
  <u-popup
    v-model="show"
    height="120px"
    :mask="false"
    :custom-style="popStyle"
    mode="bottom"
  >
    <view>
      <web-view
        :fullscreen="false"
        class="web-view"
        style="height: 150px"
        src="https://haokawx.lot-ml.com/Product/index/350963"
      />
    </view>
  </u-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TabbarList, list } from "../constant/tabbarList";
import { userStore } from "../store/user";
const emit = defineEmits(["switchTabNum"]);
const current = ref(0);
const show = ref(false);
const popStyle = {
  marginBottom: "70px",
};
const store = userStore();
const switchTab = (tabItem: TabbarList) => {
  if (tabItem.changePage) {
    show.value = false;
    current.value = tabItem.index;
    store.setCurrentTab(tabItem.index);
    emit("switchTabNum", tabItem.index);
  } else {
    show.value = true;
  }
};
</script>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $tabbar-height;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  .active {
    color: #007aff;
  }
  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .tabbar-icon {
      width: 35px;
      height: 35px;
      image {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(2) {
      .tabbar-icon {
        width: 60px;
        height: 60px;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .tabbar-text {
      font-size: 14px;
      color: #666;
    }
    &.active {
      .tabbar-text {
        color: #007aff;
      }
    }
  }
}
</style>
