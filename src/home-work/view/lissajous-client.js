var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var InputElement = /** @class */ (function () {
    function InputElement() {
    }
    return InputElement;
}());
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
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
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
    function Input(containerElement, inputValue, inputName, xCoordinate, yCoordinate, minVal, maxVal, decimals) {
        if (inputValue === void 0) { inputValue = 0; }
        if (xCoordinate === void 0) { xCoordinate = 0; }
        if (yCoordinate === void 0) { yCoordinate = 0; }
        if (minVal === void 0) { minVal = 0; }
        if (maxVal === void 0) { maxVal = 100; }
        if (decimals === void 0) { decimals = false; }
        var _this = _super.call(this) || this;
        /**
         * @description Event handler method for button click events
         *              Dispatches a custom event button-click
         */
        _this.handleClick = function () {
            _this.inputValue = Number(_this.inputElement.value);
        };
        _this.inputValue = inputValue;
        _this.inputName = inputName;
        _this.xCoordinate = xCoordinate;
        _this.yCoordinate = yCoordinate;
        _this.minVal = minVal;
        _this.maxVal = maxVal;
        _this.decimals = decimals;
        _this.containerElement = containerElement;
        _this.inputElement = document.createElement('input');
        if (_this.decimals) {
            _this.inputElement.type = 'number';
            _this.inputElement.step = '0.1';
        }
        else {
            _this.inputElement.type = 'number';
        }
        _this.inputElement.min = "".concat(_this.minVal);
        _this.inputElement.max = "".concat(_this.maxVal);
        _this.containerElement.appendChild(_this.inputElement);
        _this.inputElement.addEventListener('input', _this.handleClick);
        _this.inputElement.style.position = 'absolute';
        _this.inputElement.style.left = "".concat(_this.xCoordinate, "px");
        _this.inputElement.style.top = "".concat(_this.yCoordinate, "px");
        return _this;
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
    /**
     * Getter method for the x coordinate of the input element
     * @returns The x coordinate of the input element
     */
    Input.prototype.getXCoordinate = function () {
        return this.xCoordinate;
    };
    /**
     * Getter method for the y coordinate of the input element
     * @returns The y coordinate of the input element
     */
    Input.prototype.getYCoordinate = function () {
        return this.yCoordinate;
    };
    /**
     * Getter method for the input element
     * @returns The min value of the input element
     */
    Input.prototype.getMinVal = function () {
        return this.minVal;
    };
    /**
     * Getter method for the input element
     * @returns The max value of the input element
     */
    Input.prototype.getMaxVal = function () {
        return this.maxVal;
    };
    /**
     * Setter method for the value of the input element
     * @param value - The value of the input element
     */
    Input.prototype.setValue = function (value) {
        this.inputValue = value;
    };
    /**
     * Setter method for the max value of the input element
     * @param maxVal - The max value of the input element
     */
    Input.prototype.setMaxVal = function (maxVal) {
        this.maxVal = maxVal;
    };
    /**
     * Setter method for the min value of the input element
     * @param minVal - The min value of the input element
     */
    Input.prototype.setMinVal = function (minVal) {
        this.minVal = minVal;
    };
    /**
     * Not neccesary fot input elements
     * @param context The context of the canvas
     */
    Input.prototype.drawValue = function (context) {
        return;
    };
    /**
     * @description Draws the name of the input element
     * @param context - The context of the canvas
     */
    Input.prototype.drawName = function (context) {
        context.save();
        context.fillStyle = 'black';
        context.font = '15px Open Sans';
        context.fillText(this.inputName, this.xCoordinate, this.yCoordinate - 90);
        context.restore();
    };
    return Input;
}(InputElement));
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
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
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
    function Slider(containerElement, inputValue, inputName, xCoordinate, yCoordinate, minVal, maxVal, decimals) {
        if (xCoordinate === void 0) { xCoordinate = 0; }
        if (yCoordinate === void 0) { yCoordinate = 0; }
        if (minVal === void 0) { minVal = 0; }
        if (maxVal === void 0) { maxVal = 100; }
        if (decimals === void 0) { decimals = false; }
        var _this = _super.call(this) || this;
        /**
         * @description Event handler method for button click events
         *              Dispatches a custom event button-click
         */
        _this.handleSlide = function () {
            _this.sliderValue = Number(_this.sliderElement.value);
        };
        _this.sliderValue = inputValue;
        _this.inputName = inputName;
        _this.xCoordinate = xCoordinate;
        _this.yCoordinate = yCoordinate;
        _this.minVal = minVal;
        _this.maxVal = maxVal;
        _this.decimals = decimals;
        _this.containerElement = containerElement;
        _this.sliderElement = document.createElement('input');
        if (_this.decimals) {
            _this.sliderElement.step = '0.1';
        }
        _this.sliderElement.type = 'range';
        _this.sliderElement.min = "".concat(_this.minVal);
        _this.sliderElement.max = "".concat(_this.maxVal);
        _this.containerElement.appendChild(_this.sliderElement);
        _this.sliderElement.addEventListener('input', _this.handleSlide);
        _this.sliderElement.style.position = 'absolute';
        _this.sliderElement.style.left = "".concat(_this.xCoordinate, "px");
        _this.sliderElement.style.top = "".concat(_this.yCoordinate, "px");
        return _this;
    }
    /**
     * @description Getter method for the value of the input element
     * @returns The value of the input element
     */
    Slider.prototype.getValue = function () {
        return this.sliderValue;
    };
    /**
     * @description Setter method for the value of the input element
     * @param value - The value to set the input element to
     */
    Slider.prototype.setValue = function (value) {
        this.sliderValue = value;
        this.sliderElement.value = value.toString();
    };
    /**
     * @description Getter method for the name of the input element
     * @returns The name of the input element
     */
    Slider.prototype.getName = function () {
        return this.inputName;
    };
    /**
     * @description Draws the value of the input element
     * @param context - The context of the canvas
     */
    Slider.prototype.drawValue = function (context) {
        context.save();
        context.fillStyle = 'black';
        context.font = '15px Open Sans';
        var adaptedValue = this.sliderValue.toString();
        if (this.inputName === 'phase') {
            adaptedValue = (this.sliderValue * 2 / 40).toFixed(1).toString();
        }
        context.fillText(adaptedValue, this.xCoordinate + 150, this.yCoordinate - 70);
        context.restore();
    };
    /**
     * @description Draws the name of the input element
     * @param context - The context of the canvas
     */
    Slider.prototype.drawName = function (context) {
        context.save();
        context.fillStyle = 'black';
        context.font = '15px Open Sans';
        context.fillText(this.inputName, this.xCoordinate, this.yCoordinate - 90);
        context.restore();
    };
    return Slider;
}(InputElement));
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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
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
    function Checkbox(containerElement, inputValue, inputName, xCoordinate, yCoordinate) {
        if (inputValue === void 0) { inputValue = true; }
        if (xCoordinate === void 0) { xCoordinate = 0; }
        if (yCoordinate === void 0) { yCoordinate = 0; }
        var _this = _super.call(this) || this;
        /**
         * @description Event handler method for button click events
         *              Dispatches a custom event button-click
         */
        _this.handleClick = function () {
            _this.inputValue = _this.checkElement.checked;
        };
        _this.inputValue = inputValue;
        _this.inputName = inputName;
        _this.xCoordinate = xCoordinate;
        _this.yCoordinate = yCoordinate;
        _this.containerElement = containerElement;
        _this.checkElement = document.createElement('input');
        _this.checkElement.type = 'checkbox';
        _this.checkElement.checked = _this.inputValue;
        _this.containerElement.appendChild(_this.checkElement);
        _this.checkElement.addEventListener('input', _this.handleClick);
        _this.checkElement.style.position = 'absolute';
        _this.checkElement.style.left = "".concat(_this.xCoordinate, "px");
        _this.checkElement.style.top = "".concat(_this.yCoordinate, "px");
        return _this;
    }
    /**
     * @description Getter method for the value of the input element
     * @returns The value of the input element
     */
    Checkbox.prototype.getValue = function () {
        return this.inputValue;
    };
    /**
     * @description Getter method for the name of the input element
     * @returns The name of the input element
     */
    Checkbox.prototype.getName = function () {
        return this.inputName;
    };
    /**
     * @description Sets the value of the input element
     * @param value - The value to set
     */
    Checkbox.prototype.setValue = function (value) {
        this.inputValue = value;
        this.checkElement.checked = this.inputValue;
    };
    /**
     * @description It is not necceary to draw the value of a checkbox
     * @param context - The context of the canvas
     */
    Checkbox.prototype.drawValue = function (context) {
        return;
    };
    /**
     * @description Draws the name of the input element
     * @param context - The context of the canvas
     */
    Checkbox.prototype.drawName = function (context) {
        context.save();
        context.fillStyle = 'black';
        context.font = '15px Open Sans';
        context.fillText(this.inputName, this.xCoordinate + 20, this.yCoordinate - 70);
        context.restore();
    };
    return Checkbox;
}(InputElement));
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
var Menu = /** @class */ (function () {
    /**
     * @constructor
     * @description Holds an array of Buttons which are created when the Menu is created
     */
    function Menu() {
        Menu.buttonContainer = document.querySelector('#menu');
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
    Menu.getMenuInstance = function () {
        if (!Menu.menuInstance) {
            Menu.menuInstance = new Menu();
        }
        return Menu.menuInstance;
    };
    /**
     * @method getInputValue
     * @description Getter method for the value of the input element
     * @param inputName - The name of the input element
     * @returns The value of the input element
     */
    Menu.prototype.getInputValue = function (inputName) {
        for (var i = 0; i < Menu.inputElements.length; i++) {
            if (Menu.inputElements[i].getName() === inputName) {
                return Menu.inputElements[i].getValue();
            }
        }
        return 0;
    };
    /**
     * @method drawMenuRectangle
     * @description Draws a rectangle in the menu
     */
    Menu.prototype.drawMenuRectangle = function (context) {
        context.save();
        context.fillStyle = 'WhiteSmoke';
        context.beginPath();
        context.rect(1500, 1, 399, 799);
        context.fill();
        context.restore();
        context.closePath();
    };
    /**
     * @method drawInputNames
     * @description Draws the name of the input elements
     * @param context - The context of the canvas
     */
    Menu.prototype.drawInputNames = function (context) {
        for (var i = 0; i < Menu.inputElements.length; i++) {
            Menu.inputElements[i].drawName(context);
        }
    };
    /**
     * @method drawInputValues
     * @description Draws the value of the input elements
     * @param context - The context of the canvas
     */
    Menu.prototype.drawInputValues = function (context) {
        for (var i = 0; i < Menu.inputElements.length; i++) {
            Menu.inputElements[i].drawValue(context);
        }
    };
    /**
     * @method draw
     * @description Draws the elements of the menu
     * @param context - The context of the canvas
     */
    Menu.prototype.draw = function (context) {
        this.drawMenuRectangle(context);
        this.drawInputNames(context);
        this.drawInputValues(context);
    };
    /**
     * @method setValue
     * @description Sets the value of the input element
     * @param inputName - The name of the input element
     * @param value - The value to set
     */
    Menu.prototype.setValue = function (inputName, value) {
        for (var i = 0; i < Menu.inputElements.length; i++) {
            if (Menu.inputElements[i].getName() === inputName) {
                Menu.inputElements[i].setValue(value);
            }
        }
    };
    return Menu;
}());
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
var LissajousCurves = /** @class */ (function () {
    /**
     * Private constructor to avoid multiple instances of the LissajousCurves class.
     * @returns The instance of the class.
     */
    function LissajousCurves() {
        this.xAmplitude = 100;
        this.yAmplitude = 100;
        this.horizontallLobes = 7;
        this.verticallLobes = 6;
        this.phase = 2;
    }
    /**
     * If the instance of the class does not exist, it creates a new one.
     * Otherwise, it returns the existing instance.
     * @returns {LissajousCurves} The instance of the class.
     */
    LissajousCurves.getInstance = function () {
        if (!LissajousCurves.lissajousInstance) {
            LissajousCurves.lissajousInstance = new LissajousCurves();
        }
        return this.lissajousInstance;
    };
    /**
     * @description Sets the value of the x amplitude
     * @param xAmplitude - The value of the x amplitude
     */
    LissajousCurves.prototype.setXAmplitude = function (xAmplitude) {
        this.xAmplitude = xAmplitude;
    };
    /**
     * @description Sets the value of the y amplitude
     * @param yAmplitude - The value of the y amplitude
     */
    LissajousCurves.prototype.setYAmplitude = function (yAmplitude) {
        this.yAmplitude = yAmplitude;
    };
    /**
     * @description Sets the value of the horizontal lobes
     * @param horizontallLobes - The value of the horizontal lobes
     */
    LissajousCurves.prototype.setHorizontallLobes = function (horizontallLobes) {
        this.horizontallLobes = horizontallLobes;
    };
    /**
     * @description Sets the value of the vertical lobes
     * @param verticallLobes - The value of the vertical lobes
     */
    LissajousCurves.prototype.setVerticallLobes = function (verticallLobes) {
        this.verticallLobes = verticallLobes;
    };
    /**
     * @description Sets the value of the phase
     * @param phase - The value of the phase
     */
    LissajousCurves.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * @description Draws the Lissajous curves given the values of the inputs
     * @param context - The context of the canvas
     * @param canvas - The canvas element
     */
    LissajousCurves.prototype.draw = function (context) {
        context.strokeStyle = 'black';
        var SPEED = 20;
        var DELTA = this.phase * Math.PI / SPEED;
        var MIDDLE_WIDTH = (context.canvas.width - 400) / 2;
        var MIDDLE_HEIGHT = context.canvas.height / 2;
        context.beginPath();
        for (var i = 0; i <= Math.PI * 2; i += 0.01) {
            var xCoordinate_1 = MIDDLE_WIDTH + Math.sin(this.horizontallLobes * i + DELTA) * this.xAmplitude;
            var yCoordinate_1 = MIDDLE_HEIGHT + Math.sin(this.verticallLobes * i) * this.yAmplitude;
            context.lineTo(xCoordinate_1, yCoordinate_1);
        }
        var xCoordinate = MIDDLE_WIDTH + Math.sin(this.horizontallLobes * 0 + DELTA) * this.xAmplitude;
        var yCoordinate = MIDDLE_HEIGHT + Math.sin(this.verticallLobes * 0) * this.yAmplitude;
        context.lineTo(xCoordinate, yCoordinate);
        context.stroke();
    };
    return LissajousCurves;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Apr 9 2024
 * @description Class to illustrate the grid of a graph
 */
/** @classdesc A class to represent the grid of the graph */
var Grid = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     * @param strokeColor The stroke color of the graphic representation
     * @param strokeWidth The stroke width of the graphic representation
     */
    function Grid(scale, strokeColor, strokeWidth, width, height) {
        if (strokeColor === void 0) { strokeColor = 'grey'; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        this.strokeColor = 'grey';
        this.strokeWidth = 1;
        this.scale = 10;
        this.width = 1500;
        this.height = 800;
        this.setScale(scale);
        this.setStrokeColor(strokeColor);
        this.setStrokeWidth(strokeWidth);
        this.setWidth(width);
        this.setHeight(height);
    }
    /**
     * Set the stroke color of the graphic representation.
     * @param strokeColor The stroke color
     */
    Grid.prototype.setStrokeColor = function (strokeColor) {
        this.strokeColor = strokeColor;
    };
    /**
     * Set the stroke width of the graphic representation.
     * @param strokeWidth The stroke width
     */
    Grid.prototype.setStrokeWidth = function (strokeWidth) {
        if (strokeWidth > 0) {
            this.strokeWidth = strokeWidth;
        }
        else {
            console.log('The stroke width has to be a positive number');
        }
    };
    /**
     * Set the scale of the graphic representation.
     * @param scale It has to be a positive number.
     */
    Grid.prototype.setScale = function (scale) {
        if (scale > 0) {
            this.scale = scale;
        }
        else {
            console.log('The scale has to be a positive number');
        }
    };
    /**
     * Set the height of the graphic representation.
     * @param height The height of the graphic representation.
     */
    Grid.prototype.setHeight = function (height) {
        this.height = height;
    };
    /**
     * Set the width of the graphic representation.
     * @param width The width of the graphic representation.
     */
    Grid.prototype.setWidth = function (width) {
        this.width = width;
    };
    /**
     * Get the scale of the graphic representation.
     * @returns {number} The scale of the graphic representation.
     */
    Grid.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * Draw the grid of the graphic representation.
     * @param context The context of the canvas
     */
    Grid.prototype.draw = function (context) {
        context.strokeStyle = this.strokeColor;
        context.lineWidth = this.strokeWidth;
        var CANVAS_WIDTH = this.width;
        var CANVAS_HEIGHT = this.height;
        var SCALE = this.scale;
        context.save();
        for (var i = CANVAS_WIDTH / 2; i < CANVAS_WIDTH; i += SCALE) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, CANVAS_HEIGHT);
            context.stroke();
        }
        for (var i = CANVAS_WIDTH / 2; i > 0; i -= SCALE) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, CANVAS_HEIGHT);
            context.stroke();
        }
        for (var i = CANVAS_HEIGHT / 2; i < CANVAS_HEIGHT; i += SCALE) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(CANVAS_WIDTH, i);
            context.stroke();
        }
        for (var i = CANVAS_HEIGHT / 2; i > 0; i -= SCALE) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(CANVAS_WIDTH, i);
            context.stroke();
        }
        context.restore();
    };
    return Grid;
}());
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
var View = /** @class */ (function () {
    /**
     * Private constructor to avoid multiple instances of the View class.
     * @returns The instance of the class.
     */
    function View() {
        this.startTime = Date.now();
    }
    /**
     * If the instance of the class does not exist, it creates a new one.
     * Otherwise, it returns the existing instance.
     * @returns {View} The instance of the class.
     */
    View.getInstance = function () {
        if (!View.viewInstance) {
            View.viewInstance = new View();
        }
        return this.viewInstance;
    };
    /**
     * @description Updates the elements of the canvas.
     */
    View.prototype.update = function () {
        View.lissajous.setHorizontallLobes(View.menu.getInputValue('horizontalLobes'));
        View.menu.setValue('horizontalLobes', View.menu.getInputValue('horizontalLobes'));
        View.lissajous.setVerticallLobes(View.menu.getInputValue('verticalLobes'));
        View.menu.setValue('verticalLobes', View.menu.getInputValue('verticalLobes'));
        var showAnimation = View.menu.getInputValue('Animation');
        if (showAnimation) {
            var newPhase = ((Date.now() - this.startTime) / 1000);
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
    };
    /**
     * @description Draws the elements of the canvas.
     */
    View.prototype.draw = function () {
        View.lissajous.draw(View.context);
        var grid = new Grid(15, 'Silver', 0.5, 1500, 800);
        grid.draw(View.context);
        View.menu.draw(View.context);
    };
    View.canvas = document.getElementById('lissajous');
    View.context = View.canvas.getContext('2d');
    View.lissajous = LissajousCurves.getInstance();
    View.menu = Menu.getMenuInstance();
    return View;
}());
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
    var view = View.getInstance();
    view.update();
}
main();
