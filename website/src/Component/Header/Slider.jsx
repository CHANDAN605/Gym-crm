import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    src="img/slides/slide1.jpg"
                    alt="image"
                    text="Second slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="img/slides/slide2.jpg"
                    alt="image"
                    // title="#slider-direction-2"
                    text="Second slide"
                />

                {/* <ExampleCarouselImage text="Second slide" /> */}
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="img/slides/slide3.jpg"
                    alt="image"
                    // title="#slider-direction-3"
                    text="Second slide"
                />
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider