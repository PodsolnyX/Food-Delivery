import {
    addDishToBasketCreator,
    addNewDishToBasketCreator,
    deleteDishFromBasketCreator
} from "../../../redux/basket-reducer";
import {connect} from "react-redux";
import DishCard from "./menuItem";

let mapStateToProps = (state, props) => {
    return {
        dish: props.dish,
        amountInBasket: props.amountInBasket
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewDishToBasket : (dish) => {
            dispatch(addNewDishToBasketCreator(dish.id, dish));
        },
        addDishToBasket : (dish) => {
            dispatch(addDishToBasketCreator(dish.id));
        },
        deleteDishFromBasket : (dish) => {
            dispatch(deleteDishFromBasketCreator(dish.id));
        }
    }
}

const DishCardContainer = connect(mapStateToProps, mapDispatchToProps)(DishCard);

export default DishCardContainer;