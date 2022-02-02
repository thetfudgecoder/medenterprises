import {GildedRose, ItemV2} from '@/gilded-rose';
import {UpdateMethod} from "@/updateMethods";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const items = GildedRose.updateQuality([new ItemV2('foo', 0, 0, UpdateMethod.Regular)]);
    expect(items[0].name).toBe('fixme');
  });
});
