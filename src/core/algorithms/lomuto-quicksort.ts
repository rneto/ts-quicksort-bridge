/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import { SorterAlgorithmInterface } from '.';

/**
 * Lomuto quicksort algorithm implementation.
 */
export class LomutoQuicksort implements SorterAlgorithmInterface {
  sort(numbers: number[], low: number, hight: number): void {
    if (low < hight) {
      const p = this.partition(numbers, low, hight);

      this.sort(numbers, low, p - 1);
      this.sort(numbers, p + 1, hight);
    }
  }

  private partition(numbers: number[], low: number, hight: number): number {
    const pivot: number = numbers[hight];
    let i: number = low;
    for (let j: number = low; j <= hight; j += 1) {
      if (numbers[j] < pivot) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        i += 1;
      }
    }
    if (numbers[hight] < numbers[i]) {
      [numbers[i], numbers[hight]] = [numbers[hight], numbers[i]];
    }
    return i;
  }
}
