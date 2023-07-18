import { useState } from "react";
import Burguer from "../../assets/images/presentation-banner-food/banner-burguer.png";
import Chiquen from "../../assets/images/presentation-banner-food/banner-chicken.png";
import Pizza from "../../assets/images/presentation-banner-food/banner-pizza.png";

const HomeCarousel = () => {
  const images = [Burguer, Chiquen, Pizza];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const changeImage = () => {};

  const nextImg = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previewImg = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <>
      <img src={images[selectedIndex]} alt="Food" />
      <button onClick={previewImg}>{"<"}</button>
      <button onClick={nextImg}>{">"}</button>
    </>
  );
};

export default HomeCarousel;
