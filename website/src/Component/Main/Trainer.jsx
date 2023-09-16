import React, { useState } from 'react'
import MultipleSlider from '../Header/MultipleSlider'
import Carousel from 'react-multi-carousel';

function Trainer() {
    const data = [
        {
            img: "img/trainers/1.jpg",
            trainerName: "David Smith",
            designation: "Fitness Trainer"
        },
        {
            img: "img/trainers/2.jpg",
            trainerName: "David Smith",
            designation: "Fitness Master"
        },
        {
            img: "img/trainers/3.jpg",
            trainerName: "David Smith",
            designation: "Expert Fitness"
        },
        {
            img: "img/trainers/4.jpg",
            trainerName: "David Smith",
            designation: "Fitness Trainer"
        },
        {
            img: "img/trainers/5.jpg",
            trainerName: "David Smith",
            designation: "Fitness Trainer"
        },
    ];
    const [trainerData, setTrainerData] = useState(data);
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
            {/* Start Expert trainers area */}
            <div className="expert-trainer-area3 nav-on-hover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="section-title-default title-bar-high">
                                EXPERT TRAINERS
                            </h2>
                            <p className="sub-title-default">
                                Rmply dummy text of the printing and typesetting industry dorem
                                Ipsum has been the industry's standard dummy text ever since thewhen
                                an unknown printer took a gal survived five centuries.
                            </p>
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
                                        trainerData?.map(info => (
                                            <div className="trainer-box3">
                                                <div className="trainer-box-wrapper">
                                                    <div className="trainer-img-holder">
                                                        <img
                                                            src={info.img}
                                                            className="img-responsive"
                                                            alt="team"
                                                        />
                                                        <div className="trainer-title-holder">
                                                            <h3>
                                                                <a href="#">{info.trainerName}</a>
                                                            </h3>
                                                            <div className="designation">{info.designation}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Expert tainers area */}
        </>
    )
}

export default Trainer