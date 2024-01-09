import { Carousel } from "react-bootstrap";
import "../Styles/HomeCarouselStyles.css";

const HomeCarousel = () => {
  return (
    <>
      <Carousel slide indicators={false} className="carousel-container">
        <Carousel.Item interval={2000} className="first-container">
          <img
            src="./Assets/homslider1.jpg"
            className="w-100"
            alt="carousel-img1"
          />
          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h2 className="bg-transparent text-white">
              GeeksMetrics provides infrastructure services and a range of
              flexible delivery options to meet the unique requirements of your
              organization.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          className="text-center carousel-caption-text"
        >
          <img
            src="./Assets/slider_11.jpg"
            alt="carousel-img2"
            className="w-100"
          />
          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h2 className="bg-transparent text-white">
              Technology is best when it brings people together. The importance
              of IT management is to understand the managing data. There are
              also difficulties IT managers overcome.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          className="text-center carousel-caption-text"
        >
          <img
            src="./Assets/slider_12.jpg"
            alt="carousel-img3"
            className="w-100"
          />
          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h2 className="bg-transparent text-white">
              GeeksMetrics provides IT infrastructure services and a range of
              flexible delivery options to meet the unique requirements of your
              organization.The importance of IT management is to understand the
              managing data. There are also difficulties IT managers overcome.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
