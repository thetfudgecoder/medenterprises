import { UpdateMethod, updateMethodsUtils } from "@/updateMethods";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Rules say I should not alter Item class so here's new class that uses existing one
export class ItemV2 extends Item {
  updateMethod: UpdateMethod;

  constructor(name, sellIn, quality, updateMethod) {
    super(name, sellIn, quality);
    this.updateMethod = updateMethod;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  static updateQuality(shopItems = [] as Array<ItemV2>) {
    for (let j = 0; j < shopItems.length; j++) {
      const updateMethod = updateMethodsUtils[shopItems[j].updateMethod];
      updateMethod(shopItems[j]);
    }

    return shopItems;
  }
}
