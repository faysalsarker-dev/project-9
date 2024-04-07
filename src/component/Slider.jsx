import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination,Navigation ]}
                className="mySwiper"
            >
                <SwiperSlide ><div className='w-full  h-[500px] bg-base-200'></div></SwiperSlide>
                <SwiperSlide ><div className='w-full  h-[500px] bg-base-200'></div></SwiperSlide>
                <SwiperSlide ><div className='w-full  h-[500px] bg-base-200'></div></SwiperSlide>
                <SwiperSlide ><div className='w-full  h-[500px] bg-base-200'></div></SwiperSlide>
            

            </Swiper>

        </>
    );
};

export default Slider;