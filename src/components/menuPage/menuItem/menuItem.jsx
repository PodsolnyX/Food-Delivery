import s from './menuItem.module.css';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const DishCard = (props) => {

    let addNewDishToBasket = () => {
        props.addNewDishToBasket(props.dish);
    }
    let addDishToBasket = () => {
        props.addDishToBasket(props.dish);
    }
    let deleteDishFromBasket = () => {
        props.deleteDishFromBasket(props.dish);
    }

    return (
        <div className={"col-11 col-sm-6 col-lg-4 col-xl-3 p-4"}>
            <div className={s.foodCard}>
                <div className={"col-6 col-sm-9 col-md-8 col-lg-9 mx-auto"}>
                    <Link to={`/dish/${props.dish.id}`}>
                        <Image className={"pt-4 m-auto"} fluid src={props.dish.image}/>
                    </Link>
                </div>
                <div className={"col-10 text-body mx-auto mt-2 pb-2"}>
                    <h5>{props.dish.name}</h5>
                    <p><span className={"secondaryText"}>{props.dish.description}</span></p>
                </div>
                <div className={"row pb-4"}>
                    <div className={`${s.quantity_inner} col-8`}>
                        <button onClick={addNewDishToBasket} className={ props.amountInBasket ? `${s.bt_buy} d-none` : s.bt_buy }>
                            В корзину
                        </button>
                        <div className={ props.amountInBasket ? s.quantity_container : `${s.quantity_container} d-none` }>
                            <button onClick={deleteDishFromBasket} className={s.bt_minus}>
                                <svg viewBox="0 0 24 24">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <input type="text" value={props.amountInBasket} className={s.quantity} readOnly/>
                            <button onClick={addDishToBasket} className={s.bt_plus}>
                                <svg viewBox="0 0 24 24">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`col-2 ${s.cost}`}>{props.dish.price}₽</div>
                </div>
            </div>
        </div>
    );
}

export default DishCard;