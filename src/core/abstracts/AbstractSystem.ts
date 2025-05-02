import {ISystem} from "../../types/ISystem.ts";

abstract class AbstractSystem implements ISystem {
    public readonly name: string;

    /**
     * The constructor for the AbstractSystem class.
     * @param {string} name - The name of the system.
     */
    protected constructor(name: string) {
        this.name = name;
    }

    /**
     * Called every frame to update the system.
     * @param {number} deltaTime - The time since the last frame.
     */
    public abstract update(deltaTime: number): void;
}

export default AbstractSystem;