import React from 'react';
// import backImg from '../Images/back1.jpg';
import { ChevronRight } from 'react-feather';

const ServiceBox = ({title, description }) => (
  <div 
  className="mt-5 rounded-lg shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto h-full hover:scale-105 transition duration-200">
    <div className='p-2'>    
      <div className='flex flex-col items-center'>
        <h2 className="font-extrabold my-4 text-2xl">{title}</h2>
        <p className="opacity-[0.87] p-2">{description}</p>
      </div>
    </div>
  </div>
);

const Features = () => {

  const serviceData = [
    {
      title: '100% Job Assistance',
      description: "Partnering with us isn't just a step; it's a leap towards success. With our unwavering commitment and dedication, success isn't just a possibility it's inevitable. Join us, and watch your aspirations turn into achievements."
    },
    {
      title: 'Course Duration',
      description: "Our 1.5 months course is tailored to provide you with a thorough understanding of the subject matter in a condensed timeframe. Despite the shorter duration, our curriculum is meticulously crafted to cover all essential concepts comprehensively."
    },
    {
      title: 'Internship Provided',
      description: "After completing our course, you'll have the opportunity to further enhance your skills through a 45-day internship program. This internship is a valuable component of our program, offering real-world experience and practical application of the knowledge gained during the course."
    },
    {
      title: 'Resume Building',
      description: "Building a compelling resume is essential for showcasing your skills and experiences effectively. At TheInterns, we provide personalized assistance in crafting professional resumes that highlight your strengths, accomplishments, and qualifications."
    },
    
  ];

  return (
    <section className="relative font-mullish p-3 ">
      <div className="w-11/12 max-w-[1280px] mx-auto relative mt-12 shadow-sm">
        <div className="absolute inset-0 hidden md:block">
          {/* <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${backImg}")`,
            }}
          ></div> */}
        </div>
        <div className="relative z-10 md:bg-transparent">
          <h2 className="font-extrabold text-4xl text-center">Features</h2>
          <div className="w-10 border-y-2 border-goldenrod bg-black my-4 mx-auto"></div>
          <p className="text-center max-w-[470px] mx-auto text-2xl">
            Empower Your Journey, Ignite Your Career with <span className="text-goldenrod text-4xl block font-bold">The Interns</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-10 p-3 font-semibold ">
            {serviceData.slice(0, 4).map((service, index) => (
          <div key={index} {...service}>
            <ServiceBox key={index} {...service} />
          </div>
        ))}
          </div>
          <div className="text-black py-10 px-4 rounded-lg text-center mt-10 bg-white shadow-2xl mb-6">
            <h1 className="font-mullish text-3xl md:text-4xl font-bold mb-4 shadow-sm text-center">Mentorship Session</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="md:flex md:flex-col justify-center items-start mt-2">
                <ul className="opacity-[0.87] space-y-8 flex flex-wrap items-start justify-start my-auto font-bold">
                  <li className="flex items-center space-x-2">
                    <ChevronRight style={{ color: "goldenrod" }} className="inline animate-on-scroll" /> Batch of Maximum 30 Students
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight style={{ color: "goldenrod" }} className="inline animate-on-scroll" /> Certificate of Course Completion
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight style={{ color: "goldenrod" }} className="inline animate-on-scroll" /> Certificate of Internship
                  </li>
                </ul>
                
              </div>
              <div className="md:flex md:flex-col justify-center">
                <p className="font-mullish space-x-2 mb-8 text-lg w-full">
                  <cite>"Cultivating potential is at the heart of our mentorship sessions. Within our organization, these sessions are more than just meetings they're opportunities for empowerment, collaboration, and personal growth. With every interaction, we strive to ignite the spark of inspiration and nurture it into a flame of achievement. Together, let's embark on a journey of mentorship, where knowledge is shared, skills are honed, and success is not just a destination, but a way of life."</cite>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
