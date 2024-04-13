// 自动更新机制
export default function autoUpdate() {
  if (uni.canIUse("getUpdateManager")) {
    const updateManager = uni.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        //2. 小程序有新版本，则静默下载新版本，做好更新准备
        updateManager.onUpdateReady(function () {
          uni.showModal({
            title: "新版本啦",
            content: "是否重启应用更新嘞？",
            success: function (res) {
              if (res.confirm) {
                console.log("版本更新");
                //3. 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              } else if (res.cancel) {
                //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
                uni.showModal({
                  title: "打个盹~",
                  content:
                    "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                  success: function (res) {
                    autoUpdate();
                    return;
                  },
                });
              }
            },
          });
        });
        updateManager.onUpdateFailed(function () {
          // 新的版本下载失败
          uni.showModal({
            title: "已经有新版本了哟~",
            content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
          });
        });
      }
    });
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    uni.showModal({
      title: "提示",
      content: "当前版本过低，无法使用该功能，请升级到最新版本后重试。",
    });
  }
}
