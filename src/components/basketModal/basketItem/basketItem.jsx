import s from "./basketItem.module.css";
import {Image} from "react-bootstrap";
import trashIcon from "../../../img/trashIcon.svg";

const BasketItem = (props) => {

    let addDishToBasket = () => {
        props.addDishToBasket(props.dish);
    }
    let deleteDishFromBasket = () => {
        props.deleteDishFromBasket(props.dish);
    }
    let deleteDishFromBasketCompletely = () => {
        props.deleteDishFromBasketCompletely(props.dish);
    }

    return (
        <div className={`row ${s.basketItem}`}>
            <div className={"col-2 my-auto"}>
                <Image className={""} fluid src={props.dish.image}/>
            </div>
            <div className={"row col-8"}>
                <div>{props.dish.name}</div>
                <div><span className={"secondaryText"}>Цена/шт: {props.dish.price}₽</span></div>
                <div className={`mt-2 ${s.quantity_inner_basket}`}>
                    <div className={s.quantity_container_basket}>
                        <button onClick={deleteDishFromBasket} className={s.bt_minus_basket}>
                            <svg viewBox="0 0 24 24">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <input type="text" value={props.dish.amount} className={s.quantity_basket} readOnly/>
                        <button onClick={addDishToBasket} className={s.bt_plus_basket}>
                            <svg viewBox="0 0 24 24">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={"col-1 m-auto"}>
                <img src={trashIcon} onClick={deleteDishFromBasketCompletely} className={s.btnDelete}/>
            </div>
        </div>
    );
};

export default BasketItem;