import { Carousel } from "antd";

export default function Slider({ data }) {
  return (
    <div>
      <Carousel effect="slidex" autoplay>
        {data?.map((current) => (
          <div className="">
            <div className="w-screen max-h-111 h-111">
              <img
                src={current.src}
                alt={current.alt}
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
