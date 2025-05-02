import IDManager from "./IDManager.ts";
import ComponentManager from "./ComponentManager.ts";
import {IComponent} from "../../types/IComponent.ts";

class EntityManager {
    private idManager: IDManager;
    // @ts-ignore
    private componentManager: ComponentManager;
    private entities: Iterable<Array<IComponent>>;

    constructor() {
        this.idManager = new IDManager();
        this.componentManager = ComponentManager.getInstance();
        this.entities = new Map<number, Array<IComponent>>();
    }

    // @ts-ignore
    public setEntity(components: Array<IComponent>): number {
        const id = this.idManager.allocateId();
        // ! this.entities.set(id, components);
        // TODO: handle set Entity into the iterable
        return id;
    }

    public getEntities(): Iterable<Array<IComponent>> {
        return this.entities;
    }

    // public getEntity(id: number): Array<IComponent> | undefined {
    //     return this.entities.get(id);
    // TODO: handle get Entity from the iterable
    // }

    public removeEntity(id: number): void {
        this.idManager.freeId(id);
        // ! this.entities.delete(id);
        // TODO: handle remove Entity from the iterable
    }

    // @ts-ignore
    public addComponentToEntity(entityId: number, component: IComponent): void {
        // ! const entity = this.getEntity(entityId);
        // if (entity) {
        //     entity.push(component);
        // }
    }

    // @ts-ignore
    public removeComponentFromEntity(entityId: number, component: IComponent): void {
        // ! const entity = this.getEntity(entityId);
        // if (entity) {
        //     const index = entity.indexOf(component);
        //     if (index !== -1) {
        //         entity.splice(index, 1);
        //     }
        // }
    }

}

export default EntityManager;