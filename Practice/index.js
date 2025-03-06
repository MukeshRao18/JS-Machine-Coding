function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b=10;
a();
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // ✅ This modifies the same `x` declared above (Function-scoped)
    }
    console.log(x); // ✅ 20 (The same `x` was updated)
}
testVar();
console.log(x); // ❌ undefined (x is not accessible outside the function)


