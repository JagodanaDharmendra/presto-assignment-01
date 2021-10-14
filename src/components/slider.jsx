import { Carousel } from "antd";

const data = [
  {
    src: "./images/banner1.jpg",
  },
  {
    src: "./images/banner2.jpg",
  },
];

export default function Slider({}) {
  return (
    <div>
      <Carousel effect="slidex" autoplay>
        {data?.map((current) => (
          <div className="">
            <div className="w-screen max-h-111 h-111">
              <img src={current.src} className="w-full object-cover h-full" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
