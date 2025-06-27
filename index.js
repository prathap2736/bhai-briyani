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
