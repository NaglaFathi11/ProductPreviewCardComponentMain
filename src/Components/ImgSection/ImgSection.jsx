import "../ImgSection/ImgSection.css";
import ImgContainerDesktop from "/assets/Images/ImgContainerDesktop";
import ImgContainerMobile from "/assets/Images/ImgContainerMobile";

function ImageContainer() {
  return (
    <div id="PictureContainer">
      <picture>
        <source media="(max-width: 768px)" srcSet={ImgContainerMobile} />
        <source media="(min-width: 769px)" srcSet={ImgContainerDesktop} />
        <img src={ImgContainerDesktop} id="PhotoDesktop" alt="not-found" />
      </picture>
    </div>
  );
}

export default ImageContainer;
