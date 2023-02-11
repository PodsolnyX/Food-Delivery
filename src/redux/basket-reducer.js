const
    SHOW_BASKET = "SHOW_BASKET",
    CLOSE_BASKET = "CLOSE_BASKET",
    ADD_NEW_DISH_TO_BASKET = "ADD_NEW_DISH_TO_BASKET",
    ADD_DISH_TO_BASKET = "ADD_DISH_TO_BASKET",
    DELETE_DISH_FROM_BASKET = "DELETE_DISH_FROM_BASKET",
    DELETE_DISH_FROM_BASKET_COMPLETELY = "DELETE_DISH_FROM_BASKET_COMPLETELY";

let initialState = {
    show: false,
    dishes: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BASKET:
            return {
                ...state,
                show: true
            };
        case CLOSE_BASKET:
            return {
                ...state,
                show: false
            };
        case ADD_NEW_DISH_TO_BASKET:
            let newItem = {
                id: action.idDish,
                name: action.dish.name,
                price: action.dish.price,
                totalPrice: action.dish.price,
                amount: 1,
                image: action.dish.image
            };
            return {
                ...state,
                dishes: [...state.dishes, newItem]
            }
        case ADD_DISH_TO_BASKET: {
            let copyDishes = [...state.dishes];
            copyDishes.find((d, i) => {
                if (d.id === action.idDish) {
                    let copyDish = {...copyDishes[i]};
                    copyDish.amount += 1;
                    copyDishes[i] = copyDish;
                    return true
                }
            });
            return {
                ...state,
                dishes: copyDishes
            };
        }
        case DELETE_DISH_FROM_BASKET: {
            let copyDishes = [...state.dishes];
            copyDishes.find((d, i) => {
                if (d.id === action.idDish) {
                    if (copyDishes[i].amount === 1 && action.deleteCompletely === true)
                        copyDishes.splice(i, 1);
                    else if (copyDishes[i].amount !== 1) {
                        let copyDish = {...copyDishes[i]};
                        copyDish.amount -= 1;
                        copyDishes[i] = copyDish;
                    }
                    return true;
                }
            });
            return {
                ...state,
                dishes: copyDishes
            };
        }
        case DELETE_DISH_FROM_BASKET_COMPLETELY:
            let copyDishes = [...state.dishes];

            copyDishes.find((d, i) => {
                if (d.id === action.idDish) {
                    copyDishes.splice(i, 1);
                    return true;
                }
            });
            return {
                ...state,
                dishes: copyDishes
            };
        default:
            return state;
    }
}

export const showBasketCreator = () => ({type: SHOW_BASKET});
export const closeBasketCreator = () => ({type: CLOSE_BASKET});
export const addNewDishToBasketCreator = (idDish, dish) => ({type: ADD_NEW_DISH_TO_BASKET, idDish: idDish, dish: dish});
export const addDishToBasketCreator = (idDish) => ({type: ADD_DISH_TO_BASKET, idDish: idDish});
export const deleteDishFromBasketCreator = (idDish, deleteCompletely = true) => (
    {type: DELETE_DISH_FROM_BASKET, idDish: idDish, deleteCompletely: deleteCompletely}
);
export const deleteDishFromBasketCompletelyCreator = (idDish) => (
    {type: DELETE_DISH_FROM_BASKET_COMPLETELY, idDish: idDish}
);

export default basketReducer;