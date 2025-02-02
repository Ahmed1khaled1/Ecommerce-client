
import {assets} from "../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div className="bg-gray-50 mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <div className="py-5 flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14  text-sm text-gray-500">
        <div>
          <p className="text-2xl font-semibold text-black">CLOTHES SHOP</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ratione ipsam maiores molestias reiciendis, vitae odit magnam
            veritatis perspiciatis aspernatur possimus labore autem voluptatem
          </p>
        </div>
        <div>
          <p className="font-semibold text-black pb-3 ">COMPANY</p>
          <ul>
            <li>Home</li>assets
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-black pb-3 ">GET IN TOUCH</p>
          <p>+12 345 678</p>
          <p>hay@gmail.com</p>
        </div>
      </div>
      <hr className="border border-gray-300" />
      <div className="text-center py-3">
        copyright 2025@forever.com - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
