import React from "react";
import { Card } from "flowbite-react";

// Define the type for the testimonial prop
interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string; // Add image URL for the client's picture
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="px-6 py-20 bg-gray-100">
     <p className="text-center text-gray-700">New Force Construction</p>
      <h2 className="text-center text-4xl font-bold text-norange mb-8">
        What our clients say
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="w-full bg-white shadow-lg rounded-lg p-4"
          >
            <p className="text-sm text-gray-700 text-justify">{testimonial.testimonial}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.imageUrl} // Use the dynamic image URL
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h5 className="text-lg text-norange font-semibold">{testimonial.name}</h5>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
