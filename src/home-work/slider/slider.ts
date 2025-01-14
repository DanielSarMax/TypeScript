/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to represent a slider
 */

/// <reference path='../html-input-element/html-input-element.ts' />

/**
 * @description Class for the buttons objects to be placed in the page
 */
class Slider extends InputElement{
  private containerElement;
  private sliderElement: HTMLInputElement;
  private sliderValue: number;
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
   * @param inputValue 
   * @param inputName - The name of the input element
   * @param xCoordinate - The x coordinate of the input element
   * @param yCoordinate - The y coordinate of the input element
   * @param minVal - The min value of the input element
   * @param maxVal - The max value of the input element
   * @param decimals - If the input element has decimals
   */
  constructor(containerElement: HTMLElement, 
              inputValue: number, 
              inputName: string,
              xCoordinate: number = 0,
              yCoordinate: number = 0,
              minVal: number = 0,
              maxVal: number = 100,
              decimals: boolean = false) {
    super();
    this.sliderValue = inputValue;
    this.inputName = inputName;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.minVal = minVal;
    this.maxVal = maxVal;
    this.decimals = decimals;
    this.containerElement = containerElement;
    this.sliderElement = document.createElement('input');
    if (this.decimals) {
      this.sliderElement.step = '0.1';
    }
    this.sliderElement.type = 'range';
    this.sliderElement.min = `${this.minVal}`;
    this.sliderElement.max = `${this.maxVal}`;
    this.containerElement.appendChild(this.sliderElement);
    this.sliderElement.addEventListener('input', this.handleSlide);
    this.sliderElement.style.position = 'absolute';
    this.sliderElement.style.left = `${this.xCoordinate}px`;
    this.sliderElement.style.top = `${this.yCoordinate}px`;
  }

  /**
   * @description Event handler method for button click events
   *              Dispatches a custom event button-click
   */
  private handleSlide = () => {
    this.sliderValue = Number(this.sliderElement.value);
  }

  /**
   * @description Getter method for the value of the input element
   * @returns The value of the input element
   */
  public getValue(): number {
    return this.sliderValue;
  }

  /**
   * @description Setter method for the value of the input element
   * @param value - The value to set the input element to
   */
  public setValue(value: number) {
    this.sliderValue = value;
    this.sliderElement.value = value.toString();
  }

  /**
   * @description Getter method for the name of the input element
   * @returns The name of the input element
   */
  public getName(): string {
    return this.inputName;
  }

  /**
   * @description Draws the value of the input element
   * @param context - The context of the canvas
   */
  public drawValue(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = 'black';
    context.font = '15px Open Sans';
    let adaptedValue = this.sliderValue.toString();
    if (this.inputName === 'phase') {
      adaptedValue = (this.sliderValue * 2 / 40).toFixed(1).toString();
    }

    context.fillText(adaptedValue, this.xCoordinate + 150, this.yCoordinate - 70);
    context.restore();
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