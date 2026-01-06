document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScriptが連携されています！");

  const btn = document.getElementById("clickBtn");
  btn.addEventListener("click", () => {
    alert("ボタンがクリックされました！");
  });
});