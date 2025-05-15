import ComponentManager from "../src/core/managers/ComponentManager";

describe("ComponentManager", () => {
    let componentManager: ComponentManager;

    // TODO: add option to component for optional uniqueness on entity

    beforeEach(() => {
        componentManager = ComponentManager.getInstance();
    });

    test("should be a singleton", () => {
        const anotherComponentManager = ComponentManager.getInstance();
        expect(componentManager).toBe(anotherComponentManager);
    });

    test("should register a component", () => {
        class MockComponent {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
        }

        componentManager.registerComponent("test", MockComponent);
        expect(componentManager.getComponent("test")).toBe(MockComponent);
    });
});