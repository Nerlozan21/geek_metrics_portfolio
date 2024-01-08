import "../Styles/HomeCarouselStyles.css";

const HomeCarousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src={"./Assets/homslider1.jpg"}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h1 className="bg-transparent">
              GeeksMetrics provides infrastructure services and a range of
              flexible delivery options to meet the unique requirements of your
              organization.
            </h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={"./Assets/slider_11.jpg"}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h1 className="bg-transparent">
              Technology is best when it brings people together. The importance
              of IT management is to understand the managing data. There are
              also difficulties IT managers overcome.
            </h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={"./Assets/slider_12.jpg"}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bg-transparent">
            <h1 className="bg-transparent">
              GeeksMetrics provides IT infrastructure services and a range of
              flexible delivery options to meet the unique requirements of your
              organization.The importance of IT management is to understand the
              managing data. There are also difficulties IT managers overcome.
            </h1>
          </div>
        </div>
        <button
          className="carousel-control-prev bg-transparent"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-transparent"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden bg-transparent">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-transparent"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-transparent"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden bg-transparent">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
