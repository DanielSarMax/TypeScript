/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to represent a Checkbox
 */

/// <reference path='../html-input-element/html-input-element.ts' />

/**
 * @description Class for the buttons objects to be placed in the page
 */
class Checkbox extends InputElement {
  private containerElement;
  private checkElement: HTMLInputElement;
  private inputValue: boolean;
  private inputName: string;
  private xCoordinate: number;
  private yCoordinate: number;

  /**
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   *              Notifies Menu when clicked, so that Menu can update the <h1>
   * @param containerElement - The DOM element that will host the button
   * @param inputValue - Button text
   * @param inputName - The name of the input element
   * @param xCoordinate - The x coordinate of the input element
   * @param yCoordinate - The y coordinate of the input element
   */
  constructor(containerElement: HTMLElement, 
              inputValue: boolean = true, 
              inputName: string,
              xCoordinate: number = 0,
              yCoordinate: number = 0) {
    super();
    this.inputValue = inputValue;
    this.inputName = inputName;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.containerElement = containerElement;
    this.checkElement = document.createElement('input');
    this.checkElement.type = 'checkbox';
    this.checkElement.checked = this.inputValue;
    this.containerElement.appendChild(this.checkElement);
    this.checkElement.addEventListener('input', this.handleClick);
    this.checkElement.style.position = 'absolute';
    this.checkElement.style.left = `${this.xCoordinate}px`;
    this.checkElement.style.top = `${this.yCoordinate}px`;
  }

  /**
   * @description Event handler method for button click events
   *              Dispatches a custom event button-click
   */
  private handleClick = () => {
    this.inputValue = this.checkElement.checked;
  }

  /**
   * @description Getter method for the value of the input element
   * @returns The value of the input element
   */
  public getValue(): boolean {
    return this.inputValue;
  } 

  /**
   * @description Getter method for the name of the input element
   * @returns The name of the input element
   */
  public getName(): string {
    return this.inputName;
  }

  /**
   * @description Sets the value of the input element
   * @param value - The value to set
   */
  public setValue(value: boolean): void {
    this.inputValue = value;
    this.checkElement.checked = this.inputValue;
  }

  /**
   * @description It is not necceary to draw the value of a checkbox
   * @param context - The context of the canvas
   */
  public drawValue(context: CanvasRenderingContext2D) {
    return;
  }

  /**
   * @description Draws the name of the input element
   * @param context - The context of the canvas
   */
  public drawName(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = 'black';
    context.font = '15px Open Sans';
    context.fillText(this.inputName, this.xCoordinate + 20, this.yCoordinate - 70);
    context.restore();
  }
}