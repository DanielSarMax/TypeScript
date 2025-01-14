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
/** @description Class to hold the (array of) input element of type number */
var Menu = /** @class */ (function () {
    /**
     * @constructor
     * @description Holds an array of Buttons which are created when the Menu is created
     */
    function Menu() {
        this.buttonContainer = document.querySelector('#menu');
        this.statusBar = document.querySelector('#status-bar');
        this.inputElements = [
            new Input(this.buttonContainer, 0, 'A', 100, 100),
            new Input(this.buttonContainer, 0, 'B', 100, 200),
            new Input(this.buttonContainer, 0, 'C', 100, 300),
            new Input(this.buttonContainer, 0, 'D', 100, 400),
        ];
    }
    /**
     * @method getInputValue
     * @description Getter method for the value of the input element
     * @param inputName - The name of the input element
     * @returns The value of the input element
     */
    Menu.prototype.getInputValue = function (inputName) {
        for (var i = 0; i < this.inputElements.length; i++) {
            if (this.inputElements[i].getName() === inputName) {
                return this.inputElements[i].getValue();
            }
        }
        return 0;
    };
    return Menu;
}());
/**
 * @description Class for the buttons objects to be placed in the page
 */
var Input = /** @class */ (function () {
    /**
     * @description Sets up a button object placing it in the page (DOM)
     *              It set up an event listener for the click event on the button
     *              Notifies Menu when clicked, so that Menu can update the <h1>
     * @param containerElement - The DOM element that will host the button
     * @param text - Button text
     */
    function Input(containerElement, inputValue, inputName, xCoordinate, yCoordinate) {
        if (xCoordinate === void 0) { xCoordinate = 0; }
        if (yCoordinate === void 0) { yCoordinate = 0; }
        var _this = this;
        /**
         * @description Event handler method for button click events
         *              Dispatches a custom event button-click
         */
        this.handleClick = function () {
            _this.inputValue = Number(_this.inputElement.value);
            console.log(_this.inputValue);
            document.dispatchEvent(new Event('button-click'));
        };
        this.inputValue = inputValue;
        this.inputName = inputName;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.containerElement = containerElement;
        this.inputElement = document.createElement('input');
        this.inputElement.type = 'number';
        this.containerElement.appendChild(this.inputElement);
        this.inputElement.addEventListener('input', this.handleClick);
        this.inputElement.style.position = 'absolute';
        this.inputElement.style.left = "".concat(this.xCoordinate, "px");
        this.inputElement.style.top = "".concat(this.yCoordinate, "px");
    }
    /**
     * @description Getter method for the value of the input element
     * @returns The value of the input element
     */
    Input.prototype.getValue = function () {
        return this.inputValue;
    };
    /**
     * @description Getter method for the name of the input element
     * @returns The name of the input element
     */
    Input.prototype.getName = function () {
        return this.inputName;
    };
    return Input;
}());
var menu = new Menu();
