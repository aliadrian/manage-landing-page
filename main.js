const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute('data-overlay');

  // Toggle the scroll-lock on the html and body elements
  const html = document.documentElement;
  const body = document.body;

  if (html.classList.contains('disable-scrolling')) {
    html.classList.remove('disable-scrolling');
    body.classList.remove('disable-scrolling');
  } else {
    html.classList.add('disable-scrolling');
    body.classList.add('disable-scrolling');
  }
})

const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();

// Slider
const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: false,
  adaptiveHeight: false,
  infinite: false,
  responsive: {
    20: {
      slidesToShow: 1,
      arrows: false,
      dots: true
    },
    320: {
      slidesToShow: 1,
      arrows: false,
      dots: true
    },
    751: {
      slidesToShow: 2,
      arrows: true,
      dots: false
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      dots: false,
      arrows: true
    }
  },
});