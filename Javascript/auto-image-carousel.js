const images = ["Images/ImageJ1.jpeg", "Images/ImagesJ2.jpeg", "Images/ImageJ3.jpeg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
  startCarousel();
}, 3000);
var index = 1;
startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index++]})`;
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade"); 
  if(index > images.length - 1) index = 0;
}
