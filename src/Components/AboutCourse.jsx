import React from 'react';

function AboutCourse() {
    return (
        <>
            <div className="relative h-[600px] w-full rounded-md">
                <img
                    src="https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?s=1024x1024&w=is&k=20&c=IXpUV2gBUYkicSB7m6wcdbFhN9aaUMBmbSvog78fcLA="
                    alt="AirMax Pro"
                    className="z-0 h-full w-full  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute md:top-20 top-10 left-20 text-left ">
                    <button className="md:mt-5  inline-flex cursor-pointer border bg-goldenrod shadow-xl shadow-goldenrod rounded-lg  px-2 items-center text-lg font-bold text-white">
                        Power BI
                    </button>
                    <h1 className="text-5xl font-bold text-white py-5 mb-3">About Our <span className='text-goldenrod'>Course</span></h1>
                    <p className="mt-2 text-xl text-gray-300">
                        Ready to revolutionize your data analytics game?
                    </p>
                    <p className="mt-3 text-lg text-gray-300">
                        Our Power BI online course is your ticket to mastering the art of
                    </p>
                    <p className=" text-lg text-gray-300">
                        data visualization and analysis with Power BI.
                    </p>
                    <p className="mt-3 text-lg text-gray-300">
                        Whether you're a newbie or a seasoned data aficionado,

                    </p>
                    <p className=" text-lg text-gray-300">
                        our course offers a thrilling journey towards becoming a Power BI powerhouse.
                    </p>
                    <button className="mt-10 inline-flex cursor-pointer  hover:text-xl hover:bg-white hover:text-goldenrod  bg-goldenrod rounded-lg py-3   px-10 items-center text-lg font-bold text-white">
                        Explore &rarr;
                    </button>
                    <button className="mt-10 ml-10 inline-flex cursor-pointer hover:text-xl hover:bg-white hover:text-goldenrod bg-goldenrod rounded-lg py-3 px-10 items-center text-lg font-bold text-white">
                        Contact us
                    </button>
                </div>
            </div>
        </>
    );
}

export default AboutCourse;