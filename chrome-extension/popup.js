function setVisionDeficiencyType(type) {
  chrome.runtime.sendMessage({ visionDeficiencyType: type });
}

const typeBtns = document.querySelectorAll(".vision-deficiency-type-btn");
typeBtns.forEach((btn) => {
  btn.addEventListener("click", function () { setVisionDeficiencyType(btn.id) });
});
