import hero from "../assets/app-name/zoom-clone-hero.png"


const Hero = () => {
  return (
    <>   
   <div className="w-full h-[500px] bg-black/10 sm:flex sm:justify-between items-center">
     <div className="w-[100%] sm:text-7xl text-3xl font-bold items-center  p-8 ">
      <h2 className="text-center ">Let's chat & Stream!</h2>
     </div>
     <div className="w-[100%]">
     <img src={hero} alt="" />
     </div>
   </div>
   <section >
    <h3 className="text-white text-3xl sm:text-4xl font-bold p-8 sm:pl-[50px]">{`Live Now : 0`}</h3>
   </section>
    </>
  );
};                                                                                   

export default Hero;
