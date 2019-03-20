const reducer = (state = 0, data) => state + data;
const total = [0, 1, 2, 3].reduce(reducer);
console.log(total); // 6
