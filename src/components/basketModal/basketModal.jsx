import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./basketModal.css";
import BasketItemContainer from "./basketItem/basketItemContainer";

const BasketModal = (props) => {

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            closeBasket();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    const closeBasket = () => {
        props.closeBasket();
    }

    let totalPrice = 0;

    let basketElements = props.basketPage.dishes.map((d, i) => {
        totalPrice += d.price * d.amount;
        return (<BasketItemContainer dish={d}/>);
    });
    console.log(basketElements)
    return ReactDOM.createPortal(
        <CSSTransition
            in={props.basketPage.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={closeBasket}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">Корзина</h4>
                        <button onClick={closeBasket} className="button">Закрыть</button>
                    </div>
                    <div className="modal-body">
                        {basketElements}
                    </div>
                    <div className="modal-footer">
                        <p>Итоговая стоимость: {totalPrice}₽</p>
                        <button onClick={closeBasket} className="btnOrder">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default BasketModal;
