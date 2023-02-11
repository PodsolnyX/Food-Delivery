import {
    showBasketCreator
} from "../../redux/basket-reducer";
import {connect} from "react-redux";
import navbar from "./navbar";


let mapStateToProps = (state, props) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showBasket: () => {
            dispatch(showBasketCreator());
        }
    }
}

const navbarContainer = connect(mapStateToProps, mapDispatchToProps)(navbar);

export default navbarContainer;
