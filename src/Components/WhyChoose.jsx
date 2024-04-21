import React, { useState, useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import Light from '../Images/light.png';
import Light1 from '../Images/light.png';

function Card({ title, content }) {

  const handleMouseMove = (e) => {
     const card = e.currentTarget;
    const boundingRect = card.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;
    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;
    const rotateX = (offsetY - centerY) / centerY * -10; // Adjust sensitivity here
    const rotateY = (offsetX - centerX) / centerX * 10; // Adjust sensitivity here
    const red = Math.round((offsetX / boundingRect.width) * 255);
    const green = Math.round((offsetY / boundingRect.height) * 255);
    const blue = Math.round((Math.abs(offsetX - offsetY) / Math.max(boundingRect.width, boundingRect.height)) * 255);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--red', `${red}`);
    card.style.setProperty('--green', `${green}`);
    card.style.setProperty('--blue', `${blue}`);
  };


   const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--red', '255');
    card.style.setProperty('--green', '255');
    card.style.setProperty('--blue', '255');
  };

  return (
    <div className="card p-6 md:p-8 md:max-h-[350px] rounded-xl border-2 h-[20rem] flex flex-col justify-center m-auto text-white bg-opacity-90 relative bg-black" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <img src={Light} alt="" className='absolute h-[400px] opacity-60 md:-top-4 md:left-0.5 rotate-180 pt-20 hidden sm:block'/>
      <img src={Light1} alt="" className='absolute h-[400px] opacity-60 md:-bottom-4 md:right-0.5 pt-20 hidden sm:block'/>
      <div className='flex flex-col justify-center h-full md:w-[540px] mx-auto'>
        <h3 className="text-3xl font-bold pt-2 text-center sm:text-2xl lg:text-3xl">{title}</h3>
        <p className="text-md leading-normal text-Gray text-center mt-2 md:text-md lg:text-lg">{content}</p>
      </div>

      <style jsx>{`
         .card {
          perspective: 1000px;
          backface-visibility: hidden;
          transition: transform 0.5s ease-in;
          transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
          border: 2px solid rgb(var(--red, 255), var(--green, 255), var(--blue, 255)); /* Adjust border color */

        }
        
      `}</style>
    </div>
  );
}


function WhyChoose() {
  const datas = [
    {
      title: "Quality Education",
      content: "We offer high-quality online courses taught by industry experts who are passionate about sharing their knowledge and expertise with students."
    },
    {
      title: "Placement Assistance",
      content: "We provide placement assistance to help our learners kick start their careers."
    },
    {
      title: "Comprehensive Course Catalog",
      content: "Whether you're looking to upgrade your skills in technology, business, or creative fields, we have a diverse range of courses to meet your needs."
    },
    {
      title: "Flexible Learning",
      content: "Our online platform allows you to learn at your own pace, anytime and anywhere. With 24/7 access to course materials, you can balance your studies with your other commitments."
    },
    {
      title: "Community Support",
      content: "Join a vibrant community of learners from around the world. Interact with fellow students, share ideas, and collaborate on projects to enhance your learning experience."
    }
  ];

  const [manualControl, setManualControl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setManualControl(window.innerWidth <= 720); // Set to true if window width is less than or equal to 720px
    };

    handleResize(); // Call initially

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="why-choose" className="bg-white md:bg-black relative font-mullish h-[460px] border-gold">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1080px] mx-auto mt-[6rem] hover:scale-105 transition-all duration-400">
       <div className='p-5'>
         <h2 className="text-4xl font-bold mb-8 text-center text-black md:text-white z-10 ">Why To Choose <span className='text-goldenrod text-4xl'>The Interns ?</span></h2>
        {manualControl ? (
          <Carousel 
          autoplay
          loop
          
          className="rounded-lg overflow-hidden">
            {datas.map((data, index) => (
              <div className="item text-center" key={index}>
                <Card title={data.title} content={data.content} />
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            loop
            className="rounded-xl overflow-hidden"
            autoplay
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-3 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}>
            {datas.map((data, index) => (
              <div className="item text-center" key={index}>
                <Card title={data.title} content={data.content} />
              </div>
            ))}
          </Carousel>
        )}
       </div>
      </div>
    </div>
  );
}

export default WhyChoose;
