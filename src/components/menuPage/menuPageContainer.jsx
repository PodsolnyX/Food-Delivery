import React from "react";
import MenuPage from "./menuPage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        menuPage: state.menuPage,
        basketPage: state.basketPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MenuPageContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage);

export default MenuPageContainer;