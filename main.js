new Vue({
  el: "#vue-app",
  data: {
    times: 3,
    shakeImageBoolean: false,
    capybaraHi: false,
  },
  methods: {
    tap() {
      this.times -= 1;
      this.shakeImageBoolean = true;
    },
    animationEnded(event) {
      if (event.animationName === "shake") {
        this.shakeImageBoolean = false;
      } else if (event.animationName === "scaleImage") {
        this.capybaraHi = true;
      }
    },
  },
});
