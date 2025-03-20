import type { Route } from "./+types/LandingPage";
//import Header from "../components/Header";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import MissionVision from "~/components/MissionVision";
import ServiceCard from "~/components/ServiceCard";
import ServiceCarousel from "~/components/ServiceCarousel";
import Images from "~/components/ImageSelector";
import ContactBanner from "~/components/ContactBanner";
import TestimonialsSection from "~/components/TestimonialsSection";
import Footer from "~/components/Footer";
import TrustSignals from "~/components/TrustSignals";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "NewForce" },
    { name: "description", content: "LandingPage" },
  ];
}

const testimonialsData = [
    {
      name: "Marcos Antonio",
      title: "Roofing Client",
      testimonial:
        "El personal era estupendo. Los recepcionistas fueron muy serviciales y respondieron a todas nuestras preguntas. La habitación estaba limpia y era luminosa, y el servicio de habitaciones siempre fue puntual. Volveremos. Muchas gracias.",
      imageUrl: "/worker.webp",
    },
    {
      name: "Juan Pérez",
      title: "Home Owner",
      testimonial:
        "Excelente servicio, muy profesionales. Recomendamos ampliamente. La calidad es insuperable y la atención al cliente increíble.",
      imageUrl: "/worker.webp",
    },
    {
      name: "Laura Gómez",
      title: "Business Client",
      testimonial:
        "El equipo de trabajo fue muy eficiente, cumplieron con los tiempos acordados y la calidad del trabajo fue sobresaliente.",
      imageUrl: "/worker.webp",
    },
  ];

const handleGetQuoteClick = () => {
    console.log("Get a Quote button clicked");
    // You can implement your functionality here
  };

  const services = [
    {
      image: "/residential-construction.webp", // Replace with your image paths
      title: "Residential Construction",
      buttonText: "Get a Quote",
      buttonOnClick: handleGetQuoteClick,
    },
    {
      image: "/residential-construction.webp", // Replace with your image paths
      title: "Commercial Roofing",
      buttonText: "Get a Quote",
      buttonOnClick: handleGetQuoteClick,
    },
    // Add more services as needed
  ];

   roofing: [
      {
        image: "/roofingImage",
        title: 'Asphalt Shingle Roofing',
        description: 'Cost-effective and popular roofing option for residential properties.',
      },
      {
        image: "/roofingImage",
        title: 'Roof and Building Inspections',
        description: 'Comprehensive inspections for roofs and buildings to identify potential issues.',
      },
      {
        image: "/roofingImage",
        title: 'Metal Roofing',
        description: 'Durable and energy-efficient roofing solution for all types of properties.',
      },
      {
        image: "/roofingImage",
        title: 'Tile Roofing (Clay & Concrete)',
        description: 'Classic look with excellent durability for extreme weather conditions.',
      },
      {
        image: "/roofingImage",
        title: 'Flat Roofing (TPO, EPDM, and PVC)',
        description: 'Durable and energy-efficient flat roofing solutions for modern homes and commercial buildings.',
      },
      {
        image: "/roofingImage",
        title: 'Modified Bitumen Roofing',
        description: 'Superior waterproofing for low-slope and flat roofs in commercial buildings.',
      },
      {
        image: "/roofingImage",
        title: 'Slate Roofing',
        description: 'Timeless and highly durable roofing solution, perfect for long-lasting installations.',
      },
      {
        image: "/roofingImage",
        title: 'Wood Shake Roofing',
        description: 'Natural and rustic look with excellent insulation and aesthetic appeal.',
      },
      {
        image: "/roofingImage",
        title: 'Synthetic Roofing',
        description: 'Durable and affordable alternative that mimics natural products like slate, wood, or tile.',
      },
      {
        image: "/roofingImage",
        title: 'Standing Seam Metal Roofing',
        description: 'Sleek and modern roofing solution with superior protection against harsh weather.',
      },
      {
        image:"/roofingImage",
        title: 'Built-Up Roofing (BUR)',
        description: 'Durable and waterproof roofing solution ideal for low-slope commercial roofs.',
      },
      {
        image:"/roofingImage",
        title: 'Green Roof Installation',
        description: 'Eco-friendly roofing solution that incorporates vegetation layers for environmental sustainability.',
      },
      {
        image: "/roofingImage",
        title: 'Roof Coating and Maintenance',
        description: 'Roof coating services to extend the life of your roof, including UV protection and energy efficiency improvements.',
      },
    ]

   const atNewForce = ["/armazon.webp","/e4b21e09c0a7f76b1b44b14a341b3c64.webp","/9464febc5ffac581cf4a2907d73971cd.webp","/392fd3329d65a48c6e65420fdd07050e.webp","/05f962a803125be16000fb562f1a4da1.webp","/f99a7be318157b387542facf57ddd616.webp"]


