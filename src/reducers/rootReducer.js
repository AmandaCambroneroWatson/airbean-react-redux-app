const initalState = {
  menu: [],
  specials: [],
  user: {},
  orderDetails: {}
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload
      };
    case 'SET_SPECIALS':
      return {
        ...state,
        specials: action.payload
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        menu: action.payload
      };
    case 'SET_ORDERDETAILS':
      return {
        ...state,
        orderDetails: action.payload
      };

       
    default:
      return state;
  }
  
};
