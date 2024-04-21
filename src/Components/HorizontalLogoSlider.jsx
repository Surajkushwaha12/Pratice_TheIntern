import React from 'react';
import Acer from '../Images/acer.png';
import Hcl from '../Images/hcl.png';
import Hp from '../Images/hp.png';
import Meebox from '../Images/meebox.png';
import Microsoft from '../Images/microsoft.png';
import Oracle from '../Images/oracle.png';
import Samsung from '../Images/samsung.png';
import Sony from '../Images/sony.png';
import IBM from '../Images/IBM.png';

const logos = [
  { id: 1, src: Acer, alt: 'Acer' },
  { id: 2, src: Hcl, alt: 'Hcl' },
  { id: 3, src: Hp, alt: 'Hp' },
  { id: 4, src: Meebox, alt: 'Meebox' },
  { id: 5, src: Microsoft, alt: 'Microsoft' },
  { id: 6, src: Oracle, alt: 'Oracle' },
  { id: 7, src: Samsung, alt: 'Samsung' },
  { id: 8, src: Sony, alt: 'sony' },
  { id: 9, src: IBM, alt: 'IBM' },
];

const HorizontalLogoSlider = () => {
  return (
    <div className="w-11/12 mx-auto mt-12 max-w-[1480px] flex flex-col md:flex-row ">
      <div className="flex items-center flex-col justify-center h-32 md:h-40 overflow-hidden">
        <h1 className='font-mullish lg:text-5xl md:text-3xl font-bold mb-4 mt-[2rem]'>Our Trusted Partners</h1>
        <div className="animate-marquee w-full flex justify-center gap-8">
          {logos.map((logo) => (
            <div key={logo.id} className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalLogoSlider;
