import { GildedRose, ItemV2 } from '@/gilded-rose';
import { UpdateMethod } from "@/updateMethods";

const items = [
  new ItemV2("+5 Dexterity Vest", 10, 20, UpdateMethod.Regular), //
  new ItemV2("Aged Brie", 2, 0, UpdateMethod.Brie), //
  new ItemV2("Elixir of the Mongoose", 5, 7, UpdateMethod.Regular), //
  new ItemV2("Sulfuras, Hand of Ragnaros", 0, 80, UpdateMethod.Sulfuras), //
  new ItemV2("Sulfuras, Hand of Ragnaros", -1, 80, UpdateMethod.Sulfuras),
  new ItemV2("Backstage passes to a TAFKAL80ETC concert", 15, 20, UpdateMethod.Backstage),
  new ItemV2("Backstage passes to a TAFKAL80ETC concert", 10, 49, UpdateMethod.Backstage),
  new ItemV2("Backstage passes to a TAFKAL80ETC concert", 5, 49, UpdateMethod.Backstage),
  // this conjured item does not work properly yet
  new ItemV2("Conjured Mana Cake", 3, 6, UpdateMethod.Conjured)];


const days = 2;
for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  });
  console.log();
  GildedRose.updateQuality(items);
}
