export interface TabbarList {
  pagePath: string;
  iconPath: string;
  selectedIconPath: string;
  text?: string;
  changePage: boolean;
  index: number;
}
export const list: TabbarList[] = [
  {
    pagePath: "/pages/index/index",
    iconPath: "/static/tabbar/index.png",
    selectedIconPath: "/static/tabbar/index-active.png",
    text: "首页",
    changePage: true,
    index: 0,
  },
  {
    pagePath: "/pages/home/home",
    //https://cdn.uviewui.com/uview/common/min_button.png
    iconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
    selectedIconPath:
      "https://cdn.uviewui.com/uview/common/min_button_select.png",
    changePage: false,
    index: 1,
  },
  {
    pagePath: "/pages/my/my",
    iconPath: "/static/tabbar/my.png",
    selectedIconPath: "/static/tabbar/my-active.png",
    changePage: true,
    text: "我的",
    index: 2,
  },
];
