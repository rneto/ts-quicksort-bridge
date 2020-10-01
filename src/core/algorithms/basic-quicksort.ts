/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { SorterAlgorithmInterface } from '.';

/**
 * Basic quicksort algorithm implementation.
 */
export class BasicQuicksort implements SorterAlgorithmInterface {
  sort(numbers: number[]): void {
    if (numbers.length <= 1) {
      return;
    }

    const pivot = numbers[numbers.length - 1];
    const left = numbers.filter((n) => n < pivot);
    const right = numbers.filter((n) => n > pivot);

    this.sort(left);
    this.sort(right);

    // eslint-disable-next-line no-param-reassign
    numbers.splice(
      0,
      numbers.length,
      ...left,
      ...numbers.filter((n) => n === pivot),
      ...right,
    );
  }
}
