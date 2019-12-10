/* eslint-disable max-len */
// There are still no types, no interfaces and no notion of visibility.

/**
 * Represents any geometric shape.
 */
class Shape {
  /**
   * Creates a new instance with the specified id and location.
   * @constructor
   *
   * @param {number} id The id of this shape.
   * @param {number} x The x coordinate of this shape.
   * @param {number} y The y coordinate of this shape.
   */
  constructor(id, x, y) {
    this._id = id;
    this._x = x;
    this._y = y;
  }

  /**
   * Moves this shape to the specified position.
   *
   * @param {number} x The new x coordinate of this shape.
   * @param {number} y The new y coordinate of this shape.
   */
  move(x, y) {
    this._x = x;
    this._y = y;
  }

  /**
   * @return {string} A string representation of this shape.
   */
  toString() {
    return `Shape(${this._id})`;
  }
}

/**
 * Represents a rectangle.
 */
class Rectangle extends Shape {
  /**
   * Creates a new instance with the specified id and location.
   * @constructor
   *
   * @param {number} id The id of this rectangle.
   * @param {number} x The x coordinate of this rectangle.
   * @param {number} y The y coordinate of this rectangle.
   * @param {number} width The width of this rectangle.
   * @param {number} height The height of this rectangle.
   */
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this._width = width;
    this._height = height;
  }

  /**
   * @return {string} A string representation of this rectangle.
   */
  toString() {
    return 'Rectangle > ' + super.toString();
  }

  /**
   * Instantiates a new default rectangle, with the id 'default', position (0,0) and size 100x100.
   *
   * @return {Rectangle} A new default rectangle.
   */
  static defaultRectangle() {
    return new Rectangle('default', 0, 0, 100, 100);
  }
}

console.log(Rectangle.defaultRectangle());
console.log(Rectangle.defaultRectangle().toString());
