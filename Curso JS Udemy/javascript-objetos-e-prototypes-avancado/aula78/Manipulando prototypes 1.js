// Toda função construtora tem um prototype
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // _proto_: Object.prototype
};

const objB = {
    chaveB: 'B'
    // _proto_: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveC);