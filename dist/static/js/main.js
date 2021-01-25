function saveUserSub(userData) {
  fetch(`http://going.run/userServer?route=updataSub`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: owo.state.userInfo.username,
      session: owo.state.userInfo.session,
      type: appType,
      value: userData,
      userID: owo.state.userInfo.userID
    })
  }).then((response) => {return response.json();}).then((res) => {
    if (res.err === 0) {
      owo.tool.toast('提交成功!')
    } else {
      owo.tool.toast(`提交失败: ${res.message}`)
    }
  })
}

function saveUserInfo () {
  fetch(`http://going.run/userServer?route=updata`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: owo.state.userInfo.username,
      session: owo.state.userInfo.session,
      type: '苏州斯百特教育财务平台',
      value: owo.state.userInfo.data,
      userID: owo.state.userInfo.userID
    })
  }).then((response) => {return response.json();}).then((res) => {
    if (res.err === 0) {
      owo.tool.toast('保存成功!')
    } else {
      owo.tool.toast(`提交失败: ${res.message}`)
    }
  })
}

function copyText(text) {
  var input = document.getElementById("copyinput");
  input.value = text; // 修改文本框的内容
  input.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
 }