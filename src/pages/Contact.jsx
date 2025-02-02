
import { assets } from "../assets/frontend_assets/assets";
import NewsLitterBox from "../components/NewsLitterBox";
import Title from "../components/Title";


const Contact = () => {
  return (
    <div className="w-full">
      <div className="text-3xl text-center my-10 ">
        <Title Text1={"CONTACT"} Text2={"US"} />
      </div>
      <div className="flex justify-center">

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-10">
        <img
          className=" w-full md:max-w-[450px] self-start"
          src={assets.contact_img}
          alt=""
        />
        <div className=" space-y-6 w-full md:max-w-4/5 text-gray-500">
          <p className="text-gray-700 font-bold text-xl">Our Store</p>
          <p>54709 Willms Station</p>
          <p>Suite 350, Washington, USA</p>
          <p>Tel: (415) 555-0132</p>
          <p>Email: admin@forever.com</p>
          <p className="text-gray-700 font-bold text-xl">Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="cursor-pointer border px-10 py-3 hover:bg-black hover:text-white">Explore Jobs</button>
        </div>
      </div>
      </div>
      <NewsLitterBox />
    </div>
  );
}

export default Contact
