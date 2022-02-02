import {GildedRose, ItemV2} from '@/gilded-rose';
import {UpdateMethod} from "@/updateMethods";

describe('Gilded Rose', () => {
  it('test regular item', () => {
    const items = GildedRose.updateQuality([new ItemV2('foo', 2, 2, UpdateMethod.Regular)]);
    expect(items[0].name).toBe('foo');
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
  });

  it('test regular item quality 0', () => {
    const items = GildedRose.updateQuality([new ItemV2('foo', 2, 0, UpdateMethod.Regular)]);
    expect(items[0].name).toBe('foo');
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(1);
  });

  it('test brie item', () => {
    const items = GildedRose.updateQuality([new ItemV2('brie', 2, 2, UpdateMethod.Brie)]);
    expect(items[0].name).toBe('brie');
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(1);
  });

  it('test regular item quality 50', () => {
    const items = GildedRose.updateQuality([new ItemV2('brie', 2, 50, UpdateMethod.Brie)]);
    expect(items[0].name).toBe('brie');
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(1);
  });

});
