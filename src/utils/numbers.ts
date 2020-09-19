export const numbers: number[] = [];
for (let i = 0, t = 100000; i < t; i += 1) {
  numbers.push(Math.round(Math.random() * t * (Math.random() < 0.5 ? -1 : 1)));
}
