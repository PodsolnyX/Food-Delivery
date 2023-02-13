import React from "react";
import axios from 'axios';
import MenuPage from "./menuPage";
import {connect} from "react-redux";
import {setCurrentPageAC, setMenuItemsAC, setMenuPaginationAC} from "../../redux/menu-reducer";

class MenuPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.dishes = [
            {
                id: "1",
                name: "Ролл Тори",
                description: "Рис, сыр Креметта, жареная кожа лосося в соусе Терияки, белый и черный кунжут.",
                price: 250,
                image: "https://bamboo-dosky.ru/wp-content/uploads/2022/04/%D0%A0%D0%BE%D0%BB%D0%BB-%D0%A2%D0%BE%D1%80%D0%B8-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-238x238.jpg",
                vegetarian: true,
                rating: 0,
                category: "Wok"
            },
            {
                id: "2",
                name: "Ролл Хотто",
                description: "Рис, крабовые палочки, огурчик, сыр Креметта.",
                price: 300,
                image: "https://bamboo-dosky.ru/wp-content/uploads/2022/04/%D0%BA%D0%B0%D0%BF%D0%BF%D0%B0-%D1%84%D0%B8%D0%BB%D0%B0-238x238.jpg",
                vegetarian: true,
                rating: 0,
                category: "Wok"
            },
            {
                id: "3",
                name: "Ролл Темпура Тобика",
                description: "Рис, крабовые палочки, икра Тобика, сыр Креметта, обжарен в сухарях.",
                price: 190,
                image: "https://bamboo-dosky.ru/wp-content/uploads/2022/04/%D1%82%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0-%D1%82%D0%BE%D0%B1%D0%B8%D0%BA%D0%B0-%D0%BE%D0%B1%D1%89%D0%B8%D0%B9-238x238.jpg",
                vegetarian: true,
                rating: 0,
                category: "Wok"
            },
            {
                id: "4",
                name: "Ролл Темпура Дайкон",
                description: "Рис, маринованная редька Дайкон, водоросли Чука, сыр Креметта, обжарен в сухарях.",
                price: 230,
                image: "https://bamboo-dosky.ru/wp-content/uploads/2022/04/%D1%82%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0-%D0%B4%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD-238x238.jpg",
                vegetarian: true,
                rating: 0,
                category: "Wok"
            },
        ]
    }

    componentDidMount() {
        axios.get(`https://food-delivery.kreosoft.ru/api/dish?page=${this.props.menuPage.pagination.current}`)
            .then(response => {
                // this.props.setMenuItems(response.data.dishes.concat(this.dishes));
                this.props.setMenuItems(response.data.dishes);
                this.props.setMenuPagination(response.data.pagination);
            })
    }

    onPageChanged(pageNumber) {
        if (pageNumber > this.props.menuPage.pagination.count) pageNumber = this.props.menuPage.pagination.count;
        if (pageNumber < 1) pageNumber = 1;

        axios.get(`https://food-delivery.kreosoft.ru/api/dish?page=${pageNumber}`)
            .then(response => {
                this.props.setMenuItems(response.data.dishes);
                this.props.setMenuPagination(response.data.pagination);
            })
    }

    render() {
        return <MenuPage {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        menuPage: state.menuPage,
        basketPage: state.basketPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMenuItems : (dishes) => {
            dispatch(setMenuItemsAC(dishes));
        },
        setMenuPagination : (pagination) => {
            dispatch(setMenuPaginationAC(pagination));
        },
        setCurrentPage : (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer);
