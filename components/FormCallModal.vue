<template>
  <div>
    <div class="call-modal">
      <form action="">
        <div
          class="popup-overlay"
          v-if="IsPopupFormCallShow"
          @closePopupForm="hidePopupFormCall"
        >
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
                  <input
                    type="text"
                    name="Name:"
                    placeholder="Name:"
                    required
                  />
                </float-label>
              </div>
              <div class="form-input">
                <float-label>
                  <input
                    type="text"
                    name="Phone:"
                    placeholder="Phone:"
                    required
                  />
                </float-label>
              </div>
              <div class="form-input">
                <float-label>
                  <input
                    type="E-mail"
                    name="E-mail:"
                    placeholder="E-mail:"
                    required
                  />
                </float-label>
              </div>
              <div class="form-input form-input-textarea">
                <float-label>
                  <textarea
                    name="Text:"
                    placeholder="Text:"
                    required
                  ></textarea>
                </float-label>
              </div>
              <div class="req-modal__check-block">
                <input type="checkbox" checked/>
                <p>I agree to the processing of personal data</p>
              </div>
              <div class="req-modal__btn">
                <button type="submit"><p>Request a quote</p></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsPopupFormCallShow: false,
    };
  },
  methods: {
    showPopupFormCall() {
      this.IsPopupFormShow = true;
    },

    hidePopupFormCall() {
      this.IsPopupFormShow = false;
    },
  },
};
</script>

<style>
</style>