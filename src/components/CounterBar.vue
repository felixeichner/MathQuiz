<template>
  <div>
    <strong>Correct Answers:</strong>
    <div class="bar">
      <div class="progress">
        <div class="progress-bar" role="progressbar"
             :style="{width: progressWidth + '%'}"
             :aria-valuenow="progressWidth"
             aria-valuemin="0" aria-valuemax="100">
          {{ correctAnswerCount }} / {{ answerCount }}
        </div>
      </div>
    </div>
    <div class="totalPoints">Total Points: {{ totalPoints }}</div>
  </div>
</template>

<script>
export default {
  props: ['answerCount', 'correctAnswerCount', 'progressWidth', 'totalPoints']
}
</script>

<style lang="scss" scoped>
  .bar, .progress {
    height: 1.5rem;
    border: none;
    border-radius: 3px;
  }
  .bar {
    background-color: lightgrey;
    font-weight: bold;
  }
  .progress-bar {
    background-color: green;
  }
  .totalPoints {
    font-weight: bold;
    margin-top: 0.7rem;
  }
</style>
