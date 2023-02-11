const SHOW_MENU = "SHOW_MENU";

let initialState = {
    dishes: [
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
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const showMenuCreator = () => ({type: SHOW_MENU});

export default menuReducer;