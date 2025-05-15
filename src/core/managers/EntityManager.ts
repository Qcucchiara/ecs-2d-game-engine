import IDManager from "./IDManager.ts";
import ComponentManager from "./ComponentManager.ts";
import {IComponent} from "../../types/IComponent.ts";

class EntityManager {
    private idManager: IDManager;
    private componentManager: ComponentManager;
    private entities: Map<number, Array<IComponent>>;

    constructor() {
        this.idManager = new IDManager();
        this.componentManager = ComponentManager.getInstance()
        this.entities = new Map<number, Array<IComponent>>();
    }

    public setEntity(components?: Array<IComponent>): number {
        const id = this.idManager.allocateId();
        if (!components) {
            components = [];
        }
        this.entities.set(id, components);
        // TODO: check errors
        return id;
    }

    public getEntities(): Map<number, Array<IComponent>> {
        return this.entities;
    }

    public getEntityComponents(id: number): Array<IComponent> | undefined {
        return this.entities.get(id);
    }

    public removeEntity(id: number): boolean {
        if (!this.entities.has(id)) {
            return false;
        }
        this.idManager.freeId(id);
        this.entities.delete(id);
        // destroy components
        return true;
        // TODO: check errors
    }

    public addComponentToEntity(entityId: number, component: IComponent): boolean {
        const entity = this.entities.get(entityId);
        if (!entity) {
            return false
        }
        entity.push(component);
        return true
    }

    public removeComponentFromEntity(entityId: number, component: IComponent): boolean {
        const entity = this.getEntityComponents(entityId);
        if (entity) {
            const index = entity.indexOf(component);
            if (index !== -1) {
                entity.splice(index, 1);
                return true
            }
        }
        return false
    }
}


function f(g: () => void): void {
    g();
}

function g(): void {
    console.log("Hello");
}

f(g);

export default EntityManager;