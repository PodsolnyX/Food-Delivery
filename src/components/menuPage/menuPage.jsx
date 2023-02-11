import './menuPage.css';
import {Link} from "react-router-dom";
import DishCardContainer from "./menuItem/menuItemContainer";

const MenuPage = (props) => {

    const found = props.menuPage.dishes.map(d => {
        let amount = 0;
        props.basketPage.dishes.forEach(function (i) {
            if (d.id === i.id) {
                amount = i.amount;
            }
        })
        return amount;
    })

    let dishesElements = props.menuPage.dishes.map((d, i) =>
        <DishCardContainer key={d.id} dish={d} amountInBasket={found[i]}/>);

    return (
        <div>
           <div className={"d-flex justify-content-center dishNavbar"}>
               <div className={"mx-5 my-auto"}>
                   <Link to="/menu/rolls">Роллы</Link>
               </div>
               <div className={"mx-5 my-auto"}>
                   <Link to="/menu/sushi">Суши</Link>
               </div>
               <div className={"mx-5 my-auto"}>
                   <Link to="/menu/sets">Сеты</Link>
               </div>
           </div>
            <div className={"text-center fs-1 pt-2"}>Роллы</div>
            <div className={"row col-11 mx-auto"}>
                {dishesElements}
            </div>
        </div>
    );
}

export default MenuPage;