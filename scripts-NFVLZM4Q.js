let currentIndex=0,slidePause=!1;function moveSlide(e){if(slidePause==!0)return;const l=document.querySelectorAll(".carousel-images div img").length;currentIndex=(currentIndex+e+l)%l;const o=-currentIndex*100;document.querySelector(".carousel-images").style.transform=`translateX(${o}%)`}function autoMoveSlide(){moveSlide(1),setTimeout(()=>{autoMoveSlide()},7e3)}setTimeout(()=>{autoMoveSlide(),document.querySelectorAll(".carousel-images div img").forEach(e=>{e.addEventListener("mouseenter",function(t){slidePause=!0}),e.addEventListener("mouseleave",function(t){slidePause=!1})})},7e3),window.onscroll=function(){this.scrollY>50?document.querySelector(".scroller").style.display="inherit":document.querySelector(".scroller").style.display="none"};