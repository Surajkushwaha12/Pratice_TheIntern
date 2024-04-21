import React from 'react';

// Reusable Card component
const Card = ({ title, description }) => (
  <div className="h-full w-full border-2 rounded-xl shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto">
    <h3 className='p-auto font-bold text-center font-mullish text-3xl py-5'>{title}</h3>
    <p className='p-3 text-center font-mullish'>{description}</p>
  </div>
);

function Course() {
  // Array of card information
  const cards = [
    {
      title: "Quality Education",
      description: "We offer high-quality online courses taught by industry experts who are passionate about sharing their knowledge and expertise with students."
    },
    {
      title: "Placement Assistance",
      description: "We understand that securing a job after completing a course is crucial for our students. That's why we provide placement assistance to help our learners kick start their careers."
    },
    {
      title: "Comprehensive Course Catalog",
      description: "Whether you're looking to upgrade your skills in technology, business, or creative fields, we have a diverse range of courses to meet your needs."
    },
    {
      title: "Flexible Learning",
      description: "Our online platform allows you to learn at your own pace, anytime and anywhere. With 24/7 access to course materials, you can balance your studies with your other commitments."
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners from around the world. Interact with fellow students, share ideas, and collaborate on projects to enhance your learning experience."
    }
  ];

  return (
    <div className='max-w-[1080px] flex flex-col justify-center items-center mx-auto my-auto'>
      <div className='pt-5'>
        <div className='flex justify-center md:col-span-3 mb-10'>
          <h1 className='font-mullish text-3xl md:text-4xl mt-10 font-bold text-center'>Why To choose <span className='interns text-4xl font-bold text-goldenrod'>The Interns ?</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 text-center'>
          {cards.slice(0, 3).map((card, index) => (
          <div key={index}>
            <Card title={card.title} description={card.description} />
          </div>
        ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  text-center mt-6 gap-4 md:gap-10">
        {cards.slice(3).map((card, index) => (
          <div key={index}>
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
