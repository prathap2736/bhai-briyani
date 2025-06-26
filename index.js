// navbar resposive design
document.querySelector('.menu-icons').addEventListener('click', function() {
    document.querySelector('.navbars').classList.toggle('showbar');
});

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
