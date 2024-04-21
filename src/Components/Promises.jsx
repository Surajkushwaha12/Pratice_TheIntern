import React from "react";
import ImageSlider from './ImageSlider';
import icon from '../Images/03.svg'

function PromiseSection() {
    const images = [
        'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
    ];
    return (
        <>
            <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-blue-500-xl overflow-hidden md:max-w-5xl ">
                <div className=" tracking-wide font-mullish text-3xl md:text-4xl font-bold m-8 text-center">
                    Our Promise <span className=" hidden md:right-10 animate-pulse absolute md:inline-flex   "><img src={icon}
                alt="" srcset="" /></span>
                </div>
                <div className="md:flex">

                    <div className="p-2">


                        <p className="mt-2 text-slate-500 px-4">
                            At The Interns, we are committed to providing a supportive learning environment where every student feels valued and empowered to succeed.

                        </p>
                        <p className="mt-2 text-slate-500 px-4">
                            With our comprehensive courses, expert instructors, and dedicated support team, we assure you that your journey with us will be nothing short of exceptional.

                        </p>
                        <a
                            href="/"
                            className="block mt-2 text-4xl leading-tight font-bold px-4"
                        >
                        </a>
                        <p className="mt-2 text-slate-500 px-4">
                        Today and take the first step towards a brighter future!
                        </p>
                        <button className="mt-5 mx-3 text-white font-bold py-2 px-4 rounded-md w-40 transition-transform duration-300 transform hover:scale-110 bg-goldenrod">Join</button>
                       
                       
                    </div>
                    {/* Image Section */}
                    <div className="md:shrink-0">
                        <ImageSlider images={images} />
                        
                    </div>

                </div>
              
            </div>

        </>
    );
}

export default PromiseSection;