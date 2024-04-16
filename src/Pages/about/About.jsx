import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className=" mx-auto px-4 py-8">
              <Helmet>
        <title>LuxeHaven | About</title>
       
      </Helmet>
        <h2 className="text-3xl font-semibold mb-4">Welcome to LuxeHaven Real Estate</h2>
        <p className="text-lg mb-6">
          At LuxeHaven, we believe in turning your dreams of luxurious living into reality. With a passion for excellence and a commitment to personalized service, we are your trusted partner in finding your perfect home or investment property.
        </p>
        <p className="text-lg mb-6">
          With a team of experienced professionals and an extensive portfolio of premium properties, we strive to exceed your expectations at every step of the journey. Whether you're looking for a stunning waterfront villa, a contemporary urban loft, or a tranquil countryside estate, we have the expertise and resources to help you find the ideal property that suits your lifestyle and aspirations.
        </p>
        <p className="text-lg mb-6">
          We understand that buying or selling a property is one of life is most significant decisions, and we are here to guide you through the process with integrity, transparency, and professionalism. Our dedication to client satisfaction ensures that your experience with LuxeHaven is nothing short of exceptional.
        </p>
        <p className="text-lg">
          Discover the epitome of luxury living with LuxeHaven Real Estate. Your dream home awaits.
        </p>
      </div>
    );
};

export default About;