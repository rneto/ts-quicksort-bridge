import { SorterAlgorithmInterface } from '.';

/**
 * Basic quicksort algorithm implementation.
 */
export class BasicQuicksort implements SorterAlgorithmInterface {
  sort(items: number[]): number[] {
    if (items.length <= 1) {
      return items;
    }

    const pivot = items[items.length - 1];

    return [
      ...this.sort(items.filter((n) => n < pivot)),
      ...items.filter((n) => n === pivot),
      ...this.sort(items.filter((n) => n > pivot)),
    ];
  }
}
