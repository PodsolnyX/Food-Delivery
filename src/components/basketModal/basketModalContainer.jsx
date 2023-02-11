import React, {useEffect} from "react";
import {
    closeBasketCreator
} from "../../redux/basket-reducer";
import BasketModal from "./basketModal";
import {connect} from "react-redux";

let mapStateToProps = (state, props) => {
    return {
        basketPage: state.basketPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        closeBasket : () => {
            dispatch(closeBasketCreator());
        }
    };
};

const BasketModalContainer = connect(mapStateToProps, mapDispatchToProps)(BasketModal);

export default BasketModalContainer;
