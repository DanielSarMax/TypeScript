/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to manage the menu of the application.
 */

/// <reference path='../html-input-element/html-input-element.ts' />
/// <reference path='../input/input.ts' />
/// <reference path='../slider/slider.ts' />
/// <reference path='../check-box/check-box.ts' />

/** @description Class to hold the (array of) input element of type number */
class Menu {
  /** @private */
  private static menuInstance: Menu;
  private static buttonContainer: HTMLElement;
  private static inputElements: InputElement[];

  public static getMenuInstance(): Menu {
    if (!Menu.menuInstance) {
      Menu.menuInstance = new Menu();
    }
    return Menu.menuInstance;
  }
  
  /** 
   * @constructor 
   * @description Holds an array of Buttons which are created when the Menu is created 
   */
  private constructor() {
    Menu.buttonContainer = document.querySelector('#menu')!;
    Menu.inputElements = [
      /*new Input(Menu.buttonContainer, 7, 'horizontalLobes', 1630, 150, 1, 20),
      new Input(Menu.buttonContainer, 6, 'verticalLobes', 1630, 250, 1, 20),
      new Input(Menu.buttonContainer, 2, 'phase', 1630, 350, 1, 20, true),
      new Input(Menu.buttonContainer, 200, 'xAmplitude', 1630, 600, 1, 750),
      new Input(Menu.buttonContainer, 200, 'yAmplitude', 1630, 700, 1, 400)*/
      new Slider(Menu.buttonContainer, 7, 'horizontalLobes', 1630, 180, 1, 20),
      new Slider(Menu.buttonContainer, 6, 'verticalLobes', 1630, 280, 1, 20),
      new Slider(Menu.buttonContainer, 2, 'phase', 1630, 380, 0, 40, true),
      new Slider(Menu.buttonContainer, 200, 'xAmplitude', 1630, 630, 1, 750),
      new Slider(Menu.buttonContainer, 200, 'yAmplitude', 1630, 730, 1, 400),
      new Checkbox(Menu.buttonContainer, true, 'Animation', 1630, 450)
    ];
    /*Menu.sliderElements = [
      new Slider(Menu.buttonContainer, 7, 'horizontalLobes', 1630, 180, 1, 20),
      new Slider(Menu.buttonContainer, 6, 'verticalLobes', 1630, 280, 1, 20),
      new Slider(Menu.buttonContainer, 2, 'phase', 1630, 380, 0, 40, true),
      new Slider(Menu.buttonContainer, 200, 'xAmplitude', 1630, 630, 1, 750),
      new Slider(Menu.buttonContainer, 200, 'yAmplitude', 1630, 730, 1, 400)
    ];
    Menu.checkboxElements = [
      new Checkbox(Menu.buttonContainer, true, 'Animation', 1630, 450)
    ];*/
  }

  /**
   * @method getInputValue
   * @description Getter method for the value of the input element
   * @param inputName - The name of the input element
   * @returns The value of the input element
   */
  public getInputValue(inputName: string): number {
    for (let i = 0; i < Menu.inputElements.length; i++) {
      if (Menu.inputElements[i].getName() === inputName) {
        return Menu.inputElements[i].getValue();
      }
    }
    return 0;
  }

  /**
   * @method drawMenuRectangle
   * @description Draws a rectangle in the menu
   */
  public drawMenuRectangle(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = 'WhiteSmoke';
    context.beginPath();
    context.rect(1500, 1, 399, 799);
    context.fill();
    context.restore();
    context.closePath();
  }

  /**
   * @method drawInputNames
   * @description Draws the name of the input elements
   * @param context - The context of the canvas
   */
  public drawInputNames(context: CanvasRenderingContext2D) {
    for (let i = 0; i < Menu.inputElements.length; i++) {
      Menu.inputElements[i].drawName(context);
    }
  }

  /**
   * @method drawInputValues
   * @description Draws the value of the input elements
   * @param context - The context of the canvas
   */
  public drawInputValues(context: CanvasRenderingContext2D) {
    for (let i = 0; i < Menu.inputElements.length; i++) {
      Menu.inputElements[i].drawValue(context);
    }
  }

  /**
   * @method draw
   * @description Draws the elements of the menu
   * @param context - The context of the canvas
   */
  public draw(context: CanvasRenderingContext2D) {
    this.drawMenuRectangle(context);
    this.drawInputNames(context);
    this.drawInputValues(context);
  }

  /**
   * @method setValue
   * @description Sets the value of the input element
   * @param inputName - The name of the input element
   * @param value - The value to set
   */
  public setValue(inputName: string, value: number) {
    for (let i = 0; i < Menu.inputElements.length; i++) {
      if (Menu.inputElements[i].getName() === inputName) {
        Menu.inputElements[i].setValue(value);
      }
    }
  }
}