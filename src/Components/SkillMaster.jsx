import React from 'react';


function SkillMaster() {
    return (
        <>
            <div className="h-auto w-full flex flex-wrap flex-col items-center 
                  text-center p-10 ">
                {/* Heading Section */}
                <div className="w-full h-auto flex flex-wrap flex-col items-center 
                    text-center mb-10">
                    <h1 className="text-5xl font-bold text-black py-5 mb-3">Skills You Will
                        <span className='text-goldenrod'> Master</span></h1>
                </div>

                <div className='flex w-[70%] h-auto flex-col '>
                    <div className='flex md:flex-row  flex-col
                      rounded-xl 
                      shadow-gray-500 shadow-lg bg-gray-200 '>
                        <div className='bg-goldenrod px-10 py-7  '>
                            <h1 className='text-5xl font-bold items-center text-center pt-2'>01</h1>
                        </div>
                        <div className='md:px-10 px-5 py-7 w-[90%]'>
                            <h1 className='text-black text-2xl pb-3 font-bold items-center text-center'>Captivating Dashboards</h1>
                            <p>Turn raw data into actionable insights with captivating
                                dashboards and reports.
                            </p>
                        </div>
                    </div>

                    <div className='flex md:flex-row  flex-col 
                      rounded-xl  mt-8 bg-gray-200
                      shadow-gray-500 shadow-lg '>
                        <div className='bg-goldenrod px-10 py-7'>
                            <h1 className='text-5xl font-bold items-center text-center pt-2'>02</h1>
                        </div>
                        <div className='md:px-10 px-5 py-7 w-[90%]'>
                            <h1 className='text-black text-2xl pb-3 font-bold items-center text-center pl-50'>Data Manipulation</h1>
                            <p>Master importing, transforming, cleaning, and refining data for analysis
                            </p>
                        </div>
                    </div>

                    <div className='flex md:flex-row  flex-col
                      rounded-xl  mt-8 bg-gray-200
                      shadow-gray-500 shadow-lg '>
                        <div className='bg-goldenrod px-10 py-7'>
                            <h1 className='text-5xl font-bold items-center text-center pt-3'>03</h1>
                        </div>
                        <div className='md:px-10 px-5 py-4 w-[90%]'>
                            <h1 className='text-black text-2xl pb-3 font-bold items-center text-center '>DAX Proficiency</h1>
                            <p>Conquer complex calculations and supercharge 
                                data models with DAX (Data Analysis Expressions).

                            </p>
                        </div>
                    </div>

                    <div className='flex md:flex-row  flex-col
                      rounded-xl  mt-8 bg-gray-200
                      shadow-gray-500 shadow-lg '>
                        <div className='bg-goldenrod px-10 py-7'>
                            <h1 className='text-5xl font-bold items-center text-center'>04</h1>
                        </div>
                        <div className='md:px-10 px-5 py-6 w-[90%]'>
                            <h1 className='text-black text-2xl pb-3 font-bold items-center text-center'>Data Security</h1>
                            <p>Fortify your data fortress with robust security measures and seamless sharing capabilities.
                            </p>
                        </div>
                    </div>

                    <div className='flex md:flex-row  flex-col
                      rounded-xl mt-8 bg-gray-200 
                      shadow-gray-500 shadow-lg '>
                        <div className='bg-goldenrod px-10  py-7'>
                            <h1 className='text-5xl font-bold items-center text-center pt-3'>05</h1>
                        </div>
                        <div className='md:px-10 px-5 py-5 w-[90%]'>
                            <h1 className='text-black text-2xl pb-3 font-bold items-center text-center'>Performance Optimization</h1>
                            <p>Turbocharge performance and troubleshooting with precision.
Integration Mastery: Seamlessly integrate Power BI with other Microsoft tools for a cohesive data ecosystem.

                            </p>
                        </div>
                    </div>
                    


                </div>


            </div>

        </>
    );
}

export default SkillMaster;