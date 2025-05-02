import ECS from "../src/core/ECS";

describe('ECS', () => {
    let ecs: ECS;

    beforeEach(() => {
        ecs = ECS.getInstance();
    });

    test('should be a singleton', () => {
        const anotherEcs = ECS.getInstance();
        expect(ecs).toBe(anotherEcs);
    });

    test('should add systems', () => {
    });
});