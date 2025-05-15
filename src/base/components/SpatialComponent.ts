import {IComponent} from "../../types/IComponent.ts";
import Vector2 from "../utils/Vector2.ts";

class SpatialComponent implements IComponent {
    public position: Vector2
    public velocity: Vector2

    constructor(position: { x: number, y: number }, velocity: { x: number, y: number }) {
        this.position = new Vector2(position.x, position.y);
        this.velocity = new Vector2(velocity.x, velocity.y);
    }
}

export default SpatialComponent;