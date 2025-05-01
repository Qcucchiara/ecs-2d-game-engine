import AbstractEntityManager from "./abstract/EntityManager.ts";
import AbstractSystem from "./abstract/System.ts";

/**
 * ECS (Entity-Component-System) class that manages the entity manager and systems.
 * This is a singleton class that provides a global access point to the ECS instance.
 */
class ECS {
    private static instance: ECS | null = null
    public entityManager: AbstractEntityManager | null = null
    private systems: Set<AbstractSystem>

    private constructor() {
        this.systems = new Set<AbstractSystem>()
    }

    public static getInstance(): ECS {
        if (!ECS.instance) {
            ECS.instance = new ECS()
        }
        return ECS.instance
    }

    public setEntityManager(entityManager: AbstractEntityManager): void {
        this.entityManager = entityManager
    }

    public addSystem(system: AbstractSystem): void {
        if (this.systems) {
            this.systems.add(system)
        }
    }

    public getEntityManager(): AbstractEntityManager {
        if (!this.entityManager) {
            throw new Error("Entity manager is not set.")
        }
        return this.entityManager
    }


}

export default ECS