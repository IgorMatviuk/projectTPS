<template>
  <div class="cliedderr">
<!--
    <div class="clients" id="CLIENTS">
      <div class="clients__navs">
        <div class="clients__navs__nav-prev">
          <div class="swiper-button-prev">
            <img src="../assets/img/prev-sl.svg" alt="" />
          </div>
        </div>
        <div class="clients__navs__nav-next">
          <div class="swiper-button-next">
            <img src="../assets/img/next-sl.svg" alt="" />
          </div>
        </div>
      </div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c3.png" alt="" />
            <p>TOP-3 ice cream producers in Ukraine</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c1.png" alt="" />
            <p>
              TOP-5 in the production and export of sunflower oil and sauces in
              Ukraine
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c2.png" alt="" />
            <p>
              TOP-1 in the production of tomato paste and ketchup in Ukraine
            </p>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c3.png" alt="" />
            <p>TOP-3 ice cream producers in Ukraine</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c1.png" alt="" />
            <p>
              TOP-5 in the production and export of sunflower oil and sauces in
              Ukraine
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="clients__block">
            <img src="../assets/img/c2.png" alt="" />
            <p>
              TOP-1 in the production of tomato paste and ketchup in Ukraine
            </p>
          </div></swiper-slide
        >
      </swiper>
      
    </div>
-->
    <VueSlickCarousel v-bind="slickSettings">
      <div>
        <div class="clients__block">
          <img src="../assets/img/c3.png" alt="" />
          <p>TOP-3 ice cream producers in Ukraine</p>
        </div>
      </div>
      <div>
        <div class="clients__block">
          <img src="../assets/img/c1.png" alt="" />
          <p>
            TOP-5 in the production and export of sunflower oil and sauces in
            Ukraine
          </p>
        </div>
      </div>
      <div>
        <div class="clients__block">
          <img src="../assets/img/c2.png" alt="" />
          <p>TOP-1 in the production of tomato paste and ketchup in Ukraine</p>
        </div>
      </div>
      <div>
        <div class="clients__block">
          <img src="../assets/img/c3.png" alt="" />
          <p>TOP-3 ice cream producers in Ukraine</p>
        </div>
      </div>
      <div>
        <div class="clients__block">
          <img src="../assets/img/c1.png" alt="" />
          <p>
            TOP-5 in the production and export of sunflower oil and sauces in
            Ukraine
          </p>
        </div>
      </div>
      <div>
        <div class="clients__block">
          <img src="../assets/img/c2.png" alt="" />
          <p>TOP-1 in the production of tomato paste and ketchup in Ukraine</p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          120: {
            slidesPerView: 1,
          },
          605: {
            slidesPerView: 2,
          },
          740: {
            slidesPerView: 2,
          },
          1105: {
            slidesPerView: 3,
          },
        },
      },
      slickSettings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,

        responsive: [
          {
            breakpoint: 1105,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
            },
          },
                    {
            breakpoint: 684,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>