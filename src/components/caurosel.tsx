import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type DataType = {
  title: string;
  image: string;
};

type Props = {
  data: DataType[];
};

export default function Carousel({ data }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-zinc-200 shadow-md rounded-lg p-6 flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-24 h-24" />
              <p className="mt-4 text-3xl text-zinc-800 font-bold">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
