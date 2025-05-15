class Vector2 {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public add(v: Vector2): Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    public subtract(v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    public multiply(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    public divide(scalar: number): Vector2 {
        if (scalar === 0) {
            throw new Error("Cannot divide by zero");
        }
        return new Vector2(this.x / scalar, this.y / scalar);
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize(): Vector2 {
        const len = this.length();
        if (len === 0) {
            return new Vector2(0, 0);
        }
        return new Vector2(this.x / len, this.y / len);
    }

    public dot(v: Vector2): number {
        return this.x * v.x + this.y * v.y;
    }
}

export default Vector2;