/* eslint-disable @next/next/no-img-element */
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "/images/image-product-1.jpg" },
  { url: "/images/image-product-2.jpg" },
  { url: "/images/image-product-3.jpg" },
  { url: "/images/image-product-4.jpg" },
];

function Main() {
  return (
    <>
      <div className>
        <div className='left'>
          <div>
            <SimpleImageSlider
              width={350}
              height={200}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <div className='ImgSlider'>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </>
  );
}

export default Main;
