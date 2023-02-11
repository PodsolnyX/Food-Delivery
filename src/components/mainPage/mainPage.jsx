import './mainPage.css';
import foodImage1 from "./../../img/food5.jpg";
import foodImage2 from "./../../img/food4.jpg";
import foodImage3 from "./../../img/food10.jpg";
import foodImage4 from "./../../img/food6.jpg";
import foodImage5 from "./../../img/food8.jpg";
import {Carousel, Image} from "react-bootstrap";

let MainPage = (props) => {
    return (
        <div className={"row col-12 h-75"}>
            <div className={"col-10 col-md-6 col-lg-4 m-auto"}>
                <div className={"mb-5 text-center"}>
                    <h1 className={"fs-5"}>Вы не можете купить счастье, но можете купить наши суши и стать ближе к
                        нему.</h1>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <button className="buttonShowMenu"><span>Меню</span></button>
                </div>
            </div>
            <div className={"col-md-6 d-none d-md-block m-auto"}>
                <Carousel>
                    <Carousel.Item>
                        <Image src={foodImage1} fluid />
                        <Carousel.Caption>
                            <div className={"captionBG"}>
                                <h4>Сет Токио</h4>
                                <p>1800р.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={foodImage2} fluid />
                        <Carousel.Caption>
                            <div className={"captionBG"}>
                                <h4>Сет Окинава</h4>
                                <p>1500р.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={foodImage3} fluid />
                        <Carousel.Caption>
                            <div className={"captionBG"}>
                                <h4>Сет Хамуки</h4>
                                <p>1000р.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={foodImage4} fluid />
                        <Carousel.Caption>
                            <div className={"captionBG"}>
                                <h4>Ролл Хамон</h4>
                                <p>300р.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={foodImage5} fluid />
                        <Carousel.Caption className={"mt-5"}>
                            <div className={"captionBG"}>
                                <h4>Ролл Рубон</h4>
                                <p>300р.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default MainPage;
