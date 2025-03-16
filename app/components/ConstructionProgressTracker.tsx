import React, { useEffect, useRef, useState } from 'react';
import { LuCheck } from 'react-icons/lu';
import './ConstructionPT.css';

const ConstructionProgressTracker: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: 1,
      title: 'Consultation & Planning',
      description:
        'Initial meeting to discuss your vision, budget, and timeline for your new home construction.',
    },
    {
      number: 2,
      title: 'Design & Approvals',
      description:
        'Creating detailed plans and obtaining necessary permits and approvals for construction.',
    },
    {
      number: 3,
      title: 'Construction Begins',
      description:
        'Breaking ground and starting the physical construction of your new home.',
    },
    {
      number: 4,
      title: 'Completion & Final Walkthrough',
      description:
        'Finalizing construction details and conducting a thorough walkthrough before handover.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the component (0 to 1)
      let progress = 0;

      if (
        containerTop <= windowHeight * 0.5 &&
        containerTop > -containerHeight + windowHeight * 0.5
      ) {
        // We're scrolling through the component
        progress =
          (windowHeight * 0.5 - containerTop) /
          (containerHeight - windowHeight * 0.1);
        progress = Math.min(Math.max(progress, 0), 1);
      } else if (containerTop <= -containerHeight + windowHeight * 0.5) {
        // We've scrolled past the component
        progress = 1;
      }

      setScrollProgress(progress);

      // Determine active step based on progress
      const newActiveStep = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );

      setActiveStep(newActiveStep);

      // Update timeline line height
      if (timelineRef.current) {
        const timelineHeight = timelineRef.current.offsetHeight;
        const lineHeight = progress * timelineHeight;
        const line = document.querySelector('.timeline-line') as HTMLElement;
        if (line) {
          line.style.height = `${lineHeight}px`;
        }
      }

      // Reveal elements as they enter viewport
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        if (elemTop < windowHeight * 0.85 && elemBottom > 0) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length]);

  return (
    <section
      className='relative py-24 md:py-32 overflow-hidden bg-construction-slate text-slate-600'
      ref={containerRef}
    >
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full  opacity-50 blur-3xl'></div>
        <div className='absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full  opacity-50 blur-3xl'></div>
      </div>

      <div className='container max-w-6xl mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 reveal-on-scroll'>
          <h2 className='text-[#f97316] text-4xl md:text-5xl font-bold text-construction-dark mb-4'>
            Your Construction Journey
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We keep you informed at every stage of your new home construction.
            Follow your project's progress from conception to completion.
          </p>
        </div>

        <div className='relative mt-20' ref={timelineRef}>
          {/* Timeline line */}
          <div className='timeline-line'></div>

          <div className='space-y-20 md:space-y-24'>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`timeline-step relative ${
                  activeStep >= index ? 'active' : ''
                }`}
              >
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                  {/* Timeline dot */}
                  <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10'>
                    <div
                      className={`timeline-dot w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                        activeStep >= index ? 'bg-[#f97316]' : 'bg-gray-300'
                      } ${activeStep === index ? 'active scale-110' : ''}`}
                    >
                      {activeStep > index ? (
                        <LuCheck className='w-5 h-5' />
                      ) : (
                        <span>{step.number}</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='timeline-content ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0'>
                    {index % 2 === 0 || window.innerWidth < 768 ? (
                      <div className='reveal-on-scroll'>
                        <h3 className='text-xl font-bold text-construction-dark mb-2'>
                          {step.title}
                        </h3>
                        <p className='text-gray-600'>{step.description}</p>
                      </div>
                    ) : (
                      <div className='md:invisible'></div>
                    )}
                  </div>

                  <div className='timeline-content ml-16 md:ml-0 md:w-1/2 md:pl-12 md:text-left'>
                    {index % 2 === 1 && window.innerWidth >= 768 ? (
                      <div className='reveal-on-scroll'>
                        <h3 className='text-xl font-bold text-construction-dark mb-2'>
                          {step.title}
                        </h3>
                        <p className='text-gray-600'>{step.description}</p>
                      </div>
                    ) : (
                      <div className='md:invisible'></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20 text-center reveal-on-scroll'>
          <div className='inline-block glass-card px-6 py-4 rounded-xl'>
            <p className='text-construction-dark font-medium'>
              Current progress: {Math.round(scrollProgress * 100)}%
            </p>
            <div className='mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
              <div
                className='bg-[#f97316] h-full rounded-full transition-all duration-300'
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionProgressTracker;
