/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to manage the view of the application.
 *              From this class, we can draw the Lissajous Curves given
 *              A and B that represents the amplituds in the x and y axis,
 *              C and D are constants, and the phase. C determines the number
 *              of horizontally aligned "lobes" and D determines the number of 
 *              vertically aligned lobes. For example for and you should see 3
 *              horizontal lobes and 2 vertical.
 */

/// <reference path='../menu/menu.ts' />
/// <reference path='../lissajous-curves/lissajous-curves.ts' />
/// <reference path='../grid/grid.ts' />

/** @classdesc A class to represent a graph */
class View {
  private static viewInstance: View;
  private static canvas: HTMLCanvasElement = document.getElementById('lissajous') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = View.canvas.getContext('2d')!;
  private static lissajous: LissajousCurves = LissajousCurves.getInstance();
  private static menu: Menu = Menu.getMenuInstance();
  private startTime: number;
	
  /**
   * If the instance of the class does not exist, it creates a new one.
   * Otherwise, it returns the existing instance.
   * @returns {View} The instance of the class.
   */
  public static getInstance(): View {
    if (!View.viewInstance) {
      View.viewInstance = new View();
    }
    return this.viewInstance;
  }

  /**
   * Private constructor to avoid multiple instances of the View class.
   * @returns The instance of the class.
   */
  private constructor() {
    this.startTime = Date.now();
  }

  /**
   * @description Updates the elements of the canvas.
   */
  public update() {
    View.lissajous.setHorizontallLobes(View.menu.getInputValue('horizontalLobes'));
    View.menu.setValue('horizontalLobes', View.menu.getInputValue('horizontalLobes'));
    View.lissajous.setVerticallLobes(View.menu.getInputValue('verticalLobes'));
    View.menu.setValue('verticalLobes', View.menu.getInputValue('verticalLobes'));
    let showAnimation = View.menu.getInputValue('Animation');
    if (showAnimation) {
      let newPhase = ((Date.now() - this.startTime) / 1000);
      if (newPhase > 40) {
        this.startTime = Date.now();
        newPhase = 0;
      }
      View.lissajous.setPhase(newPhase);
      View.menu.setValue('phase', newPhase);
    }
    else {
      View.lissajous.setPhase(View.menu.getInputValue('phase'));
    }
    View.lissajous.setXAmplitude(View.menu.getInputValue('xAmplitude'));
    View.menu.setValue('xAmplitude', View.menu.getInputValue('xAmplitude'));
    View.lissajous.setYAmplitude(View.menu.getInputValue('yAmplitude'));
    View.menu.setValue('yAmplitude', View.menu.getInputValue('yAmplitude'));
    View.context.clearRect(0, 0, View.canvas.width, View.canvas.height);
    this.draw();
    requestAnimationFrame(this.update.bind(this));
  }

  /**
   * @description Draws the elements of the canvas.
   */
  public draw() {
    View.lissajous.draw(View.context);
    let grid: Grid = new Grid(15, 'Silver', 0.5, 1500, 800);
    grid.draw(View.context);
    View.menu.draw(View.context);
  }
}



/*View.lissajous.setHorizontallLobes(View.menu.getInputValue('horizontalLobes'));
  View.lissajous.setVerticallLobes(View.menu.getInputValue('verticalLobes'));
  let showAnimation = View.menu.getCheckboxValue('Animation');
  if (showAnimation) {
    let newPhase = (Date.now() - this.startTime) / 1000;
    View.lissajous.setPhase(newPhase);
  }
  else {
    View.lissajous.setPhase(View.menu.getInputValue('phase'));
  }
  View.lissajous.setXAmplitude(View.menu.getInputValue('xAmplitude'));
  View.lissajous.setYAmplitude(View.menu.getInputValue('yAmplitude'));*/