import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';

function Testimonial() {
    const data = [
        {
            message: 'Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh zeuismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet,consectet ad elit sed onummy.',
            img: 'img/client1.jpg',
            name: "Joy Rane"
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh zeuismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet,consectet ad elit sed onummy.',
            img: 'img/client2.jpg',
            name: "Joy Rane"
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh zeuismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet,consectet ad elit sed onummy.',
            img: 'img/client3.jpg',
            name: "Joy Rane"
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh zeuismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet,consectet ad elit sed onummy.',
            img: 'img/client2.jpg',
            name: "Joy Rane"
        },
    ];
    const [feedbackData, setFeedbackData] = useState(data);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/* Start what clients say area  */}
            <div className="what-client-area2 what-client-back">
                <div className="container">
                    <div className="gym-carousel dot-control" >
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
                                feedbackData?.map(info => (
                                    <div className="single-client-say2">
                                        <p>
                                            {info.message}
                                        </p>
                                        <div className="client-picture">
                                            <img
                                                src={info.img}
                                                alt="client1"
                                                className="img-responsive img-circle"
                                            />
                                        </div>
                                        <div className="client-content">
                                            <h3>
                                                {info.name}
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* End what clients say area */}
        </>
    )
}

export default Testimonial