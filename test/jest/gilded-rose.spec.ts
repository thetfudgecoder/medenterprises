import { GildedRose, ItemV2 } from "@/gilded-rose";
import { UpdateMethod } from "@/updateMethods";

describe("Gilded Rose", () => {
  it("test regular item", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("foo", 2, 2, UpdateMethod.Regular),
    ]);
    expect(items[0].name).toBe("foo");
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
  });

  it("test regular item (quality 0)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("foo", 2, 0, UpdateMethod.Regular),
    ]);
    expect(items[0].name).toBe("foo");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(1);
  });

  it("test regular item (sell in date passed)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("foo", -1, 2, UpdateMethod.Regular),
    ]);
    expect(items[0].name).toBe("foo");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);
  });

  it("test brie item", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("brie", 2, 2, UpdateMethod.Brie),
    ]);
    expect(items[0].name).toBe("brie");
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(1);
  });

  it("test regular item (quality 50)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("brie", 2, 50, UpdateMethod.Brie),
    ]);
    expect(items[0].name).toBe("brie");
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(1);
  });

  it("test Sulfuras item", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("sulfuras", 2, 80, UpdateMethod.Sulfuras),
    ]);
    expect(items[0].name).toBe("sulfuras");
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(1);
  });

  it("test Backstage item", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Backstage", 12, 2, UpdateMethod.Backstage),
    ]);
    expect(items[0].name).toBe("Backstage");
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(11);
  });

  it("test Backstage item (under 10 days)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Backstage", 10, 2, UpdateMethod.Backstage),
    ]);
    expect(items[0].name).toBe("Backstage");
    expect(items[0].quality).toBe(4);
    expect(items[0].sellIn).toBe(9);
  });

  it("test Backstage item (under 5 days)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Backstage", 5, 2, UpdateMethod.Backstage),
    ]);
    expect(items[0].name).toBe("Backstage");
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(4);
  });

  it("test Backstage item (past concert)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Backstage", 0, 2, UpdateMethod.Backstage),
    ]);
    expect(items[0].name).toBe("Backstage");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });

  it("test Conjured item", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Conjured", 2, 5, UpdateMethod.Conjured),
    ]);
    expect(items[0].name).toBe("Conjured");
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(1);
  });

  it("test Conjured item (under minimum value)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Conjured", 2, 1, UpdateMethod.Conjured),
    ]);
    expect(items[0].name).toBe("Conjured");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(1);
  });

  it("test Conjured item (sell in under 0)", () => {
    const items = GildedRose.updateQuality([
      new ItemV2("Conjured", -1, 4, UpdateMethod.Conjured),
    ]);
    expect(items[0].name).toBe("Conjured");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);
  });
});
