import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';

function Store() {
    const data = [
        {
            img: "img/product/product1.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product2.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product3.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product4.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product5.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product1.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
        {
            img: "img/product/product1.png",
            productTitle: "Product Title Here",
            rating: "4",
            price: "$76",
        },
    ]
    const [storeData, setStoreData] = useState(data);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/* Start online store area */}
            <div className="online-store-area nav-on-hover">
                <div className="container">
                    <h2 className="section-title-default title-bar-high">Online Store</h2>
                    <p className="sub-title-default">
                        Rmply dummy text of the printing and typesetting industry dorem Ipsum
                        has been the industry's standard dummy text ever since thewhen an
                        unknown printer took a gal survived five centuries.
                    </p>
                </div>
                <div className="container">
                    <div className="gym-carousel nav-control-middle" >
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            // showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all .2"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        // dotListClass="custom-dot-list-style"
                        // itemClass="carousel-item-padding-40-px"
                        >
                            {
                                storeData?.map(info => (
                                    <div className="single-product-store">
                                        <div className="single-product">
                                            <a href="#">
                                                <img src={info.img} alt="product" />
                                            </a>
                                            <div className="overlay" />
                                            <div className="product-info">
                                                <ul>
                                                    <li>
                                                        <a href="#" title="Whishlist">
                                                            <i className="fa fa-heart-o" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Campare">
                                                            <i className="fa fa-compress" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3>
                                                <a href="single-product.html">{info.productTitle}</a>
                                            </h3>
                                            <div className="review">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                    <li className="uncolor">
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className="regular-price">
                                                <span className="product-price">{info.price}</span>
                                            </span>
                                            <a href="#" className="btn-cart">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>

                </div>
            </div>
            {/* End online store area */}
        </>
    )
}

export default Store