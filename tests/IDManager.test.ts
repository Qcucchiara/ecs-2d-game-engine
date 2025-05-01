import IDManager from "../src/core/IDManager";

describe("IDManager", () => {
    let idManager: IDManager;

    beforeEach(() => {
        idManager = new IDManager();
    });

    test("should return the next ID", () => {
        expect(idManager.allocateId()).toBe(0);
        expect(idManager.allocateId()).toBe(1);
        expect(idManager.allocateId()).toBe(2);
    });

    test("should allocate an ID from available IDs", () => {

        for (let i = 0; i < 10; i++) {
            idManager.allocateId();
        }
        idManager.freeId(5);
        expect(idManager.allocateId()).toBe(5);
    });

    test("should allocate a new ID if no available IDs", () => {
        expect(idManager.allocateId()).toBe(0);
        expect(idManager.allocateId()).toBe(1);
    });
})