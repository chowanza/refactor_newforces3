import type { Route } from './+types/NewHomeConstruction';
//import Header from '../components/Header';
import Hero from '~/components/Hero';
import Images from '~/components/ImageSelector';
import ContactBanner from '~/components/ContactBanner';
import OurComitment from '~/components/PreconstructionSteps';
import ServiceCard from '~/components/ServiceCard';
import Footer from '~/components/Footer';
import CallToAction from '~/components/CallToAction';
import Services from '../components/Services';
import ConstructionProgressTracker from '~/components/ConstructionProgressTracker';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New Home Construction | Reliable Home Builder in Florida' },
    {
      name: 'description',
      content:
        'Need a reliable home builder in Florida? We handle everything from permits to completion. Contact us today!',
    },
  ];
}

export default function NewForceConstruction() {
  const atNewForce = [
    '/armazon.webp',
    '/e4b21e09c0a7f76b1b44b14a341b3c64.webp',
    '/9464febc5ffac581cf4a2907d73971cd.webp',
    '/392fd3329d65a48c6e65420fdd07050e.webp',
    '/05f962a803125be16000fb562f1a4da1.webp',
    '/f99a7be318157b387542facf57ddd616.webp',
  ];
  return (
    <div>
      {/*<Header currentPage='newhomeconstruction' />*/}
      <Hero
        backgroundImage='/hero-saratosa.webp'
        title='Build Your Dream Home in Sarasota – Free Consultation!'
        buttonText='About Us'
        description=''
        onButtonClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        subtitle='Custom Home Builders in Sarasota, Florida'
      />
      <div className='m-5 md:ml-20 md:mr-20'>
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Build Your Dream Home in Southwest Florida
        </h2>
        <p className='text-black text-center mt-5 mb-5'>
          We specialize in creating custom homes that transform your vision into
          reality. Located in the heart of Sarasota, New Force Construction
          brings unparalleled expertise and passion to every residential
          construction project we undertake.
        </p>
        <Images images={atNewForce} />
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Why Choose New Force Construction?
        </h2>
        <p className='text-black text-center mt-5 mb-5'>
          Our team of local architects, designers, and engineers works
          meticulously to ensure every detail of your dream home is executed to
          perfection. Building a custom home is more than a project—it's about
          creating a lifetime of memories in beautiful Sarasota.
        </p>
      </div>
      <div id="call-to-action">
        <CallToAction />
      </div>  
      <div className='min-h-screen bg-white'>
        <ConstructionProgressTracker option={1} />
      </div>
      <Services serviceType={4} />
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-3xl md:text-5xl'>
          Our Comprehensive Services
        </h2>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Fully Customized Design-Build Process:</b> From initial concept to
          final construction, we provide a complete turn-key service tailored to
          your unique lifestyle and preferences.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Custom Home Design:</b> Unlimited floor plan options and
          personalized design consultations to bring your dream home to life.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Energy-Efficient Construction:</b> Sustainable building practices
          that reduce energy costs and create environmentally responsible homes
          perfect for Florida's climate.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Local Expertise:</b> Deep understanding of Sarasota's architectural
          styles, building codes, and environmental considerations.
        </p>
      </div>
      <ContactBanner />
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-5xl md:text-7xl'>
          What Sets Us Apart
        </h2>
        <h3 className='mb-5 text-norange text-center font-bold text-2xl md:text-4xl'>
          Unmatched Quality and Transparency
        </h3>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Precise Craftsmanship:</b> Every home is a masterpiece, crafted
          with meticulous attention to detail.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Complete Transparency:</b> Honest communication about project
          costs, timelines, and material sourcing.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          <b>Licensed and Insured:</b> Fully certified Sarasota County home
          building contractors
        </p>
      </div>
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-3xl md:text-5xl'>
          Our Commitment to You
        </h2>
        <div className='grid md:grid-cols-2 gap-2'>
          <OurComitment
            descripcion='Personalized design consultations.'
            icon='/Carretilla.svg'
            number='01'
            imageSrc='Planos.webp'
          />
          <OurComitment
            descripcion='High-end, locally-sourced materials.'
            icon='/Carretilla.svg'
            number='02'
            imageSrc='Concrete.webp'
          />
          <OurComitment
            descripcion='Comprehensive project management.'
            icon='/Carretilla.svg'
            number='03'
            imageSrc='Planos.webp'
          />
          <OurComitment
            descripcion='Exceptional customer service.'
            icon='/Carretilla.svg'
            number='04'
            imageSrc='Flooring.webp'
          />
        </div>
      </div>
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-3xl md:text-5xl'>
          Premier Sarasota Custom Home Builder
        </h2>
        <p className='text-black text-center mt-5 mb-5'>
          With years of experience in Southwest Florida's unique construction
          landscape, New Force Construction understands the nuanced requirements
          of building exceptional homes in our beautiful region.
        </p>
        <video className='w-4/5 m-auto' src=''></video>
      </div>
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-3xl md:text-5xl'>
          Ready to Begin Your Home Building Journey?
        </h2>
        <p className='mt-5 p-5 text-xl text-center rounded-xl  text-black border-4'>
          Contact our Sarasota team today for a free, no-obligation
          consultation. <br />{' '}
          <b>Let's transform your custom home dreams into reality.</b>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
          <ServiceCard
            description=' (941) XXX-XXXX'
            title='Call Us'
            iconSrc='/phone.svg'
          />
          <ServiceCard
            description='contact@newforceconstruction.com'
            title='Email'
            iconSrc='/Email.svg'
          />
          <ServiceCard
            description='[Your Sarasota Address]'
            title='Address:'
            iconSrc='/location.svg'
          />
        </div>
      </div>
      <div className='m-5 md:m-20'>
        <h2 className='mb-5 text-norange text-center font-bold text-3xl md:text-5xl'>
          Service Areas
        </h2>
        <p className='text-black text-center mt-5 mb-5'>
          Sarasota, Bradenton, Venice, Siesta Key, St. Petersburg Surrounding
          Southwest Florida Communities
        </p>
        <img className='opacity-25 m-auto' src='/Mapa.webp' alt='' />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
