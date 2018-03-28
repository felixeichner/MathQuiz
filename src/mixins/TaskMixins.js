export const taskMixins = {
  data() {
    return {
      item1: '',
      item2: '',
      operator: '',
      result: '',
      operators: ['+', '-', '*'],
      results: [],
      currentGame: false,
      endGameMessage: ''
    }
  },
  methods: {
    newTask() {
      this.initializeData();
      let number, i = 0;
      while (this.results.length < 4) {
        this.result == 0 || i > 20 ? number = this.newNumber() : number = this.randomResult();
        this.addToResults(number);
        i++;
      }
    },
    initializeData() {
      this.currentGame= true;
      this.item1 = this.newNumber();
      this.item2 = this.newNumber();
      this.operator = this.operators[Math.floor(Math.random() * 3)];
      this.result = eval('(' + this.item1 + ') ' + this.operator + ' (' + this.item2 + ')');
      this.results = [];
      this.results.push(this.result);
    },
    newNumber() {
      const number = Math.floor(Math.random() * 20) * (Math.random() < 0.5 ? 1 : -1);
      return number == -0 ? 0 : number;
    },
    randomResult() {
      return Math.floor(Math.random() * this.result * 2 +
              this.item1 * Math.random() - this.item2 * Math.random()) *
              (Math.random() < 0.5 ? -1 : 1);
    },
    addToResults(number) {
      if (!this.results.includes(number)) {
        if (Math.random() < 0.5) {
          this.results.push(number);
        } else {
          this.results.unshift(number);
        }
      }
    },
    resetGame(reason) {
      this.currentGame = false;
      this.endGameMessage = reason;
      if (reason == 'Time is up.') {
        this.correctAnswer = false;
      }
      this.answerCount++;
      this.progressWidth = this.correctAnswerCount / this.answerCount * 100;
    }
  }  
}
