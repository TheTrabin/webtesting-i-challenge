const enhancer = require('./enhancer.js');
const weapons = require('./weapons.js');
// test away!

  describe("enhancer module", () => {
    describe("repair function", () => {
      it("can return a new item with 100 durability", () => {
        const expectedDurability = 100;
        const actualOutput = enhancer.repair(weapons.item1);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
    });
    describe("fail function", () => {
      it("can return a new item with -5 durability if enhancement is < 15", () => {
        const expectedDurability = 45;
        const actualOutput = enhancer.fail(weapons.item2);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
      it("can return a new item with -10 durability if enhancement is >= 15", () => {
        const expectedDurability = 60;
        const actualOutput = enhancer.fail(weapons.item3);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
      it("can return a new item with -1 enhancement if enhancement is >= 16", () => {
        const expectedEnhancement = 19;
        const actualOutput = enhancer.fail(weapons.item4);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
    });
    describe("succeed function", () => {
      it("can return a new item with + 1 enhancement", () => {
        const expectedEnhancement = 8;
        const actualOutput = enhancer.success(weapons.item5);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
      it("can return a new item with unchanged enhancement if already 20", () => {
        const expectedEnhancement = 20;
        const actualOutput = enhancer.success(weapons.item6);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
    });
    describe("get function", () => {
      it("returns an unchanged name if enhancement is 0", () => {
        const expectedName = "Tsumugari No Tachi";
        const actualOutput = enhancer.get(weapons.item7);
        expect(actualOutput.name).toBe(expectedName);
      });
      it("returns a changed name if enhancement is > 0", () => {
        const expectedName = "[+5] Caladbolge";
        const actualOutput = enhancer.get(weapons.item8);
        expect(actualOutput.name).toBe(expectedName);
      });
    });
  });