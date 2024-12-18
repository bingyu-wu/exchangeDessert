// 甜點清單
const gifts = [
  "01 - 美麗",
  "02 - 巧怡",
  "03 - 允珈",
  "04 - 聖哲",
  "05 - 蘇湘",
  "06 - 郁姍",
  "07 - 梓聖",
  "08 - 孟耘",
  "09 - 之貴",
  "10 - 承遠",
  "11 - 舒渝",
  "12 - 采詩",
  "13 - 蘇莫",
  "14 - 懷主",
  "15 - 秉諭",
  "16 - 明翰",
  "17 - 嘉妤",
  "18 - 于婷",
  "19 - 子怡",
  "20 - 豈旭",
  "21 - 品臻",
  "22 - 虹燕",
  "23 - 其趯",
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
