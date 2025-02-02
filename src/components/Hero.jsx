import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-3 sm:gap-5 py-8 text-gray-600">
        <div className="flex gap-2 justify-center items-center">
          <p className="h-[2px] w-8 md:w-11 bg-[#414141] text-gray-600"></p>
          <p>OUR BEST SELLERS</p>
        </div>
        <h1 className="prata-regular text-3xl lg:text-5xl ">Latest Arrivals</h1>
        <div className="flex gap-2 justify-center items-center">
          <p>SHOP NOW</p>
          <p className="h-[2px] w-8 md:w-11 bg-[#414141] text-gray-600"></p>
        </div>
      </div>
      <img src={assets.hero_img} className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
