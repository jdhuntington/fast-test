import { Foo} from './foo';

describe("Foo", () => {
    it("foos", () => {
        const subject = new Foo();
        expect(subject.bar()).toEqual("bar");
    })
})