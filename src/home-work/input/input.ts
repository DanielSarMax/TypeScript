/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to represent a input HTMLElement
 */

/// <reference path='../html-input-element/html-input-element.ts' />

/**
 * @description Class for the buttons objects to be placed in the page
 */
class Input extends InputElement {
  private containerElement;
  private inputElement: HTMLInputElement;
  private inputValue: number;
  private inputName: string;
  private xCoordinate: number;
  private yCoordinate: number;
  private minVal: number;
  private maxVal: number;
  private decimals: boolean;

  /**
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   *              Notifies Menu when clicked, so that Menu can update the <h1>
   * @param containerElement - The DOM element that will host the button
   * @param inputValue - Button text
   * @param inputName - The name of the input element
   * @param xCoordinate - The x coordinate of the input element
   * @param yCoordinate - The y coordinate of the input element
   * @param minVal - The min value of the input element
   * @param maxVal - The max value of the input element
   * @param decimals - If the input element has decimals
   */
  constructor(containerElement: HTMLElement, 
              inputValue: number = 0, 
              inputName: string,
              xCoordinate: number = 0,
              yCoordinate: number = 0,
              minVal: number = 0,
              maxVal: number = 100,
              decimals: boolean = false) {
    super();
    this.inputValue = inputValue;
    this.inputName = inputName;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.minVal = minVal;
    this.maxVal = maxVal;
    this.decimals = decimals;
    this.containerElement = containerElement;
    this.inputElement = document.createElement('input');
    if (this.decimals) {
      this.inputElement.type = 'number';
      this.inputElement.step = '0.1';
    } else {
      this.inputElement.type = 'number';
    }
    this.inputElement.min = `${this.minVal}`;
    this.inputElement.max = `${this.maxVal}`;
    this.containerElement.appendChild(this.inputElement);
    this.inputElement.addEventListener('input', this.handleClick);
    this.inputElement.style.position = 'absolute';
    this.inputElement.style.left = `${this.xCoordinate}px`;
    this.inputElement.style.top = `${this.yCoordinate}px`;
  }

  /**
   * @description Event handler method for button click events
   *              Dispatches a custom event button-click
   */
  private handleClick = () => {
    this.inputValue = Number(this.inputElement.value);
  }

  /**
   * @description Getter method for the value of the input element
   * @returns The value of the input element
   */
  public getValue(): number {
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
   * Getter method for the x coordinate of the input element
   * @returns The x coordinate of the input element
   */
  public getXCoordinate(): number {
    return this.xCoordinate;
  }

  /**
   * Getter method for the y coordinate of the input element
   * @returns The y coordinate of the input element
   */
  public getYCoordinate(): number {
    return this.yCoordinate;
  }

  /**
   * Getter method for the input element
   * @returns The min value of the input element
   */
  public getMinVal(): number {
    return this.minVal;
  }

  /**
   * Getter method for the input element
   * @returns The max value of the input element
   */
  public getMaxVal(): number {
    return this.maxVal;
  }

  /**
   * Setter method for the value of the input element
   * @param value - The value of the input element
   */
  public setValue(value: number) {
    this.inputValue = value;
  }

  /**
   * Setter method for the max value of the input element
   * @param maxVal - The max value of the input element
   */
  public setMaxVal(maxVal: number) {
    this.maxVal = maxVal;
  }

  /**
   * Setter method for the min value of the input element
   * @param minVal - The min value of the input element
   */
  public setMinVal(minVal: number) {
    this.minVal = minVal;
  }

  /**
   * Not neccesary fot input elements
   * @param context The context of the canvas
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
    context.fillText(this.inputName, this.xCoordinate, this.yCoordinate - 90);
    context.restore();
  }
}