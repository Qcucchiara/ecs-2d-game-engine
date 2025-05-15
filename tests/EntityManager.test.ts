import EntityManager from "../src/core/managers/EntityManager";

describe("EntityManager", () => {
    let entityManager: EntityManager;

    beforeEach(() => {
        entityManager = new EntityManager();
    });

    test("should allocate an ID for a new entity", () => {
        const id = entityManager.setEntity([]);
        expect(id).toBe(0);
    });

    test("should return the allocated ID for the next entity", () => {
        entityManager.setEntity([]); // ID 0
        const id1 = entityManager.setEntity([]); // ID 1

        expect(id1).toBe(1);
    });

    test("should return entities as a map with their ids", () => {
        const id1 = entityManager.setEntity([]);
        const id2 = entityManager.setEntity([]);

        const entities = entityManager.getEntities();
        expect(entities.size).toBe(2);
        expect(entities.get(id1)).toBeDefined();
        expect(entities.get(id2)).toBeDefined();
    });

    test("should remove an entity and free its ID", () => {

        const id = entityManager.setEntity();
        expect(entityManager.getEntityComponents(id)).toStrictEqual([]);
        const result = entityManager.removeEntity(id);
        expect(result).toBe(true);
        expect(entityManager.getEntityComponents(id)).toBeUndefined();
    });
})