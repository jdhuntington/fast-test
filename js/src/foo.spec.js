
const bar = () => "bar";
describe("Foo", () => {
    it("foos", () => {
        expect(bar()).toEqual("bar");
    })
})