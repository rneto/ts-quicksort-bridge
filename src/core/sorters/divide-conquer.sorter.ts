import { SorterAlgorithmInterface } from '../algorithms';

export abstract class DivideConquerSorter {
  sorterAlgorithm: SorterAlgorithmInterface;

  /**
   * Constructor for a sorter service.
   *
   * @param sorterAlgorithm The sorter algorithm implementation to apply.
   */
  constructor(sorterAlgorithm: SorterAlgorithmInterface) {
    this.sorterAlgorithm = sorterAlgorithm;
  }

  /**
   * Sort service method.
   * @param numbers The numbers to sort.
   */
  sort(numbers: number[]): void {
    if (numbers.length > 1) {
      this.sorterAlgorithm.sort(numbers, 0, numbers.length - 1);
    }
  }
}
