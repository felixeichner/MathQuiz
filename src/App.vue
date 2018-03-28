<template>
  <div>
    <Header></Header>
    <hr>
    <div class="container">
      <QuizBox></QuizBox>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import QuizBox from './components/QuizBox.vue';

export default {
  components: {
    Header,
    QuizBox
  }
}
</script>

<style lang="scss">
  div {
    color: #323232;
  }
</style>
