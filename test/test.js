describe("score transfer grade",function () {
    it('should return A when score is 95',function(){
        expect(grade(95)).toEqual("A");
    });
    it('should return B when score is 84',function(){
        expect(grade(84)).toEqual("B");
    });
    it('should return C when score is 66',function(){
        expect(grade(66)).toEqual("C");
    });
    it('should return D when score is 5',function(){
        expect(grade(5)).toEqual("D");
    });
});