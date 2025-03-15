import { motion } from 'framer-motion';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Carousel from '~/components/Carousel';
import ContactBanner from '~/components/ContactBanner';
import Commitment from '~/components/PreconstructionSteps';
import ServiceCard from '~/components/ServiceCard';
import Footer from '~/components/Footer';
import CallToAction from '~/components/CallToAction';

export default function KitchenAndBath() {
  return (
    <div>
      <Header currentPage='kitchen' />
      <Hero
        backgroundImage='/hero-saratosa.webp'
        buttonText='About Us'
        description='Transform Your Sarasota Home with Exquisite Kitchen & Bath Renovations'
        subtitle='Remodeling Specialists in Sarasota, Florida'
        title='New Force Construction Kitchen & Bath'
        onButtonClick={() => {}}
      />
      <motion.div
        className='m-5 md:ml-20 md:mr-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className='mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10'>
          Elevate your Sarasota living space with New Force Construction. Our
          expert team specializes in transforming houses into dream homes,
          tailored to your unique vision. From stunning kitchen remodels to
          luxurious bathroom renovations, we'll craft a space that perfectly
          reflects your style and enhances your daily life. With a commitment to
          quality, attention to detail, and innovative design, we'll ensure your
          home renovation project exceeds your expectations.
        </p>
      </motion.div>
      <motion.div
        className='m-5 md:ml-20 md:mr-20'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Why Choose New Force Construction?
        </h2>
        <p className='mt-5 p-5 text-xl text-center rounded-xl text-black border-4'>
          <b>Unparalleled Expertise:</b> We possess in-depth knowledge of the
          latest design trends, building codes, and industry best practices.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl text-black border-4'>
          <b>Project Management:</b> We handle all aspects of your project, from
          design and permitting to construction and final inspections.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl text-black border-4'>
          <b>High-Quality Craftsmanship:</b> Our skilled team ensures meticulous
          attention to detail and flawless execution in every aspect of your
          remodel.
        </p>
        <p className='mt-5 p-5 text-xl text-center rounded-xl text-black border-4'>
          <b>Top-Quality Materials:</b> We source only the finest materials from
          reputable suppliers to ensure lasting beauty and durability.
        </p>
      </motion.div>
      <motion.div
        className='m-5 md:ml-20 md:mr-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-norange text-center font-bold text-5xl md:text-7xl'>
          Our Services
        </h2>
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Kitchen Remodeling:
        </h2>
        <Carousel />
        <p className='mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10'>
          From the moment you step into your newly transformed space, you'll
          feel a sense of calm and inspiration. Whether you're an avid home cook
          or simply enjoy preparing meals for your family, a thoughtfully
          designed kitchen can make all the difference.
        </p>
      </motion.div>
      <motion.div
        className='m-5 md:ml-20 md:mr-20'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Bathroom Remodeling:
        </h2>
        <Carousel />
        <p className='mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10'>
          Imagine your dream bathroom. A serene space where you can unwind after
          a long day or invigorate your mornings. Whether you're dreaming of a
          sleek, modern shower renovation or a classic, timeless bathroom
          remodel in Sarasota, New Force Construction is here to bring your
          vision to life.
        </p>
      </motion.div>
      <CallToAction />
      <ContactBanner />
      <motion.div
        className='m-5 md:ml-20 md:mr-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className='text-norange text-center font-bold text-5xl md:text-7xl'>
          Our Commitment to You
        </h2>
        <div className='flex flex-wrap h-[175vh] md:h-[175vh] md:mt-[-70px]'>
          {[...Array(3)].map((_, i) => (
            <Commitment
              key={i}
              descripcion='<b>Detailed Project Planning:</b> We work closely with you to understand your vision and create a detailed plan that meets your budget and timeline.'
              icon='/Carretilla.svg'
              imageSrc='Planos.webp'
              number={`0${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        className='m-5 mt-20 md:mt-40 md:ml-20 md:mr-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className='text-norange text-center font-bold text-3xl md:text-5xl'>
          Ready to Transform Your Sarasota Home?
        </h2>
        <p className='mr-auto ml-auto max-w-5xl text-black text-xl text-center p-10'>
          Contact us today for a free consultation and let's embark on a journey
          to create the perfect living environment for you and your family.
          Trust New Force Construction to revitalize your Sarasota home and make
          it truly shine.
        </p>
        <video className='w-4/5 m-auto' src='' preload='none'></video>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
          <ServiceCard
            description=' (941) XXX-XXXX'
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
      </motion.div>
      <CallToAction />
      <Footer />
    </div>
  );
}
