$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });
  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Developer", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  var typed = new Typed(".typing-2", {
      strings: ["Developer", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function setupPopup(sectionClass) {
      const images = document.querySelectorAll(`.${sectionClass} .card img`);
      const popup = document.createElement("div");
      const popupImg = document.createElement("img");
      const closeBtn = document.createElement("span");

      popup.classList.add("popup");
      closeBtn.innerHTML = "&times;";
      closeBtn.classList.add("close-btn");

      popup.appendChild(closeBtn);
      popup.appendChild(popupImg);
      document.body.appendChild(popup);

      images.forEach(image => {
          image.addEventListener("click", function () {
              popup.style.display = "flex";
              popupImg.src = this.src;
          });
      });

      closeBtn.addEventListener("click", function () {
          popup.style.display = "none";
      });

      popup.addEventListener("click", function (e) {
          if (e.target !== popupImg) {
              popup.style.display = "none";
          }
      });
  }

  setupPopup("sertifikat");
  setupPopup("projects");
});
