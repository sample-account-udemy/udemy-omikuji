const btn = document.querySelector("button");
btn.addEventListener("click", draw);

function draw() {
  // 乱数
  const rand = Math.floor(Math.random() * 100);
  // おみくじ結果を出力するフィールド
  const result = document.getElementById("result");

  // 1～5：大吉 6~25：吉 26~60：凶 61~99：大凶
  switch (true) {
    // randが1～5
    case rand <= 5:
      result.textContent = "結果：大吉";
      break;

    // randが6~25
    case rand > 5 && rand <= 25:
      result.textContent = "結果：吉";
      break;

    // randが26~60
    case rand > 25 && rand <= 60:
      result.textContent = "結果：凶";
      break;

    // randが61~99
    case rand > 60:
      result.textContent = "結果：大凶";
      break;
  }
}
