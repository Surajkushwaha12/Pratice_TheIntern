import { ChevronRight } from 'react-feather';
import backdot from '../Images/image.png';
import featureImg from '../Images/featureimage.jpg';
import LightImg from '../Images/light.png';

function HeroSection() {
    const items = [
        "Continuous Learning",
        "Industry Leading Success Rate",
        "Networking Opportunities",
        "Professional Development",
        "Career Guidance",
        "Feedback and Reflection"
    ];    

    return (
        <section className="relative mt-[50px] overflow-hidden">
            <img src={backdot} alt="img" width="233" loading='lazy' height="167" className="absolute bottom-[12rem] left-[110px] inline-block rotate-180"/>
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <div className="text-black py-10 px-4 rounded-lg text-center mt-5 bg-white hover:shadow-gold shadow-xl mb-6 transition duration-200">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-mullish text-center text-4xl leading-[1.2] font-extrabold md:block">Welcome to <span className='text-goldenrod text-4xl'>The Interns</span> : Empowering Futures</h2>
                        <p className="font-mullish space-x-2 mb-8 text-xl font-semibold pt-4">The Interns, where we believe in nurturing the growth of students and shaping them into the leaders of tomorrow. At The Interns, we are committed to providing the best online courses that empower individuals with the skills and knowledge they need to excel in their careers.</p>
                    </div>
                </div>
                <div className="w-full min-h-[520px] bg-white grid grid-cols-1 md:grid-cols-2 rounded-md relative p-10 py-12 border shadow-md">
                    <div className=" justify-between  w-full">
                        <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                            Embrace curiosity, ignite knowledge, and unlock your limitless potential through learning with                   
                            <span className="text-goldenrod"> The Interns</span>
                        </h3>
                        <ul className="space-y-2">
                            {items.map((item, index) => (
                                <li key={index} className="font-mullish flex items-center space-x-2">
                                    <ChevronRight className="text-goldenrod"/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="space-x-4">
                            <button className="bg-goldenrod w-full md:w-fit text-white py-[14px] px-[18px] mt-4 md:m-6 rounded-md font-mullish font-bold hover:bg-goldenrod transition-all duration-200 hover:scale-105">Schedule a Call</button>
                        </div>
                    </div>
                    <img src={LightImg} alt="img" loading="lazy" className="absolute -top-[10px] -right-[180px] w-[200px] hidden rotate-180 lg:block md:hidden -z-10"/> {/* Adjust the positioning */}
                    <img src={featureImg} alt="img" className="w-full h-full rounded-xl mt-4 md:m-0"/> {/* Adjust image size for smaller screens */}
                </div>


                       {/* This is basically a Feedback button we utilise it at last if required */}

                        {/* <div className="fixed bottom-2 right-2 z-50 scrolling-touch mb-5 hidden md:block">
                            <button class="group relative inline-block font-mono text-lg ">
                                <span className="relative z-10 block overflow-hidden rounded-lg border border-blue-900 px-5 py-3 font-medium leading-tight text-blue-800 transition-colors duration-300 ease-out group-hover:border-transparent group-hover:text-white">
                                    <span className="absolute inset-0 h-full w-full rounded-lg bg-blue-50 px-5 py-3"></span>
                                    <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gradient-to-br from-blue-500 to-blue-900 transition-all duration-300 group-hover:-rotate-180"></span>
                                    <span className="relative">Provide Feedback</span>
                                </span>
                                <span className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0 group-hover:bg-transparent"></span>
                            </button>
                        </div> */}
            </div>
        </section>
    );
}

export default HeroSection;
