class IDManager {
    private currentID: number;
    private availableIds: number[]

    constructor() {
        this.currentID = 0;
        this.availableIds = [];
    }

    private getNextID(): number {
        return this.currentID++;
    }

    public allocateId(): number {
        if (this.availableIds.length > 0) {
            return this.availableIds.shift() ?? this.getNextID()
        }
        return this.getNextID()
    }
    public freeId(id: number): void {
        this.availableIds.push(id);
    }
}

export default IDManager;