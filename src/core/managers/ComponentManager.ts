class ComponentManager {
    private static instance: ComponentManager
    private registeredComponents: Map<string, Function>

    private constructor() {
        this.registeredComponents = new Map<string, Function>()
    }

    public static getInstance(): ComponentManager {
        if (!this.instance) {
            this.instance = new ComponentManager()
        }
        return this.instance
    }

    public registerComponent(componentName: string, componentClass: Function): void {
        if (this.registeredComponents.has(componentName)) {
            throw new Error(`Component ${componentName} is already registered`)
        }
        this.registeredComponents.set(componentName, componentClass)
    }

    public getComponent(componentName: string): Function | undefined {
        return this.registeredComponents.get(componentName)
    }
}

export default ComponentManager;