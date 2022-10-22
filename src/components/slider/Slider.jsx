import React, {useRef, useState} from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import data from "./sliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [curSlide, setcurSlide] = useState(2);
  const sliderRef = useRef();

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "180px",
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    initialSlide: 2,
    afterChange: (i) => setcurSlide(i),
  };
  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slider} ref={sliderRef}>
          {data.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <img src={slide.src} alt={slide.name} />
            </div>
          ))}
        </Slider>
        <div className={styles.btnBox}>
          <button onClick={gotoPrev} type="button">
            &lt;
          </button>
          <p>
            {curSlide + 1}
            <span>/{data.length}</span>
          </p>
          <button onClick={gotoNext} type="button">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
