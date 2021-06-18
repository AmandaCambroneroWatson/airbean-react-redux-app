//Specialerbjudande funktioner

let discount;
let ItemsOnOffer;
let arraySpecials;
let arraySpecials2;
let sum;
let totalDiscount;

function checkForSpecialoffer(specials, Menu, history, list) {
  sum = 0;
  totalDiscount = 0;
  arraySpecials = [];
  arraySpecials2 = [];

  

  return getSpecials(specials, Menu, history, list);
  
}

function getSpecials(specials, Menu, history, list) {
  for (let i = 0; i < specials.length; i++) {
    discount = specials[i].discount;
    ItemsOnOffer = specials[i].ItemsOnOffer;
  }
  if (Menu !== 0) {
    return createArray(Menu);
  } else if (history !== 0) {
    return createArrayOrderHistory(history);
  } else {
    return createArrayOrderHistoryList(list);
  }
}

function createArray(Menu) {
  for (let i = 0; i < Menu.length; i++) {
    let quantity = Menu[i].quantity;
    let id = Menu[i].id;
    sum += quantity * Menu[i].price;
    if (quantity > 0) {
      for (let j = 0; j < quantity; j++) {
        for (let index = 0; index < ItemsOnOffer.length; index++) {
          if (ItemsOnOffer[index] === id) {
            if (index === 0) {
              arraySpecials = [...arraySpecials, id];
            } else {
              arraySpecials2 = [...arraySpecials2, id];
            }
          }
        }
      }
    }
  }

  return addDiscount();
}

function createArrayOrderHistoryList(list) {
  for (let i = 1; i < list.length; i++) {
    let id = list[i].id;
    sum += list[i].price;
    for (let index = 0; index < ItemsOnOffer.length; index++) {
      if (ItemsOnOffer[index] === id) {
        if (index === 0) {
          arraySpecials = [...arraySpecials, id];
        } else {
          arraySpecials2 = [...arraySpecials2, id];
        }
      }
    }
  }
  return addDiscount();
}

function createArrayOrderHistory(history) {
  for (let i = 0; i < history.length; i++) {
    for (let x = 1; x < history[i].length; x++) {
      let id = history[i][x].id;
      sum += history[i][x].price;
      for (let index = 0; index < ItemsOnOffer.length; index++) {
        if (ItemsOnOffer[index] === id) {
          if (index === 0) {
            arraySpecials = [...arraySpecials, id];
          } else {
            arraySpecials2 = [...arraySpecials2, id];
          }
        }
      }
    }
  }
  return addDiscount();
}

function addDiscount() {
  let loop = false;
  let Discount = false;
  while (loop === false) {
    if (arraySpecials[0] && arraySpecials2[0]) {
      totalDiscount += discount;
      arraySpecials.pop();
      arraySpecials2.pop();
    } else {
      if (totalDiscount > 0) {
        totalDiscount = sum - totalDiscount;
        Discount = true;
      }
      loop = true;
    }
  }

  return { sum: sum, totalDiscount: totalDiscount, discount: Discount };
}

export default checkForSpecialoffer;
