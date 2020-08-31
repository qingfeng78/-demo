var nav = document.getElementsByClassName("nav");

for (var i = 0; i < nav.length; i++) {
  nav[i].onclick = active;
  function active() {
    for (var j = 0; j < nav.length; j++) {
      nav[j].classList.remove("active");
    }
    this.classList.add("active");
  }
}

var img = document.getElementsByClassName("img");

var num = 0;

// 自动换图
setInterval(function () {
  num++;
  if (num == 4) {
    num = 0;
  }
  for (var i = 0; i < img.length; i++) {
    img[i].classList.remove("active");
    allLi[i].classList.remove("active");
  }
  img[num].classList.add("active");
  allLi[num].classList.add("active");
}, 3000);
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];

// 点击左箭头换图
left.onclick = function () {
  num--;
  if (num == -1) {
    num = 3;
  }
  for (var i = 0; i < img.length; i++) {
    img[i].classList.remove("active");
    allLi[i].classList.remove("active");
  }
  img[num].classList.add("active");
  allLi[num].classList.add("active");
};

// 点击右键换箭头
right.onclick = function () {
  num++;
  if (num == 4) {
    num = 0;
  }
  for (var i = 0; i < img.length; i++) {
    img[i].classList.remove("active");
    allLi[i].classList.remove("active");
  }
  img[num].classList.add("active");
  allLi[num].classList.add("active");
};

// 点击圆点换图
var allLi = document.getElementsByClassName("l_items");
for (var i = 0; i < allLi.length; i++) {
  // 给每个li元素赋值，每循环一次，i+1;
  allLi[i].index = i;
  allLi[i].onclick = function () {
    // li的索引是从0开始的，所以要+1
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove("active");
      allLi[i].classList.remove("active");
    }
    img[this.index].classList.add("active");
    allLi[this.index].classList.add("active");
  };
}
