//Burger Menu
let burgerBtn = document.getElementById("hamburger");
let burgerMenu = document.getElementById("menu");
let isBurgerClose = false;
burgerBtn.addEventListener("click", (e) => {

  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle("change-opacity");

  if (burgerBtn.classList.contains('open')) disableScroll();

  else enableScroll();

  window.addEventListener('click', function (e) {

    if (!e.target.closest(`.${burgerMenu.className}`) &&
      !e.target.closest(`.${burgerBtn.className}`)) {
      burgerBtn.classList.toggle('open');
      burgerMenu.classList.toggle('change-opacity');
      enableScroll();
      isBurgerClose = true;
    }

  });

});

//Scroll-Disabler
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

//Plugin Swiper.js
let swiper = new Swiper(".homes-swiper", {
  speed: 700,
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  allowTouchMove: false,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },

    550: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },

    764: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },

    1300: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    }
  }
});

let swiper2 = new Swiper(".comments-swiper", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 50,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  }
});

//Plugin Leafletjs Map
let map = L.map('map').setView([48.99006396190157, 37.737753903577996], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  minZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([48.99006396190157, 37.737753903577996]).addTo(map);

//Scroll-To-Top
let btn = $('.scroll-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

//Plugin Jq PageScroll2id
$(window).on("load", function () {
  $("[href*='#']").mPageScroll2id();
});

var value1 = 1;