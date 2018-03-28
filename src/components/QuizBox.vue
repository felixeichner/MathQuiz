<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <CounterBar :answerCount="answerCount"
                      :correctAnswerCount="correctAnswerCount"
                      :progressWidth="progressWidth"
                      :totalPoints="totalPoints">
          </CounterBar>
        </div>
        <div class="col-md-2 timerBar">
          <TimeoutBar ref="timeoutBar" :resetGame="resetGame">
          </TimeoutBar>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h4>{{ item1 | taskMessage(operator, item2) }}</h4>
      </div>
      <transition appear name="flipcard" mode="out-in">
        <div class="card-body" v-if="currentGame" key="game">
          <div class="row">
            <div class="col-6" v-for="option in 4" :key="option">
              <button class="btn btn-primary" @click="submitResult">{{ results[option - 1] }}</button>
            </div>
          </div>
        </div>
        <div class="card-body result"
             :style="{'background-color': correctAnswer || correctAnswer == null ? 'green' : 'rgb(200, 60, 0)'}"
             v-else key="noGame">
          <h3 v-if="correctAnswer">Congratulations!!</h3>
          <h3 v-else-if="correctAnswer == false">{{ endGameMessage }} Better luck next time!</h3>
          <div><button class="btn btn-primary" @click="startTimer">Next Challenge</button></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { taskMixins } from '../mixins/TaskMixins';
import CounterBar from './CounterBar';
import TimeoutBar from './TimeoutBar';
import { filters } from '../mixins/filters';

export default {
  mixins: [taskMixins],
  filters,
  data() {
    return {
      correctAnswer: null,
      answerCount: 0,
      correctAnswerCount: 0,
      progressWidth: 100,
      totalPoints: 0
    }
  },
  methods: {
    submitResult(e) {
      this.correctAnswer = this.result == e.target.innerText;
      if (this.correctAnswer) {
        this.correctAnswerCount++;
        this.updateTotalPoints();
      } else {
        this.$refs.timeoutBar.points = -(12 - this.$refs.timeoutBar.points);
        this.updateTotalPoints();
      }
      this.$refs.timeoutBar.resetTimer();
      this.resetGame('False.');
    },
    startTimer() {
      this.$refs.timeoutBar.startTimer();
      this.newTask();
    },
    updateTotalPoints() {
      const newTotal = this.totalPoints + this.$refs.timeoutBar.points;
      newTotal > 0 ? this.totalPoints = newTotal : this.totalPoints = 0;
    }
  },
  components: {
    CounterBar,
    TimeoutBar
  }
}
</script>

<style lang="scss" scoped>
  .card {
    text-align: center;
    margin-top: 4rem;
  }
  .card-header {
    background-color: rgba(0,0,0,.1);
    border: none;
    h4 {
      font-weight: 700;
    }
  }
  .result {
    background-color: rgba(11, 75, 134, 0.3);
  }
  .btn {
    margin: 1rem;
    padding: 1rem;
    width: 50%;
  }
  .timerBar {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }  

  .flipcard-enter {
    opacity: 0;
  }
  .flipcard-enter-active {
    transition: opacity 0.2s linear;
    // opacity: 1;
  }
  .flipcard-leave-active {
    transition: opacity 0.1s linear;
    opacity: 0;
  }
</style>
