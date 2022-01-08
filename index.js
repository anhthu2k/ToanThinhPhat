const doc = document.querySelector.bind(document);
const docAll = document.querySelectorAll.bind(document);

const iconSearch = doc('.icon_search');
const formSearch = doc('.form__search');
const sliderImgs = docAll('.slider__Img-link img');
const imgsItem = docAll('.slider__Img-item');
const container = doc('.container');
const slider = doc('.slider__Img');
const controlDot = docAll('.control__dot');
const featuredNavItems = docAll('.detail__nav-item');
const collectionFeatured = doc('.main__featured');
const featuredImg = doc('.featured__img img');
const myModal = doc('#myModal');

console.log(myModal);

const App = {
  handleEvent: function () {
    // tab UI featuredContentItem
    featuredNavItems.forEach(function (item, index) {
      item.onclick = function (e) {
        const featuredcontentItemActive = doc('.detail__content-item.active');
        doc('.detail__nav-item.active').classList.remove('active');
        featuredcontentItemActive.classList.remove('active');

        e.target.closest('.detail__nav-item').classList.add('active');
        docAll('.detail__content-item')[index].classList.add('active');
      };
    });

    // slickkk
    // var myInput = document.getElementById('myInput');

    // myModal.addEventListener('shown.bs.modal', function () {
    //   // myInput.focus();
    // });
  },

  start: function () {
    //   sử lý sự kiện trong DOM
    this.handleEvent();
    // slick slider config
    $(document).ready(function () {
      $('.main__news-list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,

        prevArrow:
          '<div class="class-to-style slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
        nextArrow:
          '<div class="class-to-style slick-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
            },
          },
        ],
      });
    });
    // inittial animate on scroll
    AOS.init();
  },
};
App.start();
