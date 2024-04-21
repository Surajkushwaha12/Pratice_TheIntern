import React from 'react';
import Lab from '../Image/gold.png'
import Resume from "../Image/resume.png"
import Medal from "../Image/medal.png"
import Laptop from "../Image/laptop.png"
import Bag from "../Image/briefcase.png"
function KeyFeature(){
    return(
        <>
          <div className="h-auto w-full flex flex-wrap flex-col items-center 
                  text-center p-10 ">
                {/* Heading Section */}
                <div className="w-full h-auto flex flex-wrap flex-col items-center 
                    text-center mb-10">
                      <h1 className="text-5xl font-bold text-black py-5 mb-3">Key 
                      <span className='text-goldenrod'> Features</span></h1>
                    
                </div>

                {/* Card Section AREA  */}

                <div className="w-[100%] h-auto flex flex-wrap justify-around" >
                    {/* Cards */}
                    <div className="w-[330px] flex flex-col items-center mb-12  bg-gray-200
                     border-2 rounded-xl py-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-gray-500 shadow-xl
                     ">
                        <div className="w-20 h-30 my-6 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Lab}
                                alt="" srcset="" />
                        </div>

                        <p className="text-2xl font-bold mt-2 text-black cursor-pointer hover:text-goldenrod">Unleash Your Potential</p>
                        <p className="text-sm font-medium py-2 px-1 mb-4 text-gray-600">Immerse yourself in our cutting-edge curriculum, meticulously designed to 
                        unleash your full potential with Power BI.</p>
                    </div>

                      {/* Cards */}
                      <div className="w-[330px] flex flex-col items-center mb-12  bg-gray-200
                     border-2 rounded-xl py-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-gray-500 shadow-xl
                     ">
                        <div className="w-20 h-30 my-6 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Laptop}
                                alt="" srcset="" />
                        </div>

                        <p className="text-2xl font-bold mt-2 text-black cursor-pointer hover:text-goldenrod">Hands-on Adventure</p>
                        <p className="text-sm font-medium py-2 px-1 mb-4 text-gray-600"> Embark on a hands-on adventure through real-world projects and interactive exercises, where you'll tackle data challenges head-on.</p>
                    </div>


                      {/* Cards */}
                      <div className="w-[330px] flex flex-col items-center mb-12  bg-gray-200
                     border-2 rounded-xl py-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-gray-500 shadow-xl
                     ">
                        <div className="w-20 h-30 my-6 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Resume}
                                alt="" srcset="" />
                        </div>

                        <p className="text-2xl font-bold mt-2 text-black cursor-pointer hover:text-goldenrod">Expert Navigator</p>
                        <p className="text-sm font-medium py-2 px-1 mb-4 text-gray-600">Navigate the world of data analytics with confidence, guided by industry experts who are passionate about empowering your success.</p>
                    </div>


                      {/* Cards */}
                      <div className="w-[330px] flex flex-col items-center mb-12  bg-gray-200
                     border-2 rounded-xl py-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-gray-500 shadow-xl
                     ">
                        <div className="w-20 h-30 my-6 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Medal}
                                alt="" srcset="" />
                        </div>

                        <p className="text-2xl font-bold mt-2 text-black cursor-pointer hover:text-goldenrod">Engaging Exploration</p>
                        <p className="text-sm font-medium py-2 px-1 mb-4 text-gray-600">Dive deep into the realm of data with our engaging learning platform, featuring quizzes, discussions, and peer collaboration.</p>
                    </div>


                      {/* Cards */}
                      <div className="w-[330px] flex flex-col items-center mb-12  bg-gray-200
                     border-2 rounded-xl py-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl shadow-gray-500 shadow-xl
                     ">
                        <div className="w-20 h-30 my-6 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Bag}
                                alt="" srcset="" />
                        </div>

                        <p className="text-2xl font-bold mt-2 text-black cursor-pointer hover:text-goldenrod">Freedom to Soar</p>
                        <p className="text-sm font-medium py-2 px-1 mb-4 text-gray-600">Break free from the constraints of traditional learning schedules. With our flexible platform, you have the freedom to learn on your terms, anytime, anywhere.</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default KeyFeature;