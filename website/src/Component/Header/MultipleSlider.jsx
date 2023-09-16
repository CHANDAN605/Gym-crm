import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MultipleSlider({ courusledata, type = "" }) {

    const [data, setData] = useState(courusledata);
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

                data?.map(info => (
                    <div className="upcoming-classes-box">
                        <h3>{info.classTitle}</h3>
                        <div className="rt-meta">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            {info.dateTime}
                        </div>
                    </div>

                ))

            }

        </Carousel>

    )
}

export default MultipleSlider