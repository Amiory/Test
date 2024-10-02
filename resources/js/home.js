let btnDown = document.getElementsByClassName("down");
let btnUp = document.getElementsByClassName("up");
let collapsedContents = document.getElementsByClassName("content");
let questionWrapper = document.getElementsByClassName("question-wrapper");
let FAQ = document.getElementById("FAQ");
let FAQ_Title = document.getElementsByClassName("title");

//FAQ expand function
for (let i = 0; i < btnDown.length; i++) {
  btnDown[i].addEventListener("click", function () {
    check = true;
    // closes open text if a new text is going to open
    for (let j = 0; j < btnDown.length; j++) {
      collapsedContents[j].style.height = "0";
      btnDown[j].style.display = "block";
      btnUp[j].style.display = "none";
      questionWrapper[j].style.borderColor = "transparent";
      FAQ_Title[i].style.color = "initial";
      if (!i < 3 && window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("FAQ-bg").style.transform = "scaleY(1)";
      }
    }
    if (window.matchMedia("(max-width: 767.9px)").matches) {
      collapsedContents[i].style.height = "15vw";
    } else if (i < 3 && window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("FAQ-bg").style.transform = "scaleY(1.25)";
      collapsedContents[i].style.height = "8.5vw";
    } else {
      collapsedContents[i].style.height = "8.5vw";
    }

    FAQ_Title[i].style.color = "rgba(3,81,70,1)";
    btnDown[i].style.display = "none";
    btnUp[i].style.display = "block";
    questionWrapper[i].style.borderColor = "rgba(3,81,70,1)";
  });
}
//FAQ shrink funtion
for (let i = 0; i < btnUp.length; i++) {
  btnUp[i].addEventListener("click", function () {
    collapsedContents[i].style.height = "0";
    btnDown[i].style.display = "block";
    btnUp[i].style.display = "none";
    FAQ_Title[i].style.color = "initial";
    questionWrapper[i].style.borderColor = "transparent";
    document.getElementById("FAQ-bg").style.transform = "scaleY(1)";
  });
}

// //product slider
// let slideIndex = 0;

// function showProduct(index) {
//   let offset = 0;
//   const products = document.querySelectorAll(".slider div.product");
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     if (index >= products.length - 3) {
//       // currentSlide = 0;
//       document.getElementById("nextProduct").style.display = "none";
//     } else if (index <= 0) {
//       // currentSlide = slides.length - 1;
//       document.getElementById("prevProduct").style.display = "none";
//     }
//     // else {
//     //     currentSlide = index;
//     // }
//     offset = index * 32.25;
//   } else {
//     if (index >= products.length - 1) {
//       // currentSlide = 0;
//       document.getElementById("nextProduct").style.display = "none";
//     } else if (index <= 0) {
//       // currentSlide = slides.length - 1;
//       document.getElementById("prevProduct").style.display = "none";
//     }
//     // else {
//     //     currentSlide = index;
//     // }
//     offset = index * 100;
//   }

//   slideIndex = index;
//   document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
// }

// function changeProduct(direction) {
//   if (direction == 1) {
//     document.getElementById("prevProduct").style.display = "block";
//   } else {
//     document.getElementById("nextProduct").style.display = "block";
//   }
//   showProduct(slideIndex + direction);
// }

// //review slider
// let currentSlide = 0;

// function showSlide(index) {
//   let offset = 0;
//   const slides = document.querySelectorAll(".comment-wrapper");
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     if (index >= slides.length - 3) {
//       // currentSlide = 0;
//       document.getElementById("nextComment").style.display = "none";
//     } else if (index <= 0) {
//       // currentSlide = slides.length - 1;
//       document.getElementById("prevComment").style.display = "none";
//     }
//     // else {
//     //     currentSlide = index;
//     // }
//     offset = index * 33.3;
//   } else {
//     if (index >= slides.length - 1) {
//       // currentSlide = 0;
//       document.getElementById("nextComment").style.display = "none";
//     } else if (index <= 0) {
//       // currentSlide = slides.length - 1;
//       document.getElementById("prevComment").style.display = "none";
//     }
//     // else {
//     //     currentSlide = index;
//     // }
//     offset = index * 104.45;
//   }

//   currentSlide = index;
//   document.querySelector(".comment-container").style.transform =
//     `translateX(${offset}%)`;
// }

// function changeSlide(direction) {
//   if (direction == 1) {
//     document.getElementById("prevComment").style.display = "block";
//   } else {
//     document.getElementById("nextComment").style.display = "block";
//   }
//   showSlide(currentSlide + direction);
// }
