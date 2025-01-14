/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to represent a HTMLInputElement
 */

abstract class InputElement {

  /**
   * @description Draws the name of the input element
   * @param context - The context of the canvas
   */
  public abstract drawName(context: CanvasRenderingContext2D): void;

  /**
   * @description Gets the value of the input element
   * @returns The value of the input element
   */
  public abstract getValue(): any;

  /**
   * @description Gets the name of the input element
   * @returns The name of the input element
   */
  public abstract getName(): string;

  /**
   * @description Sets the value of the input element
   * @param value - The value to set
   */
  public abstract setValue(value: any): void;

  public abstract drawValue(context: CanvasRenderingContext2D): void;
}