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
                effect="fade"
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination , Navigation ]}
                className="mySwiper z-10"
            >
                <SwiperSlide ><div className='w-full  lg:h-[80vh]   overflow-hidden rounded-lg relative'><img src="https://i.ibb.co/HKkBqj5/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy.jpg" alt="" className='w-full rounded-lg absolute top-0 '/></div></SwiperSlide>
               
                <SwiperSlide ><div className='w-full  lg:h-[80vh]  overflow-hidden rounded-lg'><img src="https://i.ibb.co/HKkBqj5/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy.jpg" alt="" className='w-full rounded-lg'/></div></SwiperSlide>
               
                <SwiperSlide ><div className='w-full  lg:h-[80vh]   overflow-hidden rounded-lg'><img src="https://i.ibb.co/HKkBqj5/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy.jpg" alt="" className='w-full rounded-lg'/></div></SwiperSlide>
               
            

            </Swiper>

        </>
    );
};

export default Slider;