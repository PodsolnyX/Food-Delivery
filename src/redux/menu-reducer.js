const
    SET_MENU_ITEMS = "SET_MENU_ITEMS",
    SET_MENU_PAGINATION = "SET_MENU_PAGINATION",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    currentPage: 1,
    countPages: 0,
    pagination: {
        size: 0,
        count: 0,
        current: 1
    },
    dishes: [

    ]
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_ITEMS:
            return {
                ...state,
                dishes: action.dishes
            };
        case SET_MENU_PAGINATION:
            return {
                ...state,
                pagination: action.pagination
            };
        case SET_CURRENT_PAGE:
            let copyPagination = {...state.pagination};
            copyPagination.current = action.pageNumber;
            return {
                ...state,
                pagination: copyPagination
            };
        default:
            return state;
    }
}

export const setMenuItemsAC = (dishes) => ({type: SET_MENU_ITEMS, dishes});
export const setMenuPaginationAC = (pagination) => ({type: SET_MENU_PAGINATION, pagination});
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});

export default menuReducer;