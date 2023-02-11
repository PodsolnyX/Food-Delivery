import './dishPage.css';
import React from "react";
import {useSearchParams} from "react-router-dom";
import {Image} from "react-bootstrap";

const DishPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className={"container-fluid row col-10 mx-auto justify-content-center dishContainer"}>
            <div className={"col-4"}>
                <Image className={"mx-auto"} fluid src={"https://bamboo-dosky.ru/wp-content/uploads/2022/04/%D0%A0%D0%BE%D0%BB%D0%BB-%D0%A2%D0%BE%D1%80%D0%B8-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-238x238.jpg"}/>
            </div>
            <div className={"col-8"}>
                <div>
                    <h2>Ролл Тори</h2>
                </div>
                <div>
                    <p>Рис, сыр Креметта, жареная кожа лосося в соусе Терияки, белый и черный кунжут.</p>
                </div>
                <div className={"cost"}>
                    <p>250</p>
                </div>
            </div>
        </div>
    );
}

export default DishPage;