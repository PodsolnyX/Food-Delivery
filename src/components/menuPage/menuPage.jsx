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

    let paginationElements = [];
    for (let i = 1; i <= props.menuPage.pagination.count; i++)
        paginationElements.push(
            <li className="page-item" key={i}>
                <Link className={props.menuPage.pagination.current === i ? `active page-link` : "page-link"} href={"menu"}
                      onClick={() => {props.onPageChanged(i)}}>{i}</Link>
            </li>
        );

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
            <div className="container d-flex justify-content-center pt-2" id="movies-nav-container">
                <ul className="pagination pagination-dark" id="movies-nav-pagination">
                    <li className="page-item">
                        <Link className="page-link" href="" aria-label="Предыдущая"
                              onClick={() => {props.onPageChanged(props.menuPage.pagination.current - 1)}} id="page-item-back">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    {paginationElements}
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Следующая"
                              onClick={() => {props.onPageChanged(props.menuPage.pagination.current + 1)}} id="page-item-next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuPage;