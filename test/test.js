describe("gradeFuncitong",function () {
    it("score transfer grade",function(){
        expect(grade(95)).toEqual("A");
        expect(grade(84)).toEqual("B");
        expect(grade(66)).toEqual("C");
        expect(grade(5)).toEqual("D");
    });
});