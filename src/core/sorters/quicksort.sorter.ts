import { DivideConquerSorter } from './divide-conquer.sorter';

export class QuicksortSorter extends DivideConquerSorter {
  /**
   * Sort service method.
   * @param numbers The numbers to sort.
   */
  sort(numbers: number[]): number[] {
    if (numbers.length <= 1) {
      return numbers;
    }

    return this.sorterAlgorithm.sort(numbers, 0, numbers.length - 1);
  }
}
