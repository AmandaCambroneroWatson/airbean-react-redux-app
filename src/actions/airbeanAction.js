function setMenu(menu) {
  return {
    type: 'SET_MENU',
    payload: menu
  };
}

function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  };
}

function updateQuantity(quantity) {
  return {
    type: 'UPDATE_QUANTITY',
    payload: quantity
  };
}

function setOrderdetails(order) {
  return {
    type: 'SET_ORDERDETAILS',
    payload: order
  };
}

function setSpecials(specials) {
  return {
    type: 'SET_SPECIALS',
    payload: specials
  };
}


export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}


export { setMenu, setUser, updateQuantity, setOrderdetails, setSpecials };
