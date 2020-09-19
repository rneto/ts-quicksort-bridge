// Import stylesheets
import '../style.css';

// Import modules
import { BasicQuicksort } from './core/algorithms';
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
    this.title = 'Implementations of the QuickSort Algorithm and using the Bridge Pattern with TypeScript';
    this.writer = htmlWriterFactory.createHTMLWriter('app');
  }

  /**
   * App initalization.
   */
  public init(): void {
    document.title = this.title;
    this.writer.push(`<h1>${this.title}</h1>`);

    this.showBasicQuicksortDemo();
  }

  /**
   * Show de basic quisort demo.
   */
  private showBasicQuicksortDemo(): void {
    const basicQuicksort: BasicQuicksort = new BasicQuicksort();
    const quickSorterService: QuicksortSorter = new QuicksortSorter(basicQuicksort);
    const timer = new Timer();
    let sortedNumbers: number[] = [];

    timer.start();
    sortedNumbers = quickSorterService.sort(numbers);
    timer.end();

    this.writer.push(`<h2>Basic Quicksort <small>(${timer.elapsedTime()}ms to order ${numbers.length} numbers)</small></h2>`);
    this.writer.push(`<div class='numbers'>${numbers.join(', ')}</div>`);
    this.writer.push(`<div class='numbers'>${sortedNumbers.join(', ')}</div>`);
  }
}

const app = new App();
app.init();
