import type { Route } from "./+types/CommercialConstruction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoCard from "~/components/InfoCard";
import Card from "~/components/PreconstructionSteps";
import ServiceCard from "~/components/ServiceCard";
import Carousel from "~/components/Carousel";
import Selector from "~/components/ImageSelector";
import Footer from "~/components/Footer";
import CallToAction from "../components/CallToAction";
import Services from "~/components/Services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Force Construction | Commercial Construction in Sarasota, FL" },
    { name: "description", content: "Looking for expert commercial construction in Sarasota, FL? New Force Construction offers office, retail & industrial building solutions. Get a free quote!" },
  ];
}


export default function CommercialConstruction() {
  const atNewForce = ["/armazon.webp","/e4b21e09c0a7f76b1b44b14a341b3c64.webp","/9464febc5ffac581cf4a2907d73971cd.webp","/392fd3329d65a48c6e65420fdd07050e.webp","/05f962a803125be16000fb562f1a4da1.webp","/f99a7be318157b387542facf57ddd616.webp"]
  const tenant = ["/cd24d2b9f4c51670ca516e19ea41988f.webp","/armazon.webp","/e4b21e09c0a7f76b1b44b14a341b3c64.webp","/9464febc5ffac581cf4a2907d73971cd.webp","/392fd3329d65a48c6e65420fdd07050e.webp","/05f962a803125be16000fb562f1a4da1.webp"]
  
  return (
    <div>
    <Header currentPage="commercialconstruction"/>
    <Hero 
      title="Top-Rated Commercial Construction in Sarasota, FL – Get a Free Quote!" 
      subtitle="Exceptional Residential Construction & Remodeling" 
      description="Building Excellence for Your Business Design, Build, Renovate – Your Vision, Our Expertise" 
      buttonText="About" 
      onButtonClick={()=>{}} 
      backgroundImage="/hero-saratosa.webp" />
      <div>
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl mb-20">Your Trusted Partner for Commercial Construction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <InfoCard title="Contact Us Today!" iconSrc="/phone.svg"/>
          <InfoCard title="No-Cost Consultation & Free Project Estimate" iconSrc="/clock & lens.svg"/>
          <InfoCard title="Licensed, Bonded, and Insured" iconSrc="/Engineer.svg"/>
          <InfoCard title="Locally Owned and Operated in Sarasota, Florida" iconSrc="/location.svg"/>
        </div>
      </div>
      <Services serviceType={1} />
      <div className="mr-auto ml-auto max-w-7xl grid  md:grid-cols-2 grid-cols-none border-4 m-10 rounded-3xl justify-center items-center ">
        <Selector images={atNewForce}/>
        <div className="p-6">
          <h2 className="md:text-3xl text-4xl text-norange  lg:text-5xl font-bold  mb-2">At New Force <br />Construction LLC:</h2>
          <p className="text-black  text-sm md:text-xl">
            We handle every aspect of your commercial construction project with precision and care. From pre-construction planning to final inspections, we deliver tailored solutions that meet your unique needs while exceeding your expectations. 
            <br/> <br /> Whether you’re constructing a new building, renovating a commercial space, or completing a tenant build-out, our team brings decades of experience and a passion for quality to every project. 
            <br /> <br /> <b>Comprehensive Services to Bring Your Vision to Life </b></p>
        
        </div>
      </div>
      <div className="justify-center items-center mb-20">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Pre-Construction</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center">We believe successful projects start with meticulous planning. Our experienced team works closely with you to evaluate your goals, develop cost-effective solutions, and create a roadmap for success.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
          <Card descripcion="In-depth project analysis and planning" number="01" icon="/Carretilla.svg" imageSrc="/pala.webp" />
          <Card descripcion="Budget development and cost estimation" number="02" icon="/Carretilla.svg" imageSrc="/inspections.webp" />
          <Card descripcion="Timelines to ensure on-time delivery" number="03" icon="/Carretilla.svg" imageSrc="/pickle.webp" />
          <Card descripcion="Risk assessment and mitigation strategies" number="04" icon="/Carretilla.svg" imageSrc="/72.webp" />
        </div>
      </div>
      <CallToAction />
      <div className="mt-20 md:mt-32">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Design-Build Services</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10">Simplify your project with our design-build approach, where creativity meets efficiency. We manage both design and construction under one roof, ensuring seamless coordination and better outcomes.</p>
        <video className="w-4/5 m-auto" src=""></video>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ServiceCard description="A single point of accountability for your project." title="Streamlined Process" iconSrc="/Gear-Pencil.svg" />
          <ServiceCard description="Minimized delays and optimized resources." title="Cost Savings" iconSrc="/Suitcase.svg" />
          <ServiceCard description="Designs customized to your business needs." title="Tailored Solutions" iconSrc="/Casa-manos.svg" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Project Management</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10 pb-0">We prioritize communication and attention to detail to keep your project on track, on budget, and aligned with your vision.</p>
        <Carousel/>
      </div>
      <div className="w-5/6 content-center mr-auto ml-auto">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Tenant Build-Outs</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10 pb-0">Transform empty spaces into thriving businesses. Whether it’s an office, restaurant, or retail location, our tenant build-out services include:</p>
          <Selector images={tenant}/>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4">New construction tailored to your business</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4">Renovations that enhance functionality and aesthetics</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4">Complete build-outs to deliver a turnkey solution</p>
      </div>
      <div className="w-4/6 mr-auto ml-auto">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Demolition & Site Prep</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10 pb-0">From clearing the way for new construction to ensuring a clean slate for renovations we handle demolition with efficiency and care.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Safe and controlled demolition services</b></p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Comprehensive site preparation and cleanup</b></p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Expertise in handling projects of any size</b></p>
      </div>
      <div className="w-4/6 mr-auto ml-auto mt-20">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Public Works</h2>
        <p className="mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10 pb-0 mb-20">We’re proud to partner with local municipalities and organizations to deliver impactful public works projects, including schools, parks, and community facilities.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-center items-center">
          <ServiceCard description="" title="Turnkey solutions for modular classroom installations" iconSrc="/Pizarra.svg" />
          <ServiceCard description="" title="Proven experience in small to medium-sized projects" iconSrc="/Herramientas.svg" />
          <ServiceCard description="" title="Trusted by eight Florida counties for reliable service" iconSrc="/Muro.svg" />
        </div>
      </div>
      <div className="w-4/6 mr-auto ml-auto mt-20">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Why Choose New Force Construction LLC?</h2>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Experience You Can Trust:</b> Decades of success in Sarasota and across Southwest Florida.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Local Expertise:</b> Deep knowledge of the Sarasota area and its unique construction needs.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Commitment to Quality:</b> Attention to detail and superior craftsmanship in every project.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Financial Stability:</b> A strong foundation ensures projects are completed with confidence.</p>

      </div>
      <div className="w-4/6 mr-auto ml-auto mt-20">
        <h2 className="text-norange text-center font-bold text-3xl md:text-5xl">Industries We Serve</h2>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Apartment Buildings:</b> Luxury, affordable housing, and everything in between.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Restaurants:</b> Custom interiors and efficient kitchens to bring your culinary vision to life.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Retail Spaces:</b> Functional and attractive environments for your customers.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Office Buildings:</b> Workspaces designed for productivity and growth.</p>
        <p className="mt-5 mb-5 p-10 text-xl text-center rounded-xl  text-black border-4"><b>Warehouses & Industrial Facilities:</b> Built for efficiency and scalability.</p>

      </div>
    <CallToAction />
    <Footer/>
    </div>
  );
}