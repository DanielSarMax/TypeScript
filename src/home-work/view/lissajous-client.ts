/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Client program to view the Lissajous curves.
 */

/// <reference path='../view/view.ts' />
/// <reference path='../menu/menu.ts' />
/// <reference path='../lissajous-curves/lissajous-curves.ts' />


/**
 * @brief Main function to draw the Lissajous curves.
 */
function main() {
  let view = View.getInstance();
  view.update();
}

main();