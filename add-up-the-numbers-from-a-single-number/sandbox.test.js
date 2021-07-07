"use strict";

// Gabriel
function addUpGabriel(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
addUpGabriel(3)

// 범두
function addUpAsian(num) {
  var a = 0;
  for (var i = num; i > 0; i--) {
    a += i;
  }
  return a;
}
// doodledob
function addUpDoodledob(num) {
  let x = 0;
  while (num >= 0) {
    x += num;
    num--;
  }
  return x;
}
// _sir
function addUpSir(num) {
  return (num * (num + 1)) / 2;
}

// la-mia
function  addUpWalter() {
  return (num) * (num) +
}

for (const solution of [addUpAsian, addUpDoodledob, addUpGabriel, addUpSir]) {
  describe(solution.name + "", () => {
    it("1", () => {
      expect(solution(1)).toEqual(1);
    });
    it("2", () => {
      expect(solution(2)).toEqual(3);
    });
    it("3", () => {
      expect(solution(3)).toEqual(6);
    });
    it("4", () => {
      expect(solution(4)).toEqual(10);
    });
    it("5", () => {
      expect(solution(5)).toEqual(15);
    });
  });
}
