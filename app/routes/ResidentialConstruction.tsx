import type { Route } from "./+types/ResidentialConstruction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import {Card} from "flowbite-react"
import ContactBanner from "~/components/ContactBanner";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import TestimonialsSection from "~/components/TestimonialsSection";
import CallToAction from "../components/CallToAction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Force" },
    { name: "description", content: "New Force Construction" },
  ];
}

const handleHeroButtonClick = () => {
  // Handle button click
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
      imageUrl: "https://via.placeholder.com/50",
    },
    {
      name: "Laura Gómez",
      title: "Business Client",
      testimonial:
        "El equipo de trabajo fue muy eficiente, cumplieron con los tiempos acordados y la calidad del trabajo fue sobresaliente.",
      imageUrl: "https://via.placeholder.com/50",
    },
  ];

export default function ResidentialConstruction() {
  return (
    <>
    <Header currentPage="residential"/>
    <Hero
        title="Transform Your Sarasota Home"
        subtitle="Exceptional Residential Construction & Remodeling"
        description="Experience Stress-Free Projects with New Force Construction"
        buttonText="About Us"
        onButtonClick={handleHeroButtonClick}
        backgroundImage="/hero-saratosa.webp"
      />
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard 
            iconSrc="/project-logo.webp" 
            title={<span>Tired of dealing with <strong>unreliable contractors</strong>?</span>} 
          />
          <InfoCard 
            iconSrc="/project-logo.webp"  
            title={<span>Frustrated by project <strong>delays and budget overruns</strong>?</span>} 
          />
          <InfoCard 
            iconSrc="/project-logo.webp"  
            title={<span>Dreaming of a stunning new <strong>kitchen or bathroom</strong>?</span>}
          />
        </div>
      </section>
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-norange mb-4">
          You're not alone
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Many Sarasota homeowners face these challenges when embarking on home renovation or new construction projects.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
          At New Force Construction, we understand your concerns.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-norange mt-6">
          We've built our reputation on:
        </h3>
        <Carousel/>
      </section>

      <section className="px-6 py-16 bg-gray-50 text-center">
  <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
    Don't let your dream home renovation
  </h2>
  <h3 className="text-3xl md:text-4xl font-bold text-norange mb-10">
    become a nightmare
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-7xl mx-auto">
    <Card className=" shadow-md rounded-lg border border-gray-200">
      <p className="text-base md:text-lg text-gray-700">
        <span className="font-semibold">Choose New Force Construction,<br/></span> a trusted Sarasota Home Remodeling Contractor with a proven track record of success.
      </p>
    </Card>
    <Card className=" shadow-md rounded-lg border border-gray-200">
      <p className="text-base md:text-lg text-gray-700">
        We are your single-point-of-contact,<br/> 
        <span className="font-semibold"> managing all aspects of your project from start to finish.</span>
      </p>
    </Card>
    <Card className=" shadow-md rounded-lg border border-gray-200">
      <p className="text-base md:text-lg text-gray-700">
        Experience the peace of mind that comes with working with a <br/>
        <span className="font-semibold"> reliable and trustworthy Renovation Company that prioritizes your satisfaction.</span>
      </p>
    </Card>
  </div>
</section>
<CallToAction />
<ContactBanner />
<section className="px-6 py-16 bg-white text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-norange mt-10 mb-10">
          Our Residential Construction<br/> Services Include:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            iconSrc="/project-logo.webp"
            title="New Home Construction"
            description="Build your dream home with expert guidance and meticulous attention to detail."
          />
          <ServiceCard
            iconSrc="/project-logo.webp"
            title="Kitchen & Bathroom Remodeling"
            description="Transform your kitchen into a culinary masterpiece or create a luxurious spa-like bathroom."
          />
          <ServiceCard
            iconSrc="/project-logo.webp"
            title="Home Renovations"
            description="From minor upgrades to full-scale renovations, we can help you modernize and enhance your living space."
          />
          <ServiceCard
            iconSrc="/project-logo.webp"
            title="Roofing Services"
            description="Protect your home with high-quality roofing installations and expert repairs."
          />
        </div>
      </section>
      <ContactForm/>
      <TestimonialsSection testimonials={testimonialsData}/>
      <Footer/>
      </>
  );
}
