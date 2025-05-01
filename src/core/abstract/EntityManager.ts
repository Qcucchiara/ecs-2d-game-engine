abstract class EntityManager {
    protected entities: any[] = [];

    public abstract addEntity(): void

    public abstract removeEntity(entity: any): void;

    public abstract getEntities(): any[];

    public abstract update(dt: number): void;

    public abstract clear(): void;

    public abstract getEntityById(id: string): any | null;

    public abstract getEntitiesByComponent(component: string): any[];

    public abstract getEntitiesByGroup(group: string): any[];

    public abstract getEntityCount(): number;

    public abstract getComponentCount(): number;

    public abstract getGroupCount(): number;

    public abstract getEntityByName(name: string): any | null;
}

export default EntityManager;