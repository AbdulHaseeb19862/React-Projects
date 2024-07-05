import { useState } from 'react';
import vector from '/vector.svg';
import Benefits from './components/benefits';
import { benefitsList } from './components/beneflist';
import { BenefitsBtn } from './components/benefitsbtn';
import { benefits } from './components/benefitlist2';
import { Benefit2 } from './components/benefit2';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      {/* Main container */}
      <div className='w-full h-auto bg-white py-8'> 
        {/* Heading and paragraph */}
        <header className='mb-6 px-4'>
          <h1 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl font-arial text-[#2D2D2D] mb-2'>
            Get more with your hosting, pay less
          </h1>
          <p className='text-center text-[11px] md:text-sm lg:text-base text-[#2D2D2D]'>
            Make the most with your hosting plan, all for a price that fits your budget
          </p>
        </header>

        {/* Benefits list */}
        <div className="flex items-center justify-center">
          <main className='flex flex-col items-start md:flex-row justify-evenly mx-4 md:mx-32 space-y-4 md:space-y-0 gap-7'>
            {benefitsList.map((item, index) => 
              <Benefits 
                key={index} // Adding key prop
                text={item.text} 
              />
            )}
            <BenefitsBtn />
          </main>
        </div>
        
      </div>

      <div className='w-full h-auto mt-16 px-4 md:px-0'>
        <h1 className='text-center text-[#2D2D2D] text-2xl md:text-3xl lg:text-4xl'>Choose your hosting</h1>
        <p className='text-center mt-7 mx-4 md:mx-14 lg:mx-32'>
          Whether it's for personal or business use, you need a web hosting service like Namecheap's to get your ideas online. No matter which plan you choose, you can count on us for reliability, security, and a stress-free experience.
        </p>
      </div>
    
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 gap- px-4 md:px-14 lg:px-28'>
        {benefits.map((item, index) => (
          <Benefit2
            key={index} // Adding key prop
            image={item.image}
            heading={item.heading} 
            text={item.text} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
