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
}
