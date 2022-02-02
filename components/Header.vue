<template>
  <div class="header">
    <div class="over-container" v-if="IsPopupFormCallShowModal">
      <form action="https://formspree.io/f/xqknedbo" method="post">
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
                v-on:click="
                  isButtonDisabledProductCheck = !isButtonDisabledProductCheck
                "
                checked
              />
              <p>I agree to the processing of personal data</p>
            </div>
            <div class="req-modal__btn">
              <button type="submit" :disabled="isButtonDisabledProductCheck">
                <p>Request</p>
              </button>
            </div>
          </div>
        </div>
        <div
          class="popup-overlay"
          v-if="IsPopupFormCallShow"
          @closePopupForm="hidePopupFormCall"
          @click="hidePopupFormCall"
        ></div>
      </form>
    </div>
    <div class="header__container">
      <div class="header__logo">
        <img src="../assets/img/logo.svg" alt="" />
      </div>
      <div class="header__right">
        <div class="header__menu">
          <ul>
            <li><a href="#FEATURES">Features</a></li>
            <li><a href="#ABOUT-TPS">About TPS</a></li>
            <li><a href="#CLIENTS">Our clients</a></li>
            <li><a href="#other">Other solutions</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#CONTACTS">Contacts</a></li>
          </ul>
        </div>
        <div class="btn-red header__right-btn">
          <button @click="showPopupFormCall"><p>Callback</p></button>
        </div>
      </div>
      <div
        class="header-mob-btn"
        @click="menuToggle"
        v-if="IsPopupMenuToggleOpen"
      >
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" width="14" height="2" fill="white" />
          <rect x="3" y="6" width="14" height="2" fill="white" />
          <rect x="3" y="12" width="14" height="2" fill="white" />
          <rect width="2" height="2" fill="white" />
          <rect y="6" width="2" height="2" fill="white" />
          <rect y="12" width="2" height="2" fill="white" />
        </svg>
      </div>
      <div class="btn-close" v-if="IsPopupMenuToggle" @click="menuToggle">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="7.34375"
            y="5.92773"
            width="18"
            height="2"
            transform="rotate(45 7.34375 5.92773)"
            fill="white"
          />
          <path
            d="M20.0703 7.3418L7.34239 20.0697L5.92818 18.6555L18.6561 5.92758L20.0703 7.3418Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <transition name="fade">
      <div v-if="IsPopupMenuToggle">
        <div class="popup-overlay-header">
          <div class="popup-menu">
            <div class="popup-menu__list">
              <a href="#FEATURES" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>FEATURES</p>
                </div>
              </a>
              <a href="#ABOUT-TPS" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>ABOUT TPS</p>
                </div>
              </a>
              <a href="#CLIENTS" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>OUR CLIENTS</p>
                </div>
              </a>
              <a href="#other" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>OTHER SOLUTIONS</p>
                </div>
              </a>
              <a href="#FAQ" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>FAQ</p>
                </div>
              </a>
              <a href="#CONTACTS" @click="menuToggle">
                <div class="popup-menu__list__item">
                  <p>CONTACTS</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      IsPopupMenuToggle: false,
      IsPopupMenuToggleOpen: true,
      IsPopupFormCallShow: false,
      isButtonDisabledProductCheck: false,
      IsPopupFormCallShowModal: false,
    };
  },
  methods: {
    menuToggle() {
      this.IsPopupMenuToggle = !this.IsPopupMenuToggle;
      this.IsPopupMenuToggleOpen = !this.IsPopupMenuToggleOpen;
    },
    showPopupFormCall() {
      this.IsPopupFormCallShow = true;
      this.IsPopupFormCallShowModal = true;
    },

    hidePopupFormCall() {
      this.IsPopupFormCallShow = false;
      this.IsPopupFormCallShowModal = false;
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: #2b2a29;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  &__container {
    display: flex;
    justify-content: space-between;
    width: 980px;
    margin: 30px 45px 30px 0px;
  }
  &__logo {
    display: flex;
    width: 265px;
    height: 23px;
  }
  &__right {
    display: flex;
    justify-content: space-between;
    min-width: 496px;
  }

  &__right-btn {
    margin: -2px 0px 0px 25px;
    width: 90px;
    height: 20px;

    button {
      width: 90px;
      height: 20px;
    }
  }

  &__menu {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      min-width: 613px;
      margin: 0px 0px 0px 30px;
    }

    ul li {
      a {
        font-family: Stolzl;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none;
      }
      display: flex;
    }

    ul li:hover {
      filter: drop-shadow(0px 0px 15px #ff3600);
    }
  }
}

.header-mob-btn {
  display: none;
}

@media (max-width: 1315px) {
  .header {
    justify-content: normal;
    &__container {
      margin: 30px 45px 30px 45px;
    }
  }
}

@media (max-width: 1140px) {
  .header {
    &__right {
      display: none;
    }
    &__container {
      width: 100%;
      margin: 30px 50px 30px 50px;
      align-items: center;
    }
  }

  .header-mob-btn {
    display: flex;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  .header-mob-btn:hover {
    svg rect {
      fill: #ff3600;
    }
  }

  .popup-overlay-header {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 9999;
    top: 0;
    left: 0;
    align-items: flex-end;
    flex-direction: column;
    margin: 80px 0px 0px 0px;
  }

  .popup-menu {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 240px;
    background-color: #2b2a29;
    a {
      font-family: Stolzl;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
      text-decoration: none;
    }
    &__list {
      display: flex;
      flex-direction: column;
      &__item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 39px;
        border-bottom: 1px solid #f1f1f1;
        cursor: pointer;
        p {
          margin: 5px 0px 0px 15px;
        }
      }
    }
  }

  .btn-close {
    display: flex;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .btn-close:hover {
    svg {
      fill: #ff3600;
    }
  }
}

@media (max-width: 684px) {
  .header {
    height: 50px;
    &__container {
      margin: 25px 10px 30px 15px;
    }
    &__logo {
      width: 100px;
      height: 20px;
    }
  }
  .header-mob-btn {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 576px) {
  .popup-menu {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-to {
  opacity: 1;
  transition: 0.5s;
}
</style>