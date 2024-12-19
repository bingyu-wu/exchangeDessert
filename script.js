// 甜點清單
const gifts = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
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
