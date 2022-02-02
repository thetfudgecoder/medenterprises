import { ItemV2 } from "@/gilded-rose";

const update = (item: ItemV2, denominator = 1) => {
  const newQuality = item.quality - (item.sellIn < 0 ? 2 : 1) * denominator;
  item.quality = newQuality;
  if (newQuality < 0) {
    item.quality = 0;
  }

  if (newQuality > 50) {
    item.quality = 50;
  }

  item.sellIn = item.sellIn - 1;
};

export const updateRegular = (item: ItemV2) => {
  update(item);
};

export const updateBrie = (item: ItemV2) => {
  update(item, -1);
};

export const updateConjured = (item: ItemV2) => {
  update(item, 2);
};

export const updateSulfuras = (item: ItemV2) => {
  item.sellIn = item.sellIn - 1;
};

export const updateBackstage = (item: ItemV2) => {
  const newSellIn = item.sellIn - 1;
  let qualityValuation = 1;

  if (newSellIn <= 10 && newSellIn > 5) {
    qualityValuation = 2;
  }

  if (newSellIn <= 5) {
    qualityValuation = 3;
  }

  if (newSellIn < 0) {
    qualityValuation = -item.quality;
  }

  item.quality = item.quality + qualityValuation;
  item.sellIn = newSellIn;
};

export enum UpdateMethod {
  Regular,
  Brie,
  Conjured,
  Sulfuras,
  Backstage,
}

export const updateMethodsUtils = {
  [UpdateMethod.Regular]: updateRegular,
  [UpdateMethod.Brie]: updateBrie,
  [UpdateMethod.Conjured]: updateConjured,
  [UpdateMethod.Sulfuras]: updateSulfuras,
  [UpdateMethod.Backstage]: updateBackstage,
};
