describe("ECS", () => {
 test("new ECS instance should have EntityManager instance", () => {
        const ECS = new  ECS.getInstance()
        expect(entityManager).toBeInstanceOf(EntityManager)
 })
})