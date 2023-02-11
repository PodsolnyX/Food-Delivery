import {
    addDishToBasketCreator,
    deleteDishFromBasketCompletelyCreator, deleteDishFromBasketCreator,
} from "../../../redux/basket-reducer";
import {connect} from "react-redux";
import BasketItem from "./basketItem";

let mapStateToProps = (state, props) => {
    return {
        dish: props.dish
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteDishFromBasket : (dish) => {
            dispatch(deleteDishFromBasketCreator(dish.id, false));
        },
        addDishToBasket : (dish) => {
            dispatch(addDishToBasketCreator(dish.id));
        },
        deleteDishFromBasketCompletely : (dish) => {
            dispatch(deleteDishFromBasketCompletelyCreator(dish.id));
        }
    };
};

const BasketItemContainer = connect(mapStateToProps, mapDispatchToProps)(BasketItem);

export default BasketItemContainer;