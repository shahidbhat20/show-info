let plusBtn1 = document.querySelector("#plus-icon1");
let plusBtn2 = document.querySelector("#plus-icon2");
let plusBtn3 = document.querySelector("#plus-icon3");
let qst1 = document.querySelector("#question-text1");
let qst2 = document.querySelector("#question-text2");
let qst3 = document.querySelector("#question-text3");

let minsBtn1 = document.querySelector("#minus-btn1");
let minsBtn2 = document.querySelector("#minus-btn2");
let minsBtn3 = document.querySelector("#minus-btn3");

//pbtn 1
plusBtn1.addEventListener("click", function () {
  qst1.classList.add("show-text");
  plusBtn1.style.display = "none";
  minsBtn1.style.display = "inline-block";
});
//mbtn 1
minsBtn1.addEventListener("click", function () {
  qst1.classList.remove("show-text");
  minsBtn1.style.display = "none";
  plusBtn1.style.display = "inline-block";
});

//pbtn 2
plusBtn2.addEventListener("click", function () {
  qst2.classList.add("show-text");
  plusBtn2.style.display = "none";
  minsBtn2.style.display = "inline-block";
});
//mbtn 2
minsBtn2.addEventListener("click", function () {
  qst2.classList.remove("show-text");
  minsBtn2.style.display = "none";
  plusBtn2.style.display = "inline-block";
});

//pbtn 3
plusBtn3.addEventListener("click", function () {
  qst3.classList.add("show-text");
  plusBtn3.style.display = "none";
  minsBtn3.style.display = "inline-block";
});
//mbtn 3
minsBtn3.addEventListener("click", function () {
  qst3.classList.remove("show-text");
  minsBtn3.style.display = "none";
  plusBtn3.style.display = "inline-block";
});
