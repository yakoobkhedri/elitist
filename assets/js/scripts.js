// swiper
var project = new Swiper(".project", {
  slidesPerView: 1,
  spaceBetween: 58,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
var blog2 = new Swiper(".blog2", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: true,
});
// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordion-btn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

// datapicker

jalaliDatepicker.startWatch();


// navigation

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover',activeLink));

// blog filter

var portfolio = $('#portfolio-container').isotope({
  originLeft: false
});
$('#portfolio-filter li').on('click', function () {
  $("#portfolio-filter li").removeClass('active');
  $(this).addClass('active');
  portfolio.isotope({
      filter: $(this).data('filter')
  });
});