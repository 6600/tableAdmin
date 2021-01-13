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
      value: userData
    })
  }).then((response) => {return response.json();}).then((res) => {
    if (res.err === 0) {
      owo.tool.toast('提交成功!')
    } else {
      owo.tool.toast(`提交失败: ${res.message}`)
    }
  })
}