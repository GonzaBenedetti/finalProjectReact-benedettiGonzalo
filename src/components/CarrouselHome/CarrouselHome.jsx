import { useEffect, useState, useRef } from "react";
import { dataCarrousel } from "../../dataCarrousel";
import "./CarrouselHome.css";

const CarrouselHome = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlaide = currentIndex === dataCarrousel.length - 1;
      if (!isLastSlaide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };
  return (
    <section className="carrouselContainer">
      <div className="slaiderContainer">
        <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10094;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10095;
        </div>
        <div className="imageContainer">
          <ul ref={listRef}>
            {dataCarrousel.map((data) => {
              return (
                <li key={data.id}>
                  <img
                    src={data.img}
                    style={{ width: "100%", height: "50vh" }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarrouselHome;
