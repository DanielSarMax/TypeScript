/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class draw the Lissajous curves given
 *              A and B that represents the amplituds in the x and y axis,
 *              C and D are constants, and the phase. C determines the number
 *              of horizontally aligned "lobes" and D determines the number of 
 *              vertically aligned lobes. For example for and you should see 3
 *              horizontal lobes and 2 vertical.
 */

/// <reference path='../menu/menu.ts' />

/** @classdesc A class to represent a graph */
class LissajousCurves {
  private static lissajousInstance: LissajousCurves;
  private xAmplitude: number;
  private yAmplitude: number;
  private horizontallLobes: number;
  private verticallLobes: number;
  private phase: number;

  /**
   * If the instance of the class does not exist, it creates a new one.
   * Otherwise, it returns the existing instance.
   * @returns {LissajousCurves} The instance of the class.
   */
  public static getInstance(): LissajousCurves {
    if (!LissajousCurves.lissajousInstance) {
      LissajousCurves.lissajousInstance = new LissajousCurves();
    }
    return this.lissajousInstance;
  }

  /**
   * Private constructor to avoid multiple instances of the LissajousCurves class.
   * @returns The instance of the class.
   */
  private constructor() {
    this.xAmplitude = 100;
    this.yAmplitude = 100;
    this.horizontallLobes = 7;
    this.verticallLobes = 6;
    this.phase = 2;
  }

  /**
   * @description Sets the value of the x amplitude
   * @param xAmplitude - The value of the x amplitude
   */
  public setXAmplitude(xAmplitude: number) {
    this.xAmplitude = xAmplitude;
  }

  /**
   * @description Sets the value of the y amplitude
   * @param yAmplitude - The value of the y amplitude
   */
  public setYAmplitude(yAmplitude: number) {
    this.yAmplitude = yAmplitude;
  }

  /**
   * @description Sets the value of the horizontal lobes
   * @param horizontallLobes - The value of the horizontal lobes
   */
  public setHorizontallLobes(horizontallLobes: number) {
    this.horizontallLobes = horizontallLobes;
  }

  /**
   * @description Sets the value of the vertical lobes
   * @param verticallLobes - The value of the vertical lobes
   */
  public setVerticallLobes(verticallLobes: number) {
    this.verticallLobes = verticallLobes;
  }

  /**
   * @description Sets the value of the phase
   * @param phase - The value of the phase
   */
  public setPhase(phase: number) {
    this.phase = phase;
  }

  /**
   * @description Draws the Lissajous curves given the values of the inputs
   * @param context - The context of the canvas
   * @param canvas - The canvas element
   */
  public draw(context: CanvasRenderingContext2D) {
    context.strokeStyle = 'black';
    const SPEED: number = 20;
    const DELTA: number = this.phase * Math.PI / SPEED;
    const MIDDLE_WIDTH = (context.canvas.width - 400) / 2;
    const MIDDLE_HEIGHT = context.canvas.height / 2;
    context.beginPath();
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
      let xCoordinate = MIDDLE_WIDTH + Math.sin(this.horizontallLobes * i + DELTA) * this.xAmplitude;
      let yCoordinate = MIDDLE_HEIGHT + Math.sin(this.verticallLobes * i) * this.yAmplitude;
      context.lineTo(xCoordinate, yCoordinate);
    }
    let xCoordinate = MIDDLE_WIDTH + Math.sin(this.horizontallLobes * 0 + DELTA) * this.xAmplitude;
    let yCoordinate = MIDDLE_HEIGHT + Math.sin(this.verticallLobes * 0) * this.yAmplitude;
    context.lineTo(xCoordinate, yCoordinate);
    context.stroke();
  }
}