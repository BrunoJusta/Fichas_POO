class rectangle {
    constructor(width = 2, height = 1) {
        this.width = width
        this.height = height
        this.color = "#FFFFFF"

    }
    get width() {
        return this._width
    }
    get width(value) {
        return this._width = value
    }

    get height() {
        return this._height
    }
    get height(value) {
        return this._height = value
    }

    getArea() {
        return this._width * this._height
    }

    getPerimeter() {
        return this._width * 2 + this._height * 2
    }
}

const myRectangle = new rectangle(10, 5)
console.log(myRectangle.width)
console.log(myRectangle.height)
console.log(myRectangle.getArea())
console.log(myRectangle.getPerimeter())

const myRectangle2 = new rectangle()
console.log(myRectangle2.width)
console.log(myRectangle2.height)
console.log(myRectangle2.getArea())
console.log(myRectangle2.getPerimeter())

const rectangles = []
rectangles.push(myRectangle)
rectangles.push(myRectangle2)

console.table(rectangles)