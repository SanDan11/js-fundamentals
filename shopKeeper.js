const shopList = [
    { item: "health potion", price: 50, weight: 0.5 },
    { item: "mana potion", price: 75, weight: 0.3 },
    { item: "short sword", price: 250, weight: 5.5 },
    { item: "bow", price: 350, weight: 3.5 },
];

// const sFilter = shopList.filter(items => items.price < 100).map(items => items.item);
// console.log(sFilter);

// const totalCost = shopList.reduce((total, items) => total + items.price, 0);
// console.log(`Total shop cost: ${totalCost}`);

// const redWeight = shopList.reduce((total, items) => total + items.weight, 0);
// console.log(redWeight);

// // deconstructing
// const keep = shopList.map(({ item, price }) => ({ [item]: price}));
// console.log(keep)


// const { item, price } = shopList[0];
// console.log(item, price);



// function readShopList(items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }

// function displayItem( {item, price} ) {
//     console.log(`${item} cost ${price} gold`);
// }

// readShopList(shopList);
// displayItem(shopList[1]);