export default function LandingPage() {
  return (
    <>
    {/*<Header currentPage="roofing"/>*/}
    <Hero 
      title="New Force Construction" 
      subtitle="" 
      description="" 
      buttonText="About Us" 
      onButtonClick={()=>{}} 
      backgroundImage="/hero-saratosa.webp"
      home = {true}
      />
      <section className="px-6 py-8 bg-white flex flex-col gap-10">
        <MissionVision title="Our Mission" image="/house.webp" text="Our mission is to create remarkable spaces that stand the test of time. From engineering and permits to execution and meticulous quality control, we manage every detail to empower our clients to focus on their vision and goals. Backed by our investment division, ZZZ Ventures Capital, we offer a full-service approach that merges top-tier craftsmanship with strategic financial insight. By uniting construction expertise with investment intelligence, we transform spaces into assets that generate lasting value and foster enduring trust." />

        <MissionVision title="Our Vision" inverted image="/vision.webp" text="We envision a Florida where every home and business reflects the dreams and aspirations of its owners.." />
      </section>
      <CallToAction />     
      <section className="px-6 py-8 bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-[#1b355b] text-lg font-medium">New Force Construction</h3>
        <h2 className="text-[#f97316] text-3xl font-extrabold">
          We work at everything you need to your house
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {/* Service 1 */}
        <ServiceCard
          iconSrc="/project-logo.webp" 
          title="Remodeling"
          description="Transform your space with our meticulous remodeling services. From stunning kitchens and luxurious bathrooms to complete home renovations, we craft spaces that reflect your unique style and enhance your lifestyle."
        />

        {/* Service 2 */}
        <ServiceCard
          iconSrc="/project-logo.webp" 
          title="Roofing"
          description="Protect your investment with our expert roofing services. We specialize in installation, repair, and maintenance for both residential and commercial properties, ensuring a durable and secure roof that stands the test of time."
        />

        {/* Service 3 */}
        <ServiceCard
          iconSrc="/project-logo.webp" 
          title="Painting"
          description="Our skilled painters bring your vision to life with meticulous attention to detail. We use premium paints and finishes to deliver a flawless, long-lasting result that enhances the beauty and value of your home or business."
        />

        {/* Service 4 */}
        <ServiceCard
          iconSrc="/project-logo.webp" 
          title="Roofing"
          description="From concept to completion, we manage every aspect of your home-building project with precision and care. Our experienced team utilizes cutting-edge technology and the finest materials to ensure a solid foundation for your dream home."
        />
      </div>
    </section>
    <ServiceCarousel title="Our Services" services={services} />

    <div className="m-5 md:ml-20 md:mr-20">
            <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Build Your Dream Home in Southwest Florida</h2>
            <p className="text-black text-center mt-5 mb-5">We specialize in creating custom homes that transform your vision into reality. Located in the heart of Sarasota, New Force Construction brings unparalleled expertise and passion to every residential construction project we undertake.</p>
            <Images images={atNewForce} />
        </div>
    <CallToAction />     
    <ContactBanner/>
    <TestimonialsSection testimonials={testimonialsData}/>
    <TrustSignals/>
    <Footer/>
    </>
  );
}