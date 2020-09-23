/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { SorterAlgorithmInterface } from '.';

/**
 * Native quicksort algorithm implementation.
 */
export class NativeQuicksort implements SorterAlgorithmInterface {
  sort(numbers: number[]): void {
    if (numbers.length <= 1) {
      return;
    }

    numbers = numbers.sort((a, b) => a - b);
  }
}
