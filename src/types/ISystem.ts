import {IComponent} from "./IComponent.ts";

export interface ISystem {
    indexedEntities: Array<number>;

    /**
     * Called when the system is added to the ECS.
     * @param entityComponents The components of the entity that was added.
     * test if the entity has the components that the system needs
     * thanks to Christoper for the idea about the indexation of the entities into the systems
     */
    onAdded(entityComponents: IComponent[]): void;

    /**
     * Called when the system is removed from the ECS.
     */

    onRemoved(entityId: number): void;

    /**
     * Called every frame to update the system.
     * @param deltaTime The time since the last frame.
     */
    update(deltaTime: number): void;
}