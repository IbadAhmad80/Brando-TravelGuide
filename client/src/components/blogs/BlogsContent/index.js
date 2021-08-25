// converting timestaps date into standard format
export const convertDateFromTimeStamps = (date, dateFormat) => {
  date = parseFloat(date);
  const dayName = new Date(date).toLocaleString("en-US", { weekday: "long" });
  const day = new Date(date).toLocaleString("en-US", { day: "numeric" });
  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  const year = new Date(date).toLocaleString("en-US", { year: "numeric" });
  return dateFormat
    ? `${dayName} - ${day} ${month} , ${year}`
    : `${day} ${month} , ${year}`;
};

//blogs slider setting
export const Slidersettings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        dots: false,
        speed: 2000,

        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        autoplaySpeed: 3000,
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const dummy_text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.";

export const short_dummy_text =
  " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.";
