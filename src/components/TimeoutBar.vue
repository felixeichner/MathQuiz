<template>
  <transition>
    <div :style="{backgroundColor: `rgb(${redComp}, ${greenComp}, 0)`, height: height + '%'}"></div>
  </transition>
</template>

<script>
export default {
  props: ['resetGame'],
  data() {
    return {
      redComp: 0,
      greenComp: 128,
      height: 100,
      interval: '',
      points: 10
    }
  },
  methods: {
    startTimer() {
      this.points = 10;
      let i = 0;
      this.interval = setInterval(() => {
        if (this.redComp <= 128) { this.redComp += 1 }
        if (this.greenComp >= 0) { this.greenComp -= 1 }
        this.height -= 0.25;
        i++;
        if (i >= 40) { i = 0; this.points -= 1; }
        if (this.height <= 0) {
          this.points = -10;
          this.resetTimer();
          this.resetGame('Time is up.');
        }
      }, 25);
    },
    resetTimer() {
      clearInterval(this.interval);
      this.redComp = 0;
      this.greenComp = 128;
      this.height = 100;
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    width: 1rem;
    border: none;
    border-radius: 2px;
  }
</style>
