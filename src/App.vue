<template>
  <div>
    <Header></Header>
    <hr>
    <div class="container main-content">
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
  .main-content {
    padding: 3rem;
    border-radius: 5px;
    border: 3px solid #721c24;
  }
</style>
