// 甜點清單
const gifts = [
  "美麗",
  "巧怡",
  "允珈",
  "聖哲",
  "蘇湘",
  "郁姍",
  "梓聖",
  "孟耘",
  "之貴",
  "承遠",
  "舒渝",
  "采詩",
  "蘇莫",
  "懷主",
  "秉諭",
  "明翰",
  "嘉妤",
  "于婷",
  "子怡",
  "豈旭",
  "品臻",
  "虹燕",
  "其趯",
];

// 已經抽中的甜點
let drawnGifts = [];

// 抽獎邏輯
document.getElementById("draw-button").addEventListener("click", () => {
  const resultElement = document.getElementById("gift-result");

  // 檢查是否所有甜點都已經抽完
  if (drawnGifts.length === gifts.length) {
    resultElement.textContent = `🌟 恭喜抽到：${drawnGifts[0]} 🍰`;
    document.getElementById("draw-button").textContent = "抽獎結束 🔔";
    document.getElementById("draw-button").style.backgroundColor = "gray";
    document.getElementById("draw-button").disabled = true;
    return;
  }

  // 抽取剩餘的甜點
  let remainingGifts = gifts.filter((gift) => !drawnGifts.includes(gift));
  const randomIndex = Math.floor(Math.random() * remainingGifts.length);
  const selectedGift = remainingGifts[randomIndex];

  // 顯示抽獎結果
  resultElement.textContent = `🌟 恭喜抽到：${selectedGift} 🍰`;

  // 將抽中的甜點加入已抽中清單
  drawnGifts.push(selectedGift);
});
