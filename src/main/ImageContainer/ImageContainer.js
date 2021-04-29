import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", borderRadius: "9999px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: "9999px" }}
            onClick={onClick}
        />
    );
}

function ImageContainer({ imageList }) {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (<div className="p-8">
        <Slider {...settings}>
            {imageList.map((element, key) =>
            (<div key={element}>
                <div className="flex flex-wrap justify-items-center">
                    <img src={element} alt="" className="h-96 w-full object-contain" />
                </div>
            </div>))}
        </Slider>
    </div>);
}

export default ImageContainer;