// Import stylesheets
import '../style.css';

// Import modules
import { LomutoQuicksort, NativeQuicksort } from './core/algorithms';
import { QuicksortSorter } from './core/sorters';

// Import utils
import * as htmlWriterFactory from './utils/html-writer.factory';
import { HTMLWriterFactory } from './utils/html-writer.factory';
import { Timer } from './utils/timer';
import { numbers } from './utils/numbers';

// TypeScript code
export class App {
  private title: string;

  private writer: HTMLWriterFactory;

  /**
   * App constructor.
   */
  constructor() {
    this.title = 'Implementations of the QuickSort Algorithm and use the Bridge Pattern with TypeScript';
    this.writer = htmlWriterFactory.createHTMLWriter('app');
  }

  /**
   * App initalization.
   */
  public init(): void {
    document.title = this.title;
    this.writer.push(`<h1>${this.title}</h1>`);

    this.writer.push(`<div class='numbers'>${numbers.join(', ')}</div>`);

    this.showLomutoQuicksortDemo();
    this.showNativeQuicksortDemo();
  }

  /**
   * Show de lomuto quisort demo.
   */
  private showLomutoQuicksortDemo(): void {
    const lomutoQuicksort: LomutoQuicksort = new LomutoQuicksort();
    const quickSorterService: QuicksortSorter = new QuicksortSorter(lomutoQuicksort);
    const timer = new Timer();
    const sortedNumbers = [...numbers];

    timer.start();
    quickSorterService.sort(sortedNumbers);
    timer.end();

    this.writer.push(`<h2>Lomuto Quicksort <small>(${timer.elapsedTime()}ms to order ${numbers.length} numbers)</small></h2>`);
    this.writer.push(`<div class='numbers'>${sortedNumbers.join(', ')}</div>`);
  }

  /**
   * Show de native quisort demo.
   */
  private showNativeQuicksortDemo(): void {
    const nativeQuicksort: NativeQuicksort = new NativeQuicksort();
    const quickSorterService: QuicksortSorter = new QuicksortSorter(nativeQuicksort);
    const timer = new Timer();
    const sortedNumbers = [...numbers];

    timer.start();
    quickSorterService.sort(sortedNumbers);
    timer.end();

    this.writer.push(`<h2>Native Quicksort <small>(${timer.elapsedTime()}ms to order ${numbers.length} numbers)</small></h2>`);
    this.writer.push(`<div class='numbers'>${sortedNumbers.join(', ')}</div>`);
  }
}

const app = new App();
app.init();
