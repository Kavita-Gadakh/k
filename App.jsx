import React from 'react'
import Navlinks from './component/Navlinks';
import HaroTextContent from './component/HeroTextContent';
import LeftFooter from './component/LeftFooter';
import NavIcons from './component/NavIcons';

const App = () => {
  return (
    <div className="w-screen h-screen font-alata flex">
      <div className="h-full flex-1 pl-40 pr-24
      pb-8 flex flex-col justify-between">
        <Navlinks />
        <HaroTextContent /> 
        <LeftFooter />
      </div>
      <div className="h-full flex-1 bg-[#FFF0CB]
      pr-40 pb-8 flex flex-col justify-between
       relative">
        <NavIcons />
        <ImgContainer />  
        <PageCount />
        <RightFooter />
           </div>
        
      </div>
       );
}

export default App
