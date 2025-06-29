// navbar resposive design
document.querySelector('.menu-icons').addEventListener('click', function() {
    document.querySelector('.navbars').classList.toggle('showbar');
});
// main image slider
let b = document.getElementsByClassName("biryani-grp")[0];
let box = document.getElementsByClassName("box");
function move(a){
    if (a === 0) {
        b.style.animation = "none"; 
        box[0].style="opacity:0";

         box[1].style="opacity:1";
          box[2].style="opacity:1";
           box[3].style="opacity:1";
            box[4].style="opacity:1";

    }
    else if(a === 1){
        b.style.animation = "none";
         box[1].style="opacity:0";

            box[0].style="opacity:1";
          box[2].style="opacity:1";
           box[3].style="opacity:1";
            box[4].style="opacity:1";
    }
     else if(a === 2){
        b.style.animation = "none";
         box[2].style="opacity:0";

            box[0].style="opacity:1";
          box[1].style="opacity:1";
           box[3].style="opacity:1";
            box[4].style="opacity:1";
    }
     else if(a === 3){
        b.style.animation = "none";
         box[3].style="opacity:0";

             box[0].style="opacity:1";
          box[1].style="opacity:1";
           box[2].style="opacity:1";
            box[4].style="opacity:1";
    }
     else if(a === 4){
        b.style.animation = "none";
         box[4].style="opacity:0";

             box[0].style="opacity:1";
          box[1].style="opacity:1";
           box[3].style="opacity:1";
            box[2].style="opacity:1";
    }
}
// for layer-1 js 
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
one.style.right = "0%";
two.style.left = "0%";

// for layer-2
let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];


function slite(){
   one.style.position="relative"; 
   two.style.position="relative";

  one.style.transition = "all 3s ease-in-out";
  two.style.transition = "all 3s ease-in-out";

  // Apply final styles that will animate
  one.style.right = "100%";
  two.style.left = "100%";

  left.style.right = "0px";
  right.style.left = "0px";
  left.style.transition = "all 2s ease-in-out";
  right.style.transition = "all 2s ease-in-out";
}
// recpieces image slider

const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'flex';
}

document.querySelectorAll('#next').forEach(nextBtn => {
  nextBtn.onclick = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
});

document.querySelectorAll('#prev').forEach(prevBtn => {
  prevBtn.onclick = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
});

showSlide(current);

// accordin design 

let accordin = document.getElementsByClassName("content-box");

for (let i = 0; i < accordin.length; i++) {
  accordin[i].addEventListener('click', function () {
    for (let j = 0; j < accordin.length; j++) {
      if (accordin[j] !== this) {
        accordin[j].classList.remove('active');
      }
    }
    this.classList.toggle('active');
  });
}
