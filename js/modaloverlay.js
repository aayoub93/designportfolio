function openModal() {
  document.getElementById("myModal").style.display = "block";
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); // added to stop scrolling with modal
  const body = document.body; // added to stop scrolling with modal
  body.style.position = 'fixed'; // added to stop scrolling with modal
  body.style.top = `-${scrollY}`; // added to stop scrolling with modal
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  const body = document.body; // added to stop scrolling with modal
  const scrollY = body.style.top; // added to stop scrolling with modal
  body.style.position = ''; // added to stop scrolling with modal
  body.style.top = ''; // added to stop scrolling with modal
  window.scrollTo(0, parseInt(scrollY || '0') * -1); // added to stop scrolling with modal
  document.getElementById('dialog').classList.remove('show'); // added to stop scrolling with modal
}
 // added to stop scrolling with modal
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
