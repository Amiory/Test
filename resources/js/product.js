//product img swap
function changeProductImage(index) {
    let curImg = document.getElementById("curImg");
    let nextImg = document.getElementById(index);
    let tempSrc = curImg.src;
    if (nextImg.src.includes("SVGs/product-page-pr1.svg")) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        curImg.style.marginBottom = "4vw";
      } else {
        curImg.style.marginBottom = "8vw";
      }
    } else {
      curImg.style.marginBottom = 0;
    }
    if (curImg.src.includes("SVGs/product-page-pr1.svg")) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        nextImg.style.marginBottom = "1vw";
      } else {
        nextImg.style.marginBottom = "2vw";
      }
    } else {
      nextImg.style.marginBottom = 0;
    }
    curImg.src = nextImg.src;
    nextImg.src = tempSrc;
  }