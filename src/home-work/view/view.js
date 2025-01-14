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
 * @since Mar 19 2024
 * @description Class to illustrate the axis of a graph
 */
/** @classdesc A class to represent the axis of the graph */
var Axis = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     */
    function Axis(scale, strokeColor, strokeWidth) {
        if (strokeColor === void 0) { strokeColor = 'black'; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        this.strokeColor = 'black';
        this.strokeWidth = 2;
        this.scale = 10;
        this.setScale(scale);
        this.setStrokeColor(strokeColor);
        this.setStrokeWidth(strokeWidth);
    }
    /**
     * Set the stroke color of the graphic representation.
     * @param strokeColor The stroke color
     */
    Axis.prototype.setStrokeColor = function (strokeColor) {
        this.strokeColor = strokeColor;
    };
    /**
     * Set the stroke width of the graphic representation.
     * @param strokeWidth The stroke width
     */
    Axis.prototype.setStrokeWidth = function (strokeWidth) {
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
    Axis.prototype.setScale = function (scale) {
        if (scale > 0) {
            this.scale = scale;
        }
        else {
            console.log('The scale has to be a positive number');
        }
    };
    /**
     * Get the scale of the graphic representation.
     * @returns {number} The scale of the graphic representation.
     */
    Axis.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * Creates instances of all the objects that are going to be drawn
     * in the graphic representation.
     * @param context
     */
    Axis.prototype.drawAxis = function (context) {
        context.beginPath();
        context.moveTo(0, context.canvas.height / 2); // Start point of the X axis
        context.lineTo(context.canvas.width, context.canvas.height / 2); // End point of the X axis
        context.moveTo(context.canvas.width / 2, 0); // Start point of the Y axis
        context.lineTo(context.canvas.width / 2, context.canvas.height); // End point of the Y axis
        context.strokeStyle = this.strokeColor;
        context.lineWidth = this.strokeWidth;
        context.stroke();
        this.drawRectangles(context);
        this.drawNumbers(context);
    };
    /**
     * Draw the rectangles of the axis with the scale of the graphic representation and a
     * line to make it easier to read the numbers. The starting point is in the middle
     * @param context The context of the canvas
     */
    Axis.prototype.drawRectangles = function (context) {
        context.beginPath();
        context.strokeStyle = this.strokeColor;
        context.lineWidth = this.strokeWidth;
        var MIDDLE_WIDTH = context.canvas.width / 2;
        var MIDDLE_HEIGHT = context.canvas.height / 2;
        var LINE_HEIGHT = 10;
        for (var i = MIDDLE_WIDTH; i < context.canvas.width; i += this.scale * 2) {
            context.moveTo(i, MIDDLE_HEIGHT - LINE_HEIGHT / 2);
            context.lineTo(i, MIDDLE_HEIGHT + LINE_HEIGHT / 2);
            context.stroke();
        }
        for (var i = MIDDLE_WIDTH; i > 0; i -= this.scale * 2) {
            context.moveTo(i, MIDDLE_HEIGHT - LINE_HEIGHT / 2);
            context.lineTo(i, MIDDLE_HEIGHT + LINE_HEIGHT / 2);
            context.stroke();
        }
        for (var i = MIDDLE_HEIGHT; i < context.canvas.height; i += this.scale * 2) {
            context.moveTo(MIDDLE_WIDTH - LINE_HEIGHT / 2, i);
            context.lineTo(MIDDLE_WIDTH + LINE_HEIGHT / 2, i);
            context.stroke();
        }
        for (var i = MIDDLE_HEIGHT; i > 0; i -= this.scale * 2) {
            context.moveTo(MIDDLE_WIDTH - LINE_HEIGHT / 2, i);
            context.lineTo(MIDDLE_WIDTH + LINE_HEIGHT / 2, i);
            context.stroke();
        }
    };
    /**
     * Draw the numbers of the axis with the scale of the graphic representation. The starting
     * point is in the middle
     * @param context The context of the canvas
     */
    Axis.prototype.drawNumbers = function (context) {
        context.font = '15px Arial';
        context.fillStyle = this.strokeColor;
        var MIDDLE_WIDTH = context.canvas.width / 2;
        var MIDDLE_HEIGHT = context.canvas.height / 2;
        var SCALE = this.getScale();
        // Starting point
        context.fillText('0', MIDDLE_WIDTH - 10, MIDDLE_HEIGHT + 15);
        var axisIndex = 2;
        for (var i = MIDDLE_WIDTH + SCALE; i < context.canvas.width; i += SCALE * 2) {
            context.fillText((axisIndex).toString(), i - 10 + SCALE, MIDDLE_HEIGHT + 15);
            axisIndex += 2;
            if (axisIndex > 22) {
                break;
            }
        }
        axisIndex = 2;
        for (var i = MIDDLE_HEIGHT + SCALE; i < context.canvas.height; i += SCALE * 2) {
            context.fillText((-axisIndex).toString(), MIDDLE_WIDTH + 5, i + 5 + SCALE);
            axisIndex += 2;
            if (axisIndex > 8) {
                break;
            }
        }
        axisIndex = 2;
        for (var i = MIDDLE_WIDTH - SCALE; i > 0; i -= SCALE * 2) {
            context.fillText((-axisIndex).toString(), i - 10 - SCALE, MIDDLE_HEIGHT + 15);
            axisIndex += 2;
            if (axisIndex > 16) {
                break;
            }
        }
        axisIndex = 2;
        for (var i = MIDDLE_HEIGHT - SCALE; i > 0; i -= SCALE * 2) {
            context.fillText((axisIndex).toString(), MIDDLE_WIDTH + 5, i + 5 - SCALE);
            axisIndex += 2;
            if (axisIndex > 6) {
                break;
            }
        }
    };
    return Axis;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the axis of a graph
 */
/** @classdesc A class to represent the axis of the graph */
var Grid = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     * @param strokeColor The stroke color of the graphic representation
     * @param strokeWidth The stroke width of the graphic representation
     */
    function Grid(scale, strokeColor, strokeWidth) {
        if (strokeColor === void 0) { strokeColor = 'grey'; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        this.strokeColor = 'grey';
        this.strokeWidth = 1;
        this.scale = 10;
        this.setScale(scale);
        this.setStrokeColor(strokeColor);
        this.setStrokeWidth(strokeWidth);
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
    Grid.prototype.drawGrid = function (context) {
        context.strokeStyle = this.strokeColor;
        context.lineWidth = this.strokeWidth;
        var CANVAS_WIDTH = context.canvas.width;
        var CANVAS_HEIGHT = context.canvas.height;
        var SCALE = this.scale;
        context.save();
        for (var i = CANVAS_WIDTH / 2; i < CANVAS_WIDTH; i += SCALE) {
            context.setLineDash([10, 4]);
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, CANVAS_HEIGHT);
            context.stroke();
        }
        for (var i = CANVAS_WIDTH / 2; i > 0; i -= SCALE) {
            context.setLineDash([10, 4]);
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, CANVAS_HEIGHT);
            context.stroke();
        }
        for (var i = CANVAS_HEIGHT / 2; i < CANVAS_HEIGHT; i += SCALE) {
            context.setLineDash([10, 4]);
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(CANVAS_WIDTH, i);
            context.stroke();
        }
        for (var i = CANVAS_HEIGHT / 2; i > 0; i -= SCALE) {
            context.setLineDash([10, 4]);
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
 * @since Mar 19 2024
 * @description Class to illustrate multiple figures
 *              It uses graphic capabilities using canvas
 *              [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 * @see {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */
/// <reference path='../axis/axis.ts'/>
/// <reference path='../grid/grid.ts'/>
/** @classdesc A class to represent a graph */
var Graph = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     */
    function Graph(scale) {
        this.scale = 10;
        this.setScale(scale);
    }
    /**
     * Set the scale of the graphic representation.
     * @param scale It has to be a positive number.
     */
    Graph.prototype.setScale = function (scale) {
        if (scale > 0) {
            this.scale = scale;
        }
        else {
            console.log('The scale has to be a positive number');
        }
    };
    /**
     * Get the scale of the graphic representation.
     * @returns {number} The scale of the graphic representation.
     */
    Graph.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * Creates instances of all the objects that are going to be drawn
     * in the graphic representation.
     * @param context
     */
    Graph.prototype.drawGraph = function (context) {
        var axis = new Axis(this.scale);
        axis.drawAxis(context);
        var grid = new Grid(this.scale);
        grid.drawGrid(context);
    };
    return Graph;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Interface to represent a function
 */
var MathFunction = /** @class */ (function () {
    function MathFunction() {
    }
    /**
     * Draw the function in a canvas
     * @param context The context of the canvas
     * @param scale The scale of the graphic representation
     */
    MathFunction.prototype.draw = function (context, scale) {
        var STROKE_STYLE = 'black';
        var LINE_WIDTH = 1;
        context.strokeStyle = STROKE_STYLE;
        context.lineWidth = LINE_WIDTH;
        var MIDDLE_HEIGHT = context.canvas.height / 2;
        var MIDDLE_WIDTH = context.canvas.width / 2;
        context.beginPath();
        for (var i = 0; i < context.canvas.width; i++) {
            var POINT_TO_EVALUATE = (i - MIDDLE_WIDTH) / scale;
            var FUNCTION_RESULT = this.evaluate(POINT_TO_EVALUATE);
            var Y_POSITION = MIDDLE_HEIGHT - FUNCTION_RESULT * scale;
            context.lineTo(i, Y_POSITION);
        }
        context.stroke();
    };
    return MathFunction;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the sen function
 */
/// <reference path='../function/function.ts'/>
/** @classdesc A class to represent the sen function */
var Sin = /** @class */ (function (_super) {
    __extends(Sin, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param amplitude The amplitude of the sen function
     * @param frequency The frequency of the sen function
     * @param phase The phase of the sen function
     */
    function Sin(amplitude, frequency, phase) {
        if (amplitude === void 0) { amplitude = 1; }
        if (frequency === void 0) { frequency = 1; }
        if (phase === void 0) { phase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitude = 1;
        _this.frequency = 5;
        _this.phase = 0;
        _this.setAmplitude(amplitude);
        _this.setFrequency(frequency);
        _this.setPhase(phase);
        return _this;
    }
    /**
     * Set the amplitude of the sen function.
     * @param amplitude The amplitude of the sen function
     */
    Sin.prototype.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
    };
    /**
     * Set the frequency of the sen function.
     * @param frequency The frequency of the sen function
     */
    Sin.prototype.setFrequency = function (frequency) {
        this.frequency = frequency;
    };
    /**
     * Set the phase of the sen function.
     * @param phase The phase of the sen function
     */
    Sin.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * Get the amplitude of the sen function.
     * @returns {number} The amplitude of the sen function.
     */
    Sin.prototype.getAmplitude = function () {
        return this.amplitude;
    };
    /**
     * Get the frequency of the sen function.
     * @returns {number} The frequency of the sen function.
     */
    Sin.prototype.getFrequency = function () {
        return this.frequency;
    };
    /**
     * Get the phase of the sen function.
     * @returns {number} The phase of the sen function.
     */
    Sin.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Evaluate the sen function in a given point.
     * @param pointToEvaluate The point to evaluate the sen function.
     * @returns {number} The value of the sen function in the given point.
     */
    Sin.prototype.evaluate = function (pointToEvaluate) {
        return Math.sin(pointToEvaluate);
    };
    return Sin;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the cosine function
 */
/// <reference path='../function/function.ts'/>
var Cos = /** @class */ (function (_super) {
    __extends(Cos, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param amplitude The amplitude of the cos function
     * @param frequency The frequency of the cos function
     * @param phase The phase of the cos function
     */
    function Cos(amplitude, frequency, phase) {
        if (amplitude === void 0) { amplitude = 1; }
        if (frequency === void 0) { frequency = 1; }
        if (phase === void 0) { phase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitude = 1;
        _this.frequency = 5;
        _this.phase = 0;
        _this.setAmplitude(amplitude);
        _this.setFrequency(frequency);
        _this.setPhase(phase);
        return _this;
    }
    /**
     * Set the amplitude of the sen function.
     * @param amplitude The amplitude of the sen function
     */
    Cos.prototype.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
    };
    /**
     * Set the frequency of the sen function.
     * @param frequency The frequency of the sen function
     */
    Cos.prototype.setFrequency = function (frequency) {
        this.frequency = frequency;
    };
    /**
     * Set the phase of the sen function.
     * @param phase The phase of the sen function
     */
    Cos.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * Get the amplitude of the sen function.
     * @returns {number} The amplitude of the sen function.
     */
    Cos.prototype.getAmplitude = function () {
        return this.amplitude;
    };
    /**
     * Get the frequency of the sen function.
     * @returns {number} The frequency of the sen function.
     */
    Cos.prototype.getFrequency = function () {
        return this.frequency;
    };
    /**
     * Get the phase of the sen function.
     * @returns {number} The phase of the sen function.
     */
    Cos.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Evaluate the cos function in a given point.
     * @param pointToEvaluate The point to evaluate the cos function.
     * @returns The value of the cos function in the given point.
     */
    Cos.prototype.evaluate = function (pointToEvaluate) {
        return Math.cos(pointToEvaluate);
    };
    return Cos;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the exponential function
 */
/// <reference path='../function/function.ts'/>
var Exponential = /** @class */ (function (_super) {
    __extends(Exponential, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param amplitude The amplitude of the exponential function
     * @param frequency The frequency of the exponential function
     * @param phase The phase of the exponential function
     */
    function Exponential(amplitude, frequency, phase) {
        if (amplitude === void 0) { amplitude = 1; }
        if (frequency === void 0) { frequency = 1; }
        if (phase === void 0) { phase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitude = 1;
        _this.frequency = 5;
        _this.phase = 0;
        _this.setAmplitude(amplitude);
        _this.setFrequency(frequency);
        _this.setPhase(phase);
        return _this;
    }
    /**
     * Set the amplitude of the exponential function.
     * @param amplitude The amplitude
     */
    Exponential.prototype.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
    };
    /**
     * Set the frequency of the exponential function.
     * @param frequency The frequency
     */
    Exponential.prototype.setFrequency = function (frequency) {
        this.frequency = frequency;
    };
    /**
     * Set the phase of the exponential function.
     * @param phase The phase
     */
    Exponential.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * Get the amplitude of the exponential function.
     * @returns The amplitude of the exponential function
     */
    Exponential.prototype.getAmplitude = function () {
        return this.amplitude;
    };
    /**
     * Get the frequency of the exponential function.
     * @returns The frequency of the exponential function
     */
    Exponential.prototype.getFrequency = function () {
        return this.frequency;
    };
    /**
     * Get the phase of the exponential function.
     * @returns The phase of the exponential function
     */
    Exponential.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Evaluate the exponential function in a point.
     * @param pointToEvaluate The point to evaluate
     * @returns The value of the exponential function in the point
     */
    Exponential.prototype.evaluate = function (pointToEvaluate) {
        return Math.exp(pointToEvaluate);
    };
    /**
     * Draw the exponential function.
     * @param context The context of the canvas
     * @param scale The scale of the graphic representation
     */
    Exponential.prototype.drawFunction = function (context, scale) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.moveTo(0, context.canvas.height / 2);
        for (var i = 0; i < context.canvas.width; i += scale) {
            context.lineTo(i, context.canvas.height / 2 - this.evaluate((i - context.canvas.width / 2) / scale) * scale);
        }
        context.stroke();
    };
    return Exponential;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the square root function
 */
/// <reference path='../function/function.ts'/>
/** @classdesc A class to represent the square root function*/
var SquareRoot = /** @class */ (function (_super) {
    __extends(SquareRoot, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     * @param strokeColor The stroke color of the graphic representation
     * @param strokeWidth The stroke width of the graphic representation
     */
    function SquareRoot(amplitude, frequency, phase) {
        if (amplitude === void 0) { amplitude = 1; }
        if (frequency === void 0) { frequency = 1; }
        if (phase === void 0) { phase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitude = 1;
        _this.frequency = 5;
        _this.phase = 0;
        _this.setAmplitude(amplitude);
        _this.setFrequency(frequency);
        _this.setPhase(phase);
        return _this;
    }
    /**
     * Set the amplitude of the square root function.
     * @param amplitude The amplitude
     */
    SquareRoot.prototype.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
    };
    /**
     * Set the frequency of the square root function.
     * @param frequency The frequency
     */
    SquareRoot.prototype.setFrequency = function (frequency) {
        this.frequency = frequency;
    };
    /**
     * Set the phase of the square root function.
     * @param phase The phase
     */
    SquareRoot.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * Get the amplitude of the square root function.
     * @returns {number} The amplitude
     */
    SquareRoot.prototype.getAmplitude = function () {
        return this.amplitude;
    };
    /**
     * Get the frequency of the square root function.
     * @returns {number} The frequency
     */
    SquareRoot.prototype.getFrequency = function () {
        return this.frequency;
    };
    /**
     * Get the phase of the square root function.
     * @returns {number} The phase
     */
    SquareRoot.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Evaluate the square root function
     * @param pointToEvaluate The point to evaluate
     * @returns {number} The result of the evaluation
     */
    SquareRoot.prototype.evaluate = function (pointToEvaluate) {
        return Math.sqrt(pointToEvaluate);
    };
    return SquareRoot;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the a polynomial function
 */
/// <reference path='../function/function.ts'/>
var Polynomial = /** @class */ (function (_super) {
    __extends(Polynomial, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param coefficients The coefficients of the polynomial function
     */
    function Polynomial() {
        var coefficients = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            coefficients[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.coefficients = [];
        _this.setCoefficients(coefficients);
        return _this;
    }
    /**
     * Set the coefficients of the polynomial function.
     * @param coefficients The coefficients of the polynomial function
     */
    Polynomial.prototype.setCoefficients = function (coefficients) {
        this.coefficients = coefficients;
    };
    /**
     * Get the coefficients of the polynomial function.
     * @returns The coefficients of the polynomial function
     */
    Polynomial.prototype.getCoefficients = function () {
        return this.coefficients;
    };
    /**
     * Evaluate the polynomial function in a given point.
     * @param pointToEvaluate The point to evaluate the polynomial function
     * @returns The value of the polynomial function in the given point
     */
    Polynomial.prototype.evaluate = function (pointToEvaluate) {
        var result = 0;
        for (var i = 0; i < this.coefficients.length; i++) {
            result += this.coefficients[i] * Math.pow(pointToEvaluate, i);
        }
        return result;
    };
    return Polynomial;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the sen function
 */
/// <reference path='../function/function.ts'/>
var Tangent = /** @class */ (function (_super) {
    __extends(Tangent, _super);
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param amplitude The amplitude of the sen function
     * @param frequency The frequency of the sen function
     * @param phase The phase of the sen function
     */
    function Tangent(amplitude, frequency, phase) {
        if (amplitude === void 0) { amplitude = 1; }
        if (frequency === void 0) { frequency = 1; }
        if (phase === void 0) { phase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitude = 1;
        _this.frequency = 5;
        _this.phase = 0;
        _this.setAmplitude(amplitude);
        _this.setFrequency(frequency);
        _this.setPhase(phase);
        return _this;
    }
    /**
     * Set the amplitude of the sen function.
     * @param amplitude The amplitude of the sen function
     */
    Tangent.prototype.setAmplitude = function (amplitude) {
        this.amplitude = amplitude;
    };
    /**
     * Set the frequency of the sen function.
     * @param frequency The frequency of the sen function
     */
    Tangent.prototype.setFrequency = function (frequency) {
        this.frequency = frequency;
    };
    /**
     * Set the phase of the sen function.
     * @param phase The phase of the sen function
     */
    Tangent.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    /**
     * Get the amplitude of the sen function.
     * @returns {number} The amplitude of the sen function
     */
    Tangent.prototype.getAmplitude = function () {
        return this.amplitude;
    };
    /**
     * Get the frequency of the sen function.
     * @returns {number} The frequency of the sen function
     */
    Tangent.prototype.getFrequency = function () {
        return this.frequency;
    };
    /**
     * Get the phase of the sen function.
     * @returns {number} The phase of the sen function
     */
    Tangent.prototype.getPhase = function () {
        return this.phase;
    };
    /**
     * Evaluate the sen function in a given point.
     * @param pointToEvaluate The point to evaluate the sen function
     * @returns The value of the sen function in the given point
     */
    Tangent.prototype.evaluate = function (pointToEvaluate) {
        return Math.tan(pointToEvaluate);
    };
    return Tangent;
}(MathFunction));
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to manage the view of the application.
 *              From this class, we can draw a graph with the
 *              x and y axis, and also draw a function.
 */
/// <reference path='../graph/graph.ts' />
/// <reference path='../sin/sin.ts' />
/// <reference path='../cos/cos.ts' />
/// <reference path='../exp/exp.ts' />
/// <reference path='../sqrt/sqrt.ts' />
/// <reference path='../polynomial/polynomial.ts' />
/// <reference path='../tan/tangent.ts' />
/** @classdesc A class to represent a graph */
var View = /** @class */ (function () {
    /**
     * Private constructor to avoid multiple instances of the View class.
     * @returns The instance of the class.
     */
    function View() {
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
     * Draws the graphic. It includes the x and y axis,
     * each one with marked numbers depending on the scale. It also
     * draws a grid to make it easier to read the result.
     * @param graphicScale The scale of the graphic representation
     */
    View.prototype.drawGraph = function (graphicScale) {
        var graph = new Graph(graphicScale);
        graph.drawGraph(View.context);
    };
    /**
     * Draw the graphic representation of a function. It uses the
     * canvas to draw the function.
     * @param graphicScale The scale of the graphic representation
     */
    View.prototype.drawFunction = function (graphicScale, functionsToDraw) {
        for (var i = 0; i < functionsToDraw.length; i++) {
            functionsToDraw[i].draw(View.context, graphicScale);
        }
    };
    View.canvas = document.getElementById('functions');
    View.context = View.canvas.getContext('2d');
    return View;
}());
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Client program for the View class
 *              Compile using: tsc --out view.js view-client.ts
 * @see Triple-Slash Directives {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 * @see Compiling TypeScript project composed of many files/modules to single file {@link https://stackoverflow.com/q/22336763/12791643}
 */
/// <reference path="./view.ts" />
/**
 * Main function. Creates a view object that draws a graphic
 * representation o a function. Some examples are sin(x), cos(x)
 * and exp(x).
 */
var main = function () {
    var myView1 = View.getInstance();
    myView1.drawGraph(50);
    var sinFunction = new Sin();
    var cosFunction = new Cos();
    var expFunction = new Exponential();
    var sqrtFunction = new SquareRoot();
    var polynomialFunction = new Polynomial(0, 0, 1);
    var tangentFunction = new Tangent();
    var functionsToDraw = [];
    myView1.drawFunction(50, functionsToDraw);
};
main();
