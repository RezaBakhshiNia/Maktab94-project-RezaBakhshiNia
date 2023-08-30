export const productsPageReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      case 'SET_MODAL_IS_OPEN':
        return { ...state, modalIsOpen: action.payload };
      case 'SET_PRODUCT_DETAILS_FOR_MODAL':
        return { ...state, productDetailsForModal: action.payload };
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'SET_SORTING_TYPE':
        return { ...state, sortingType: action.payload };
      case 'SET_TOTAL_PAGES':
        return { ...state, totalPages: action.payload };
      case 'SET_TRIGGER_CHANGES':
        return { ...state, triggerChanges: action.payload };
      default:
        return state;
    }
  };