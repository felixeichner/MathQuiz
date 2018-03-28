export const filters = {
  taskMessage(item1, operator, item2) {
    console.log(item1, operator, item2);
    if (operator == '+' && item2 < 0) {
      return `(${item1}) ${item2.toString().substr(0,1)} (${item2.toString().substr(1)})`;
    } else if (!operator) {
      return `Let's start the Challenge`;
    } else {
      return `(${item1})  ${operator}  (${item2})`;
    }
  }
}
