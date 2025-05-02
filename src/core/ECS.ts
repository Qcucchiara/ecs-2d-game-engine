import EntityManager from "./managers/EntityManager.ts";
import ComponentManager from "./managers/ComponentManager.ts";
import {ISystem} from "../types/ISystem.ts";

class ECS {
    private static instance: ECS | null
    public entityManager: EntityManager
    public componentManager: ComponentManager
    private systems: Set<ISystem>

    private constructor() {
        this.entityManager = new EntityManager()
        this.componentManager = ComponentManager.getInstance()
        this.systems = new Set<ISystem>()
    }

    public static getInstance(): ECS {
        if (!this.instance) {
            this.instance = new ECS()
        }
        return this.instance
    }

    public addSystem(system: ISystem): void {
        this.systems.add(system)
        // TODO: handle error
    }
}

export default ECS