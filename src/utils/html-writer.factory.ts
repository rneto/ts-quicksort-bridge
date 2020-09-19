export class HTMLWriterFactory {
  private htmlElement: HTMLElement;

  private htmlContent: string[];

  /**
   * Render HTML content in HTML element.
   */
  private renderHTML(): void {
    this.htmlElement.innerHTML = this.htmlContent.join('');
  }

  /**
   * HTMLWriterFactory constructor.
   *
   * @param htmlElement HTML elementId where to write.
   */
  constructor(htmlElement: HTMLElement) {
    this.htmlElement = htmlElement;
    this.htmlContent = [];
  }

  /**
   * Push html content to html element.
   *
   * @param html Add HTML content to writer.
   */
  push(html: string): void {
    this.htmlContent.push(html);
    this.renderHTML();
  }
}

/**
 * HTMLWriterFactory creator.
 *
 * @param elementId HTML element id where to write.
 */
export function createHTMLWriter(elementId: string): HTMLWriterFactory {
  let htmlElement: HTMLElement | null = document.getElementById(elementId);
  if (htmlElement == null) {
    htmlElement = document.createElement('div');
    htmlElement.setAttribute('id', elementId);
    document.body.appendChild(htmlElement);
  }

  return new HTMLWriterFactory(htmlElement);
}
