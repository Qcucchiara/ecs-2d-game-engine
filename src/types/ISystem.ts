export interface ISystem {
    /**
     * Called when the system is added to the ECS.
     */
    // onAdded(): void;

    /**
     * Called when the system is removed from the ECS.
     */
    // onRemoved(): void;

    /**
     * Called every frame to update the system.
     * @param deltaTime The time since the last frame.
     */
    update(deltaTime: number): void;
}