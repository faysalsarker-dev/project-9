import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
               
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination , Navigation ]}
                className="mySwiper z-10  container"
            >
            
                <SwiperSlide  ><div  className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat overflow-hidden rounded-lg'style={{backgroundImage: 'linear-gradient(180deg, rgba(19, 19, 24, 0.80) 0%, rgba(19, 19, 24, 0) 90%), url(https://img.freepik.com/free-photo/modern-architecture-illuminates-night-with-luxury-elegance-generated-by-artificial-intelligence_188544-150246.jpg?t=st=1713191105~exp=1713194705~hmac=ddffd49a25590ff9bc671f421ce0256632f351b33f4b5295e7bf21d026287774&w=1060)'}}>


                    <div  className='flex flex-col justify-center items-center h-full text-white space-y-3'>
                        <h3 className="text-3xl font-bold ">Find Your Dream Home with Us </h3>
                        <p>Best Offer, Best Choice - Your Ultimate Destination</p>
                    </div>
                
                
            
                </div></SwiperSlide>
               
            
               
            
                <SwiperSlide ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat overflow-hidden rounded-lg'style={{backgroundImage: 'linear-gradient(180deg, rgba(19, 19, 24, 0.80) 0%, rgba(19, 19, 24, 0) 90%), url(https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004025.jpg?t=st=1713274341~exp=1713277941~hmac=021fb34e7df478253933f6252144de1d610e1df9007413c8e9abbbee89dcf4c3&w=1060)'}}>


                    <div className='flex flex-col justify-center items-center h-full text-white space-y-3'>
                        <h3 className="text-3xl font-bold ">Secure Your Dream Home Today</h3>
                        <p>Explore unparalleled luxury. Find your dream home with LuxeHaven Real Estate, where excellence meets comfort and sophistication.</p>
                    </div>
                
                
            
                </div></SwiperSlide>
               
                <SwiperSlide ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat overflow-hidden rounded-lg'style={{backgroundImage: 'linear-gradient(180deg, rgba(19, 19, 24, 0.80) 0%, rgba(19, 19, 24, 0) 90%), url(https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004020.jpg?t=st=1713274256~exp=1713277856~hmac=234673e23377657ffe7b7b4cdfd9d8e10422f0d7df4bb57ae7799cec60b12675&w=1060)'}}>


                    <div className='flex flex-col justify-center items-center h-full text-white space-y-3'>
                        <h3 className="text-3xl font-bold ">Exclusive & Trusted: Guaranteed Excellence in Every Detail </h3>
                        <p>Experience exclusivity and trust with our guaranteed commitment to excellence in every aspect of your real estate journey.</p>
                    </div>
                
                
            
                </div></SwiperSlide>
               
            

            </Swiper>

        </>
    );
};

export default Slider;