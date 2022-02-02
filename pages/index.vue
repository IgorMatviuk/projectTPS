<template>
  <div class="container">
    <form action="https://formspree.io/f/xqknedbo" method="post">
      <div class="main-section">
        <div class="main-section__header">
          <div class="main-section__text">
            <p>Ukrainian manufacturer of equipment for the food industry</p>
          </div>
          <div class="main-section__title-block">
            <div class="main-section__title-block__back">
              <!-- <img src="../assets/img/line-reddd.svg" alt="" /> -->
              <div class="main-section__title-block__back__fill"></div>
            </div>
            <div class="main-section__title-block__black">
              <p>Production line</p>
            </div>
          </div>
        </div>
        <div class="main-section__body">
          <div class="main-section__left">
            <div class="main-section__left__menu-and-line">
              <div class="red-line"></div>
              <div class="main-section__menu">
                <div class="main-section__menu__title">
                  <p>Select the type of container:</p>
                </div>
                <div class="main-section__menu__items">
                  <div
                    class="main-section__menu__items__item"
                    v-on:click="isButtonDisabled = !isButtonDisabled"
                    @click="checkGlass"
                    v-bind:class="[
                      isActiveGlass
                        ? 'main-section__menu__items__item'
                        : 'main-section__menu__items__item-active',
                    ]"
                  >
                    <svg
                      width="22"
                      height="30"
                      viewBox="0 0 22 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0509 6.32307C18.9293 6.24813 18.8212 6.16637 18.7132 6.07097C18.2134 5.5327 17.8284 4.8854 17.5853 4.1904H18.2877C18.4565 4.1904 18.6119 4.12227 18.7267 4.00643C18.8415 3.8906 18.909 3.73387 18.909 3.56353V1.60802C18.909 1.43768 18.8415 1.28097 18.7267 1.16514C18.6119 1.0493 18.4565 0.981167 18.2877 0.981167H17.9365V0.626857C17.9365 0.456513 17.869 0.299801 17.7541 0.183969C17.6393 0.0681367 17.4772 0 17.3151 0H4.68552C4.51666 0 4.36132 0.0681367 4.24652 0.183969C4.13169 0.299801 4.06416 0.456513 4.06416 0.626857V0.981167H3.71296C3.54412 0.981167 3.38879 1.0493 3.27396 1.16514C3.15916 1.28097 3.09162 1.43768 3.09162 1.60802V3.57037C3.09162 3.7407 3.15916 3.8974 3.27396 4.01323C3.38879 4.12907 3.54412 4.1972 3.71296 4.1972H4.41536C4.17223 4.8922 3.78049 5.5395 3.28746 6.07777C3.18616 6.16637 3.07136 6.25493 2.94979 6.3299C2.09879 6.89543 0.666992 7.86297 0.666992 11.4061V23.657C0.680492 24.8767 1.00469 26.0895 1.60576 27.1524C1.63279 27.2001 1.65979 27.2478 1.68683 27.2955L1.71383 27.3432C1.74086 27.3909 1.76786 27.4386 1.80163 27.4795C1.88943 27.6089 1.98399 27.7384 2.09879 27.8815L2.11906 27.9087C2.92276 28.8831 4.05066 29.4963 5.30009 29.6258C5.34739 29.6326 5.38789 29.6394 5.43519 29.6394C5.66482 29.6667 5.90119 29.6803 6.13759 29.6803H15.8496C16.086 29.6803 16.3223 29.6667 16.552 29.6394C16.5992 29.6326 16.6398 29.6258 16.687 29.6258C17.9365 29.4963 19.0711 28.8899 19.8681 27.9087L19.8884 27.8815C20.0032 27.7384 20.0977 27.6089 20.1855 27.4863C20.2193 27.4386 20.2463 27.3977 20.2733 27.35L20.3071 27.3023C20.3341 27.2546 20.3611 27.2069 20.3881 27.166C20.9892 26.1031 21.3134 24.8971 21.3269 23.6706V11.4061C21.3337 7.86297 19.9019 6.89543 19.0509 6.32307ZM19.1927 26.73C19.0171 26.9957 18.8077 27.241 18.5714 27.459C18.4836 27.5408 18.389 27.6226 18.2945 27.6907C18.2809 27.6975 18.2742 27.7043 18.2607 27.7111C18.2472 27.718 18.2337 27.7316 18.2202 27.7384C18.0986 27.827 17.9703 27.9019 17.8352 27.9701C17.8149 27.9837 17.7947 27.9905 17.7744 27.9973C17.7609 28.0041 17.7406 28.0109 17.7271 28.0178C17.5921 28.0791 17.457 28.1336 17.3151 28.1813C17.2611 28.1949 17.2138 28.2153 17.1598 28.229C17.0112 28.2699 16.8626 28.3039 16.7141 28.3312L16.6533 28.338C16.6128 28.3448 16.579 28.3516 16.5385 28.3584C16.3156 28.3857 16.086 28.4061 15.8631 28.4061H6.14432C5.92146 28.4061 5.69182 28.3925 5.46219 28.3584C5.42842 28.3516 5.39466 28.3448 5.36089 28.3448C5.34062 28.338 5.32036 28.338 5.30009 28.338C5.13802 28.3107 4.98269 28.2767 4.82733 28.229C4.78683 28.2153 4.74629 28.2017 4.69902 28.1881C4.53692 28.1336 4.38159 28.0723 4.23299 27.9973C4.22626 27.9905 4.21276 27.9905 4.20599 27.9837C4.19923 27.9837 4.19249 27.9769 4.18572 27.9769C3.71973 27.7384 3.30773 27.3977 2.99029 26.9821C2.98356 26.9753 2.97679 26.9684 2.97006 26.9616L2.96329 26.9548C2.95653 26.948 2.94979 26.9412 2.94979 26.9344C2.89576 26.8662 2.84846 26.7981 2.80119 26.7232H19.1927V26.73ZM16.8762 2.05091C16.991 2.16674 17.1463 2.23488 17.3151 2.23488H17.6663V2.9435H4.33433V2.23488H4.68552C4.85436 2.23488 5.00969 2.16674 5.12449 2.05091C5.23932 1.93508 5.30686 1.77836 5.30686 1.60802V1.25371H16.6938V1.60802C16.6938 1.77155 16.7546 1.92826 16.8762 2.05091ZM10.9936 11.0517H11.0071C12.1417 11.0041 13.2494 11.3175 14.1949 11.958C15.5524 12.98 17.2273 13.5319 18.9226 13.4979H20.0977V19.5961H1.90969V13.4979H3.07809C3.12539 13.4979 3.16589 13.4979 3.21319 13.4979C4.86112 13.4979 6.48879 12.9528 7.81252 11.9512C8.75129 11.3175 9.85892 11.0041 10.9936 11.0517ZM11.23 9.79123C11.1557 9.79123 11.0746 9.79123 11.0003 9.79803C9.60229 9.75033 8.20426 10.1592 7.04936 10.97C5.91469 11.8285 4.50316 12.2782 3.08486 12.251H1.90969V11.4061C1.90969 8.5375 2.95653 7.8289 3.63866 7.36557C3.82779 7.24973 3.99663 7.11347 4.15873 6.96357L4.16546 6.95673C4.90162 6.18 5.43519 5.22607 5.71209 4.1904H16.2886C16.5655 5.22607 17.099 6.18 17.8352 6.95673L17.8419 6.96357C18.004 7.11347 18.1796 7.24973 18.362 7.36557C19.0509 7.8357 20.0977 8.5375 20.0977 11.4129V12.2578H18.9226C17.5043 12.285 16.0927 11.8285 14.9513 10.9768C13.864 10.2069 12.5537 9.79123 11.23 9.79123ZM20.091 20.8498V23.6502C20.0707 24.2702 19.9694 24.8835 19.7803 25.4763H2.22036C2.03126 24.8835 1.92996 24.2702 1.90969 23.6502V20.8498H20.091Z"
                        fill="white"
                      />
                      <path
                        d="M10.9936 11.0517H11.0071C12.1417 11.0041 13.2494 11.3175 14.1949 11.958C15.5524 12.98 17.2273 13.5319 18.9226 13.4979H20.0977V19.5961H1.90969V13.4979H3.07809H3.21319C4.86112 13.4979 6.48879 12.9528 7.81252 11.9512C8.75129 11.3175 9.85892 11.0041 10.9936 11.0517Z"
                        fill="white"
                      />
                      <path
                        d="M20.091 20.8498V23.6502C20.0707 24.2702 19.9694 24.8835 19.7803 25.4763H2.22036C2.03126 24.8835 1.92996 24.2702 1.90969 23.6502V20.8498H20.091Z"
                        fill="white"
                      />
                      <path
                        d="M19.1927 26.73C19.0171 26.9957 18.8077 27.241 18.5714 27.459C18.4836 27.5408 18.389 27.6226 18.2945 27.6907C18.2809 27.6975 18.2742 27.7043 18.2607 27.7111C18.2472 27.718 18.2337 27.7316 18.2202 27.7384C18.0986 27.827 17.9703 27.9019 17.8352 27.9701C17.8149 27.9837 17.7947 27.9905 17.7744 27.9973C17.7609 28.0041 17.7406 28.0109 17.7271 28.0178C17.5921 28.0791 17.457 28.1336 17.3151 28.1813C17.2611 28.1949 17.2138 28.2153 17.1598 28.229C17.0112 28.2699 16.8626 28.3039 16.7141 28.3312L16.6533 28.338C16.6128 28.3448 16.579 28.3516 16.5385 28.3584C16.3156 28.3857 16.086 28.4061 15.8631 28.4061H6.14432C5.92146 28.4061 5.69182 28.3925 5.46219 28.3584C5.42842 28.3516 5.39466 28.3448 5.36089 28.3448C5.34062 28.338 5.32036 28.338 5.30009 28.338C5.13802 28.3107 4.98269 28.2767 4.82733 28.229C4.78683 28.2153 4.74629 28.2017 4.69902 28.1881C4.53692 28.1336 4.38159 28.0723 4.23299 27.9973C4.22626 27.9905 4.21276 27.9905 4.20599 27.9837C4.19923 27.9837 4.19249 27.9769 4.18572 27.9769C3.71973 27.7384 3.30773 27.3977 2.99029 26.9821L2.97006 26.9616L2.96329 26.9548C2.95653 26.948 2.94979 26.9412 2.94979 26.9344C2.89576 26.8662 2.84846 26.7981 2.80119 26.7232H19.1927V26.73Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="checkboxGroup1"
                      name="Glass"
                      v-model="checkedGlass"
                    />
                    <p>Glass</p>
                  </div>
                  <div
                    class="main-section__menu__items__item"
                    v-on:click="isButtonDisabled = !isButtonDisabled"
                    @click="checkPlastic"
                    v-bind:class="[
                      isActivePlastic
                        ? 'main-section__menu__items__item'
                        : 'main-section__menu__items__item-active',
                    ]"
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.1494 10.3633V6.89059C28.1494 6.54513 27.8699 6.26559 27.5244 6.26559H26.1617L25.0122 0.517948C24.9536 0.226211 24.6973 0.015625 24.3994 0.015625H23.1494C22.8516 0.015625 22.5953 0.226211 22.5367 0.517948L21.3871 6.26566H20.0244C19.6789 6.26566 19.3994 6.54519 19.3994 6.89066V10.3633C18.6558 10.7969 18.1494 11.5942 18.1494 12.5156V27.5156C18.1494 28.8944 19.2707 30.0156 20.6494 30.0156H26.8994C28.2782 30.0156 29.3995 28.8944 29.3995 27.5156V12.5156C29.3994 11.5942 28.893 10.7969 28.1494 10.3633ZM23.6615 1.2656H23.8873L24.8871 6.26559H22.6618L23.6615 1.2656ZM20.6494 7.51562H26.8994V10.0157H20.6494V7.51562ZM28.1494 27.5156C28.1494 28.2047 27.5885 28.7656 26.8994 28.7656H20.6494C19.9604 28.7656 19.3994 28.2047 19.3994 27.5156V12.5156C19.3994 11.8266 19.9604 11.2656 20.6494 11.2656H26.8994C27.5885 11.2656 28.1494 11.8266 28.1494 12.5156V27.5156Z"
                        fill="white"
                      />
                      <path
                        d="M28.1494 27.5156C28.1494 28.2047 27.5885 28.7656 26.8994 28.7656H20.6494C19.9604 28.7656 19.3994 28.2047 19.3994 27.5156V12.5156C19.3994 11.8266 19.9604 11.2656 20.6494 11.2656H26.8994C27.5885 11.2656 28.1494 11.8266 28.1494 12.5156V27.5156Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.09515 0H10.5819C11.9583 0 13.0775 1.11921 13.0775 2.4956V16.4034C13.0775 16.7884 12.9867 17.1741 12.8143 17.519L10.0896 22.9677C10.0037 23.1401 9.95804 23.3332 9.95804 23.5258V26.2035C10.3029 26.2035 10.5819 26.4826 10.5819 26.8274V29.323C10.5819 29.6679 10.3029 29.9469 9.95804 29.9469H3.71908C3.37421 29.9469 3.09515 29.6679 3.09515 29.3231V26.8275C3.09515 26.4826 3.37421 26.2036 3.71908 26.2036V23.5258C3.71908 23.3332 3.67338 23.1401 3.58748 22.9671L0.862816 17.5196C0.690386 17.1742 0.599609 16.7885 0.599609 16.4034V2.4956C0.599609 1.11921 1.71882 0 3.09515 0ZM4.34298 28.6992H9.33411V27.4514H4.34298V28.6992ZM3.91637 3.34961H9.74971C10.0721 3.34961 10.333 3.60191 10.333 3.91368V14.6316C10.333 16.4981 8.76304 18.0163 6.83301 18.0163C4.90297 18.0163 3.33301 16.4981 3.33301 14.6316V3.91374C3.33301 3.60191 3.59391 3.34961 3.91637 3.34961ZM9.16637 14.6316C9.16637 15.8761 8.11991 16.8881 6.83301 16.8881C5.54611 16.8881 4.49971 15.8761 4.49971 14.6316V4.47781H9.16637V14.6316Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="checkboxGroup2"
                      name="Plastic"
                      v-model="checkedPlastic"
                    />
                    <p>Plastic</p>
                  </div>
                  <div
                    class="main-section__menu__items__item"
                    v-on:click="isButtonDisabled = !isButtonDisabled"
                    @click="checkTubes"
                    v-bind:class="[
                      isActiveTubes
                        ? 'main-section__menu__items__item'
                        : 'main-section__menu__items__item-active',
                    ]"
                  >
                    <svg
                      width="26"
                      height="30"
                      viewBox="0 0 26 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9536 7.83586L22.7296 6.54332C22.8177 6.35202 22.8082 6.12499 22.7045 5.94312C22.6008 5.76129 22.4177 5.65052 22.2204 5.65039H17.6671C17.4698 5.65046 17.2867 5.76122 17.183 5.94302C17.0794 6.12486 17.0698 6.35196 17.158 6.54322L17.9339 7.83576C16.1165 8.27946 14.8244 10.0276 14.8213 12.0469V23.6036C14.8244 25.6229 16.1165 27.371 17.9339 27.8147L17.158 29.1073C17.0698 29.2986 17.0793 29.5256 17.183 29.7075C17.2868 29.8893 17.4698 30.0001 17.6671 30.0002H22.2204C22.4176 30.0001 22.6007 29.8893 22.7044 29.7075C22.808 29.5257 22.8176 29.2986 22.7295 29.1073L21.9536 27.8148C23.771 27.3711 25.0632 25.623 25.0662 23.6036V12.047C25.0632 10.0277 23.771 8.27959 21.9536 7.83586ZM21.2994 6.88432L20.7303 7.72856H19.1573L18.5882 6.88432H21.2994ZM18.5881 28.7663L19.1572 27.9221H20.7302L21.2993 28.7663H18.5881ZM23.9279 23.6036C23.926 25.3064 22.653 26.6863 21.082 26.6883H18.8054C17.2344 26.6863 15.9615 25.3064 15.9596 23.6036V12.047C15.9615 10.3442 17.2344 8.96439 18.8054 8.96236H21.082C22.653 8.96439 23.926 10.3442 23.9279 12.047V23.6036Z"
                        fill="white"
                      />
                      <path
                        d="M23.9279 23.6036C23.926 25.3064 22.653 26.6863 21.082 26.6883H18.8054C17.2344 26.6863 15.9615 25.3064 15.9596 23.6036V12.047C15.9615 10.3442 17.2344 8.96439 18.8054 8.96236H21.082C22.653 8.96439 23.926 10.3442 23.9279 12.047V23.6036Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.12444 0.605107V2.35237C10.3806 3.12198 11.8901 5.1752 11.8943 7.4802V22.5198C11.8902 24.8248 10.3807 26.878 8.12454 27.6476V29.3949C8.12454 29.5554 8.05834 29.7094 7.94052 29.8228C7.82266 29.9363 7.66281 30.0001 7.49619 30H4.98305C4.81637 30 4.65651 29.9363 4.53872 29.8228C4.42083 29.7093 4.35463 29.5554 4.35469 29.3949V27.6476C2.09853 26.8781 0.589085 24.8248 0.584961 22.5198V7.4802C0.589085 5.1752 2.09853 3.12198 4.35463 2.35237V0.605107C4.35463 0.444577 4.42083 0.290642 4.53862 0.177193C4.65651 0.0636733 4.81637 -7.07873e-05 4.98298 5.89917e-08H7.49612C7.6628 5.89917e-08 7.82266 0.0637443 7.94045 0.177193C8.05834 0.290713 8.12454 0.44465 8.12444 0.605107ZM6.86794 1.21022H5.61133V2.07038C5.80953 2.0489 6.00885 2.03748 6.2083 2.0362C6.23002 2.03606 6.25201 2.0362 6.27374 2.03635C6.47233 2.03769 6.6706 2.04904 6.86794 2.07038V1.21022ZM5.61133 28.7899H6.86784L6.86794 27.9299L6.86527 27.93C6.66374 27.952 6.46119 27.9634 6.25844 27.9644C6.24657 27.9646 6.23457 27.9647 6.22281 27.9646C6.01848 27.9636 5.81438 27.9519 5.61133 27.9297V28.7899ZM7.33884 26.616C9.27812 26.1325 10.6338 24.449 10.6376 22.5199L10.6377 7.4802C10.6339 5.55127 9.27849 3.86797 7.3395 3.38427L7.33854 3.3842C7.16721 3.34163 6.99347 3.30882 6.81816 3.2857C6.81047 3.28474 6.80293 3.28354 6.79534 3.28233C6.7872 3.28104 6.77909 3.27974 6.77082 3.27875C6.41879 3.235 6.06235 3.23486 5.71033 3.27847C5.7011 3.27956 5.692 3.28102 5.68287 3.28248C5.67476 3.28379 5.66662 3.28509 5.65844 3.28613C5.48408 3.3091 5.3112 3.34187 5.14076 3.3842L5.13898 3.3844C3.20039 3.8684 1.84531 5.55157 1.84159 7.4802V22.5199C1.84524 24.449 3.20095 26.1325 5.14023 26.616C5.31291 26.6586 5.48807 26.6917 5.66471 26.7149C5.67143 26.7157 5.67806 26.7168 5.68465 26.7178C5.6921 26.719 5.69955 26.7202 5.7071 26.7211C6.06038 26.7651 6.41807 26.7651 6.77141 26.7212C6.77606 26.7206 6.78067 26.72 6.78526 26.7193C6.79597 26.7177 6.80658 26.7158 6.81733 26.7144C6.99301 26.6913 7.16715 26.6584 7.33884 26.616Z"
                        fill="white"
                      />
                      <path
                        d="M7.33884 26.616C9.27812 26.1325 10.6338 24.449 10.6376 22.5199L10.6377 7.4802C10.6339 5.55127 9.27849 3.86797 7.3395 3.38427L7.33854 3.3842C7.16721 3.34163 6.99347 3.30882 6.81816 3.2857C6.81047 3.28474 6.80293 3.28354 6.79534 3.28233C6.7872 3.28104 6.77909 3.27974 6.77082 3.27875C6.41879 3.235 6.06235 3.23486 5.71033 3.27847C5.7011 3.27956 5.692 3.28102 5.68287 3.28248C5.67476 3.28379 5.66662 3.28509 5.65844 3.28613C5.48408 3.3091 5.3112 3.34187 5.14076 3.3842L5.13898 3.3844C3.20039 3.8684 1.84531 5.55157 1.84159 7.4802V22.5199C1.84524 24.449 3.20095 26.1325 5.14023 26.616C5.31291 26.6586 5.48807 26.6917 5.66471 26.7149C5.67143 26.7157 5.67806 26.7168 5.68465 26.7178C5.6921 26.719 5.69955 26.7202 5.7071 26.7211C6.06038 26.7651 6.41807 26.7651 6.77141 26.7212C6.77606 26.7206 6.78067 26.72 6.78526 26.7193C6.79597 26.7177 6.80658 26.7158 6.81733 26.7144C6.99301 26.6913 7.16715 26.6584 7.33884 26.616Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="checkboxGroup3"
                      name="Tubes"
                      v-model="checkedTubes"
                    />
                    <p>Tubes</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-section__left__btn">
              <button @click="showPopupForm" :disabled="isButtonDisabled">
                <p>Calculate the cost</p>
              </button>
            </div>
          </div>
          <div class="main-section__right">
            <div class="main-section__right__mach">
              <div class="main-section__right__mach__mach-back">
                <img src="../assets/img/back-img.svg" alt="" />
              </div>
              <div
                class="main-section__right__mach__mach1"
                v-bind:class="{ mach_active: checkedMachineOne }"
              >
                <img src="../assets/img/1.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-one"
                  name="Machine 1"
                  v-model="checkedMachineOne"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-one"></label>
                <p>Packing machine</p>
              </div>
              <div
                class="main-section__right__mach__mach2"
                v-bind:class="{ mach_active: checkedMachineTwo }"
              >
                <img src="../assets/img/2.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-two"
                  name="Machine 2"
                  v-model="checkedMachineTwo"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-two"></label>
                <p>Brewing complex</p>
              </div>
              <div
                class="main-section__right__mach__mach3"
                v-bind:class="{ mach_active: checkedMachineThree }"
              >
                <img src="../assets/img/3.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-three"
                  name="Machine 3"
                  v-model="checkedMachineThree"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-three"></label>
                <p>Filling machines "CHAB"</p>
              </div>
              <div
                class="main-section__right__mach__mach4"
                v-bind:class="{ mach_active: checkedMachineFour }"
              >
                <img src="../assets/img/4.webp" alt="" @click="showPopupMach" />
                <input
                  type="checkbox"
                  id="machine-four"
                  name="Machine 4"
                  v-model="checkedMachineFour"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-four"></label>
                <p>Filling machine</p>
              </div>
              <div
                class="main-section__right__mach__mach5"
                v-bind:class="{ mach_active: checkedMachineFive }"
              >
                <img src="../assets/img/5.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-five"
                  name="Machine 5"
                  v-model="checkedMachineFive"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-five"></label>
                <p>Capping machines</p>
              </div>
              <div
                class="main-section__right__mach__mach6"
                v-bind:class="{ mach_active: checkedMachineSix }"
              >
                <img src="../assets/img/6.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-six"
                  name="Machine 6"
                  v-model="checkedMachineSix"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-six"></label>
                <p>Labeling machine</p>
              </div>
              <div
                class="main-section__right__mach__mach7"
                v-bind:class="{ mach_active: checkedMachineSeven }"
              >
                <img src="../assets/img/7.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-seven"
                  name="Machine 7"
                  v-model="checkedMachineSeven"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-seven"></label>
                <p>Shrink Wrapping Machine</p>
              </div>
              <div
                class="main-section__right__mach__mach8"
                v-bind:class="{ mach_active: checkedMachineEight }"
              >
                <img src="../assets/img/8.webp" alt="" />
                <input
                  type="checkbox"
                  id="machine-eight"
                  name="Machine 8"
                  v-model="checkedMachineEight"
                  v-on:click="isButtonDisabled = !isButtonDisabled"
                />
                <label for="machine-eight"></label>
                <p>Accumulation table</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="popup-overlay-container" v-if="IsPopupFormShow">
        <div class="popup-overlay" @click="hidePopupForm"></div>
        <div class="req-modal">
          <div class="req-modal__header">
            <p class="">CALLBACK FORM</p>
            <img
              src="../assets/img/modal-close.svg"
              alt=""
              @click="hidePopupForm"
            />
          </div>
          <div class="req-modal__body">
            <div class="form-input">
              <float-label>
                <input type="text" name="Name:" placeholder="Name:" required />
              </float-label>
            </div>
            <div class="form-input">
              <float-label>
                <input type="tel" name="Phone:" placeholder="Phone:" required />
              </float-label>
            </div>
            <div class="form-input">
              <float-label>
                <input
                  type="email"
                  name="E-mail:"
                  placeholder="E-mail:"
                  required
                />
              </float-label>
            </div>
            <div class="form-input form-input-textarea">
              <float-label>
                <textarea name="Text:" placeholder="Text:" required></textarea>
              </float-label>
            </div>
            <div class="req-modal__check-block">
              <input
                type="checkbox"
                checked
                v-on:click="
                  isBtnDisabledProductCheckActive =
                    !isBtnDisabledProductCheckActive
                "
              />
              <p>I agree to the processing of personal data</p>
            </div>
            <div class="req-modal__btn">
              <button
                type="submit"
                :disabled="isBtnDisabledProductCheckActive"
                checked
              >
                <p>Request a quote</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!--
      {{ checkedMachineOne }}
      {{ checkedMachineTwo }}
      {{ checkedMachineThree }}
      {{ checkedMachineFour }}
      {{ checkedMachineFive }}
      {{ checkedMachineSix }}
      {{ checkedMachineSeven }}
      {{ checkedMachineEight }}
      -->
    <div class="popup-overlay-container" v-if="IsPopupMachShow">
      <div class="popup-overlay-math" @click="hidePopupMach"></div>
      <div class="math-modal">
        <div class="math-modal__header">
          <p class="">AUTOMATIC FILLING LINE MACHINE</p>
          <img
            src="../assets/img/modal-close.svg"
            alt=""
            @click="hidePopupMach"
          />
        </div>
        <div class="math-modal__body">
          <div class="math-modal__slider">
            <no-ssr>
              <div class="math-modal__slider-main">
              <vue-tiny-slider v-bind="tinySliderOptions">
                <div class="math-modal__slider__slide">
                  <img src="../assets/img/title_m.png" alt="" />
                </div>
                <div class="math-modal__slider__slide">
                  <img src="../assets/img/title_m.png" alt="" />
                </div>
                <div class="math-modal__slider__slide">
                  <img src="../assets/img/title_m.png" alt="" />
                </div>
              </vue-tiny-slider>
              </div>
              <div class="customize-tools">
                <div class="thumbnails" id="customize-thumbnails">
                  <div class="customize-tools-block">
                    <img src="../assets/img/title_m.png" alt="" />
                  </div>
                  <div class="customize-tools-block">
                    <img src="../assets/img/title_m.png" alt="" />
                  </div>
                  <div class="customize-tools-block">
                    <img src="../assets/img/title_m.png" alt="" />
                  </div>
                </div>
              </div>
            </no-ssr>
          </div>

          <div class="math-modal__container">
            <div class="math-modal__title">
              <h3>01</h3>
              <p>PURPOSE</p>
            </div>
            <h2>
              Оборудование серии МН-РВ предназначена для автоматического
              весового розлива жидких и вязких масс пищевого и непищевого
              назначения в различные емкости цилиндрической и другой формы, а
              также последующей укупорки крышкой методом закручивания или
              захлопывания.
            </h2>
            <h2>
              Возможно подключение машины к станции CIP-мойки. Возможно
              изготовление автомата с быстро разборной конструкцией в случае
              необходимости более тщательной мойки системы дозирования.
            </h2>
            <div class="math-modal__title math-modal__container__title-two">
              <h3>02</h3>
              <p>SPECIFICATIONS</p>
            </div>
            <div class="math-modal__table-c math-modal__container__table-one">
              <table>
                <thead>
                  <tr class="table-border-bottom">
                    <td class="table-left table-border-left-end">Продукт</td>
                    <td class="table-right">Подсолнечное масло</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="table-left table-border-left-end">Емкость</td>
                    <td class="table-right">
                      Бутылка ПЭТ объемом 5,0 л цилиндрической и квадратной
                      формы; 10,0 л цилиндрической и квадратной формы
                    </td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Дизайн, габаритные размеры бутылки
                    </td>
                    <td class="table-right">Согласно чертежу Заказчика</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Диаметр горлышка (мм)
                    </td>
                    <td class="table-right">Уточняется заказчиком</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Тип укупорки
                    </td>
                    <td class="table-right">
                      Методом закручивания/захлопывания
                    </td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Производительность
                    </td>
                    <td class="table-right">
                      по формату 5,0 л – 2400-2500 бут./час по формату 10,0 л –
                      1100-1200 бут./час
                    </td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Погрешность дозирования (%)
                    </td>
                    <td class="table-right">+/- 0,15 - 0,3</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">Материал</td>
                    <td class="table-right">
                      Пищевая нержавеющая сталь AISI 304, техническая
                      нержавеющая сталь AISI 430, специальные полимерные
                      материалы
                    </td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Габаритные размеры: ДхШхВ, (мм)
                    </td>
                    <td class="table-right">6000х3200х2800</td>
                  </tr>
                  <tr>
                    <td class="table-border-left-end">Вес (кг)</td>
                    <td class="table-right-end">3500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="math-modal__title math-modal__container__title-three">
              <h3>03</h3>
              <p>MAIN COMPONENTS</p>
            </div>
            <div class="math-modal__table-c math-modal__container__table-one">
              <table>
                <thead>
                  <tr class="table-border-bottom">
                    <td class="table-left table-border-left-end">Пневматика</td>
                    <td class="table-right">
                      Festo (Германия)/Camozzi (Италия)
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Индуктивные датчики
                    </td>
                    <td class="table-right">Festo, Sick (Германия)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Программируемый логический контроллер (PLC)
                    </td>
                    <td class="table-right">Siemens (Германия)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Панель управления
                    </td>
                    <td class="table-right">Weintek (Тайвань)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Частотные преобразователи
                    </td>
                    <td class="table-right">Siemens (Германия)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Блок питания
                    </td>
                    <td class="table-right">Mean Well (США)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">Автоматика</td>
                    <td class="table-right">ETI (Словакия), Eaton (США)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">Кнопки</td>
                    <td class="table-right">Moeller (Германия)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Мотор-редуктор
                    </td>
                    <td class="table-right">Varvel (Италия)</td>
                  </tr>
                  <tr>
                    <td class="table-left table-border-left-end">
                      Центробежный насос
                    </td>
                    <td class="table-right">Tapflo (Швеция)</td>
                  </tr>
                  <tr>
                    <td class="table-border-left-end">Вакуумный вентилятор</td>
                    <td class="table-right-end">Busch/Elektror (Германия)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- -->

    <form action="https://formspree.io/f/xqknedbo" method="post">
      <div class="popup-overlay-container" v-if="IsPopupFormCallShow">
        <div class="popup-overlay" @click="hidePopupFormCall"></div>
        <div class="req-modal">
          <div class="req-modal__header">
            <p class="">CALLBACK FORM</p>
            <img
              src="../assets/img/modal-close.svg"
              alt=""
              @click="hidePopupFormCall"
            />
          </div>
          <div class="req-modal__body">
            <div class="form-input">
              <float-label>
                <input type="text" name="Name:" placeholder="Name:" required />
              </float-label>
            </div>
            <div class="form-input">
              <float-label>
                <input type="tel" name="Phone:" placeholder="Phone:" required />
              </float-label>
            </div>
            <div class="form-input">
              <float-label>
                <input
                  type="email"
                  name="E-mail:"
                  placeholder="E-mail:"
                  required
                />
              </float-label>
            </div>
            <div class="form-input form-input-textarea">
              <float-label>
                <textarea name="Text:" placeholder="Text:" required></textarea>
              </float-label>
            </div>
            <div class="req-modal__check-block">
              <input
                type="checkbox"
                checked
                v-on:click="
                  isButtonDisabledProductCheckActive =
                    !isButtonDisabledProductCheckActive
                "
              />
              <p>I agree to the processing of personal data</p>
            </div>
            <div class="req-modal__btn">
              <button
                type="submit"
                :disabled="isButtonDisabledProductCheckActive"
              >
                <p>Request</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="features" id="FEATURES">
      <div class="features__text">
        <h1>Features</h1>
        <h3>Take advantage of our unique features</h3>
        <div class="features__text__show" @click="featuresShow">
          <p>View all features</p>
          <div
            class="features__text__show__btn"
            v-bind:class="[
              featuresState
                ? 'features__text__show__btn'
                : 'features__text__show__btn-active',
            ]"
          >
            >
          </div>
        </div>
      </div>
      <div class="features__blocks">
        <div class="features__blocks__item">
          <img src="../assets/img/Features/1.svg" alt="" />
          <p>High performance</p>
        </div>
        <div class="features__blocks__item">
          <img src="../assets/img/Features/2.svg" alt="" />
          <p>Gentle influence per product</p>
        </div>
        <div class="features__blocks__item">
          <img src="../assets/img/Features/3.svg" alt="" />
          <p>Versatility use of</p>
        </div>
        <div class="features__blocks__item">
          <img src="../assets/img/Features/4.svg" alt="" />
          <p>Simplicity and reliability constructions</p>
        </div>
        <div class="features__blocks__item">
          <img src="../assets/img/Features/5.svg" alt="" />
          <p>Convenience of reconfiguration for different modes</p>
        </div>
        <div class="features__blocks__item">
          <img src="../assets/img/Features/6.svg" alt="" />
          <p>Integration capability with other equipment</p>
        </div>
        <transition name="slide-fade">
          <div v-if="featuresState" class="features__blocks__show">
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/7.svg" alt="" />
              <p>All conclusions and application permits</p>
            </div>
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/8.svg" alt="" />
              <p>Improvement of organoleptic product indicators</p>
            </div>
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/9.svg" alt="" />
              <p>High level automation</p>
            </div>
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/10.svg" alt="" />
              <p>Минимальные затраты на обслуживание</p>
            </div>
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/11.svg" alt="" />
              <p>Minimum costs for service</p>
            </div>
            <div
              class="features__blocks__item"
              v-bind:class="[
                featuresState
                  ? 'features__blocks__item'
                  : 'features__blocks__item-active',
              ]"
            >
              <img src="../assets/img/Features/12.svg" alt="" />
              <p>Attractive appearance</p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="what-is" id="ABOUT-TPS">
      <div class="what-is__image">
        <img src="../assets/img/back-image.svg" alt="" />
      </div>
      <div class="what-is__text">
        <h1>What is TAVRIAPROMservice?</h1>
        <div class="what-is__text__logo">
          <img src="../assets/img/logo.svg" alt="" />
          <p>– Ukrainian manufacturer of equipment for the food industry</p>
        </div>
        <div class="what-is__text__facts">
          <h2>Facts about us:</h2>
        </div>
        <div class="what-is__text__blocks">
          <div class="what-is__text__blocks__block">
            <div class="what-is__text__blocks__block__num">
              <p>15+</p>
            </div>
            <div class="what-is__text__blocks__block__text">
              <p>
                More than 15 years of experience in the production of equipment
                for the food industry and the development of design solutions
              </p>
            </div>
          </div>
          <div class="what-is__text__blocks__block">
            <div class="what-is__text__blocks__block__num">
              <p>3+</p>
            </div>
            <div class="what-is__text__blocks__block__text">
              <p>
                More than 3 years on the market of equipment for the
                pharmaceutical and chemical industries
              </p>
            </div>
          </div>
          <div class="what-is__text__blocks__block">
            <div class="what-is__text__blocks__block__num">
              <p>70+</p>
            </div>
            <div class="what-is__text__blocks__block__text">
              <p>
                The company employs over 70 people. for December 2021 (of which
                more than 40 are in production and more than 30 are office
              </p>
            </div>
          </div>
        </div>
        <div class="what-is__text__button-toggle">
        <a href="#" download="cardSlider.png">
          <div class="what-is__text__button">
            <img src="../assets/img/downloads.svg" alt="" />
            <p>Download Marketing Kit</p>
          </div>
        </a>
      </div>
      </div>
    </div>

    <div class="what-is__text__slider-title">
      <p>Our B2B clients:</p>
    </div>
    <ClientsSlider id="CLIENTS"></ClientsSlider>
    <no-ssr>
      <div class="other" id="other">
        <h1>Other solutions</h1>
        <div class="other__check">
          <p>Individual production machines</p>
          <label class="checkbox-ios">
            <input
              type="checkbox"
              v-on:click="IsSliderToggle = !IsSliderToggle"
            />
            <span class="checkbox-ios-switch"></span>
          </label>
          <p>Industrial production lines</p>
        </div>
      </div>
      <div v-if="!IsSliderToggle" class="slide-conainer">
        <div class="cards">
          <div class="cards__navs">
            <div class="cards__navs__nav-prev">
              <div class="swiper-button-prev">
                <img src="../assets/img/prev-sl.svg" alt="" />
              </div>
            </div>
            <div class="cards__navs__nav-next">
              <div class="swiper-button-next">
                <img src="../assets/img/next-sl.svg" alt="" />
              </div>
            </div>
          </div>
          <swiper ref="mySwiper-two" :options="swiperOptionsProducts">
            <!--
            <swiper-slide>
              <div class="cards__card" @mouseover="cardHoverMet">
                <div class="cards__card-container">
                  <div class="cards__card__title">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                  <div class="cards__card__img">
                    <img src="../assets/img/card-prod.svg" alt="" />
                  </div>
                  <div class="cards__card__price-block">
                    <img src="../assets/img/botl-ico.svg" alt="" />
                    <p>1000-5000</p>
                    <strong>PER DAY</strong>
                  </div>
                  <div class="cards__card__btn">
                    <p>LEARN MORE</p>
                    <p>></p>
                  </div>
                  <div class="cards__card__description">
                    <p>
                      For the preparation of ketchup and sauces, homogeneous and
                      with inclusions, their packing in bottles and jars (glass,
                      plastic) or packing in tubes of the "CHAB" type, labeling
                      and group packaging.
                    </p>
                    <div class="cards__card__description__line"></div>
                    <div v-show="cardHover">
                      <div class="cards__card__hover">
                        <div>
                          <p>
                            Line for the production of ketchup, sauces and
                            tomato paste
                          </p>
                          <p>
                            Line for the production of ketchup, sauces and
                            tomato paste
                          </p>
                          <p>
                            Line for the production of ketchup, sauces and
                            tomato paste
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            -->
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                <div class="cards__popular">
                  <p>POPULAR</p>
                </div>
                <div class="cards__card cards__card-active">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-if="IsSliderToggle" class="slide-conainer">
        <div class="cards">
          <div class="cards__navs">
            <div class="cards__navs__nav-prev">
              <div class="swiper-button-prev">
                <img src="../assets/img/prev-sl.svg" alt="" />
              </div>
            </div>
            <div class="cards__navs__nav-next">
              <div class="swiper-button-next">
                <img src="../assets/img/next-sl.svg" alt="" />
              </div>
            </div>
          </div>
          <swiper>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </no-ssr>
    <!--
            <no-ssr>
        <VueSlickCarousel :arrows="true" :dots="true">
      <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
            <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
    </VueSlickCarousel>
    </no-ssr>
    -->
    <!--

    <carousel :autoplay="true" :nav="false">

                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>
                  <div>
                      <div class="card-and-hover">
                                        <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
      </div>

</carousel>
-->
    <!-- -->

    <!--
      <div class="other" id="other">
        <h1>Other solutions</h1>
        <div class="other__check">
          <p>Individual production machines</p>
          <label class="checkbox-ios">
            <input
              type="checkbox"
              v-on:click="IsSliderToggle = !IsSliderToggle"
            />
            <span class="checkbox-ios-switch"></span>
          </label>
          <p>Industrial production lines</p>
        </div>
      </div>
<div class="">
      <div slot="prev"><span class="prev">prev</span></div>
  <carousel v-if="!IsSliderToggle"
  :nav="true"
  >
 
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/2.png" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
  

  </carousel>
    <template slot="next"><span class="next">next</span></template>
</div>
<div class="">3
        <template slot="prev"><span class="prev">prev</span></template>
        2
    <template slot="next"><span class="next">next</span></template>
    3
  <carousel v-if="IsSliderToggle">
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-and-hover">
                                <div class="cards__popular-none">
                  
                </div>
                <div class="cards__card">
                  <div class="cards__card-container">
                    <div class="cards__card__title">
                      <p>
                        Line for the production of ketchup, sauces and tomato
                        paste
                      </p>
                    </div>
                    <div class="cards__card__img">
                      <img src="../assets/img/card-prod.svg" alt="" />
                    </div>
                    <div class="cards__card__price-block">
                      <img src="../assets/img/botl-ico.svg" alt="" />
                      <p>1000-5000</p>
                      <strong>PER DAY</strong>
                    </div>
                    <div class="cards__card__btn">
                      <p>LEARN MORE</p>
                      <p>></p>
                    </div>
                    <div class="cards__card__description">
                      <p>
                        For the preparation of ketchup and sauces, homogeneous
                        and with inclusions, their packing in bottles and jars
                        (glass, plastic) or packing in tubes of the "CHAB" type,
                        labeling and group packaging.
                      </p>
                      <div class="cards__card__description__line"></div>
                    </div>
                  </div>
                </div>
                <div class="cards__card__hover">
                  <div class="cards__card__hover-container">
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                    <p>
                      Line for the production of ketchup, sauces and tomato
                      paste
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </carousel>
</div>

-->

    <!-- two -->

    <!-- -->

    <div class="button-catalog">
      <a href="#" download="cardSlider.png">
        <div class="what-is__text__button">
          <img src="../assets/img/downloads.svg" alt="" />
          <p>Download Catalog</p>
        </div>
      </a>
    </div>
    <div class="prod-line">
      <div class="prod-line__text">
        <h1>NEED A CUSTOM PRODUCTION LINE?</h1>
        <p>
          If you want to get commercial offer for customized production line
          just let us know&
        </p>
        <div class="prod-line__text__btn" @click="showPopupFormCall">
          <p>CONTACT US</p>
          <p>></p>
        </div>
      </div>
      <div class="prod-line-mob-img">
        <img src="../assets/img/lineee.svg" alt="" />
      </div>
    </div>
    <div class="questions-title" id="FAQ">
      <p>Frequently Asked Questions</p>
    </div>
    <div class="questions">
      <div class="questions__row">
        <details class="questions__row__details">
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
      </div>
      <div class="questions__row">
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
        <details>
          <p>
            For the preparation of ketchup and sauces, homogeneous and with
            inclusions, their packing in bottles and jars (glass, plastic) or
            packing in tubes of the "CHAB" type, labeling and group packaging.
          </p>
          <summary><p>Question from the questionnaire ?</p></summary>
        </details>
      </div>
    </div>
    <div class="contact-form" id="CONTACTS">
      <div class="contact-form__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13235.776901180752!2d32.68001652965941!3d46.68136660883385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c41ab4334a064f%3A0x656ea667712927d0!2z0KLQsNCy0YDRltGP0L_RgNC-0LzRgdC10YDQstGW0YE!5e0!3m2!1sru!2sua!4v1639556653336!5m2!1sru!2sua"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div class="contact-form__form">
        <div class="contact-form__form__logo">
          <img src="../assets/img/logo.svg" alt="" />
        </div>
        <div class="contact-form__form__title">
          <img src="../assets/img/map-icon.svg" alt="" />
          <p>MAIN OFFICE:</p>
        </div>
        <div class="contact-form__form__sub-title">
          <p>9 East Street, bldg. 5, Kherson, Kherson region, Ukraine, 73000</p>
        </div>
        <div class="contact-form__form__phones">
          <div class="contact-form__form__phones__phone">
            <img src="../assets/img/phone-ico.svg" alt="" />
            <p>+38 (067) 552 11 10</p>
          </div>
          <div class="contact-form__form__phones__phone">
            <img src="../assets/img/phone-ico.svg" alt="" />
            <p>+38 (073) 909 90 80</p>
          </div>
        </div>
        <h2>Contact us:</h2>
        <form action="https://formspree.io/f/xqknedbo" method="post">
          <div class="contact-form__form__form-block">
            <div class="contact-form__form__form-block__left">
              <input name="Name" type="text" placeholder="Name:" required />
              <input name="Phone" type="text" placeholder="Phone:" required />
              <button><p>SEND</p></button>
            </div>
            <div class="contact-form__form__form-block__right">
              <textarea name="text" placeholder="Text:" required></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import VueSlickCarousel from "vue-slick-carousel";
import "hooper/dist/hooper.css";
import ClientsSlider from "../components/ClientsSlider.vue";
export default {
  components: {
    VueSlickCarousel,
    Hooper,
    Slide,
    ClientsSlider,
  },
  data() {
    return {
      Machine: [
        {
          id: "0",
          name: "AUTOMATIC FILLING LINE MACHINE",
          description:
            "Оборудование серии МН-РВ предназначена для автоматического весового розлива жидких и вязких масс пищевого и непищевого назначения в различные емкости цилиндрической и другой формы, а также последующей укупорки крышкой методом закручивания или захлопывания. Возможно подключение машины к станции CIP-мойки. Возможно изготовление автомата с быстро разборной конструкцией в случае необходимости более тщательной мойки системы дозирования.",
          specifications: [],
          mainComponents: [],
        },
      ],
      cardHover: false,
      show: false,
      checkGlassActive: false,
      checkPlasticActive: false,
      checkTubesActive: false,
      isButtonDisabled: true,
      isButtonDisabledProductCheck: true,
      isButtonDisabledProductCheckActive: false,
      isBtnDisabledProductCheck: true,
      isBtnDisabledProductCheckActive: false,
      IsSliderToggle: false,
      carouselClients: {
        arrows: true,
        slidesToScroll: 1,
      },
      featuresState: false,
      isActiveGlass: true,
      isActivePlastic: true,
      isActiveTubes: true,
      IsPopupMachShow: false,
      IsPopupFormShow: false,
      IsPopupFormCallShow: false,
      /* */
      checkedMachineOne: false,
      checkedMachineTwo: false,
      checkedMachineThree: false,
      checkedMachineFour: false,
      checkedMachineFive: false,
      checkedMachineSix: false,
      checkedMachineSeven: false,
      checkedMachineEight: false,
      checkedGlass: false,
      checkedTubes: false,
      checkedPlastic: false,
      checkedMachines: false,

      tinySliderOptions: {
        items: 1,
        navContainer: "#customize-thumbnails",
        navAsThumbnails: true,
        autoplay: true,
        autoplayTimeout: 8000,
        swipeAngle: false,
        speed: 1000,
        autoplayButton: false,
        controlsText: [" < ", " > "],
      },

      swiperOptionsProducts: {
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
            spaceBetween: 20,
          },

          605: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1105: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    checkGlass() {
      this.checkGlassActive = !this.checkGlassActive;
      if (this.checkGlassActive === true) {
        this.isActiveGlass = false;
        this.checkedGlass = true;
        this.checkedMachineEight = true;
        this.checkedMachineFour = true;
        this.checkedMachineFive = true;
        this.checkedMachineSix = true;
        this.checkedMachineSeven = true;
        this.checkedMachineOne = true;
      }
      if (this.checkGlassActive === false) {
        this.isActiveGlass = true;
        this.checkedGlass = false;
        this.checkedMachineEight = false;
        this.checkedMachineFour = false;
        this.checkedMachineFive = false;
        this.checkedMachineSix = false;
        this.checkedMachineSeven = false;
        this.checkedMachineOne = false;
      }
    },

    checkPlastic() {
      this.checkPlasticActive = !this.checkPlasticActive;
      if (this.checkPlasticActive === true) {
        this.isActivePlastic = false;
        this.checkedMachineEight = true;
        this.checkedMachineFour = true;
        this.checkedMachineFive = true;
        this.checkedMachineSix = true;
        this.checkedMachineSeven = true;
        this.checkedMachineOne = true;
        this.checkedPlastic = true;
      }
      if (this.checkPlasticActive === false) {
        this.isActivePlastic = true;
        this.checkedMachineEight = false;
        this.checkedMachineFour = false;
        this.checkedMachineFive = false;
        this.checkedMachineSix = false;
        this.checkedMachineSeven = false;
        this.checkedMachineOne = false;
        this.checkedPlastic = false;
      }
    },

    checkTubes() {
      this.checkTubesActive = !this.checkTubesActive;
      if (this.checkTubesActive === true) {
        this.isActiveTubes = false;
        this.checkedMachineTwo = true;
        this.checkedMachineThree = true;
        this.checkedTubes = true;
      }
      if (this.checkTubesActive === false) {
        this.isActiveTubes = true;
        this.checkedMachineTwo = false;
        this.checkedMachineThree = false;
        this.checkedTubes = false;
      }
    },
    showPopupMach() {
      this.IsPopupMachShow = true;
    },

    hidePopupMach() {
      this.IsPopupMachShow = false;
    },

    showPopupForm() {
      this.IsPopupFormShow = true;
    },

    hidePopupForm() {
      this.IsPopupFormShow = false;
    },

    showPopupFormCall() {
      this.IsPopupFormCallShow = true;
    },

    hidePopupFormCall() {
      this.IsPopupFormCallShow = false;
    },

    featuresShow() {
      this.featuresState = !this.featuresState;
    },
    cardHoverMet: function () {
      this.cardHover = !this.cardHover;
    },
  },
};
</script>

<style>
.checkbox-ios {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
}
.checkbox-ios .checkbox-ios-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25%/50%;
  vertical-align: top;
  background: #eee;
  transition: 0.2s;
}
.checkbox-ios .checkbox-ios-switch:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.15s;
}
.checkbox-ios input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox-ios
  input[type="checkbox"]:not(:disabled):active
  + .checkbox-ios-switch:before {
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
}
.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch {
  background: #ff3600;
}
.checkbox-ios input[type="checkbox"]:checked + .checkbox-ios-switch:before {
  transform: translateX(20px);
}

/* Hover */
.checkbox-ios input[type="checkbox"]:not(:disabled) + .checkbox-ios-switch {
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.3);
}

/* Disabled */
.checkbox-ios input[type="checkbox"]:disabled + .checkbox-ios-switch {
  filter: grayscale(70%);
  border-color: rgba(0, 0, 0, 0.1);
}
.checkbox-ios input[type="checkbox"]:disabled + .checkbox-ios-switch:before {
  background: #eee;
}

/* Focus */
.checkbox-ios.focused .checkbox-ios-switch:before {
  box-shadow: inset 0px 0px 4px #ff5623;
}

.vfl-label-on-focus {
  color: #ffffff;
}
</style>