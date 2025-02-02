import { assets } from "../assets/frontend_assets/assets";
import NewsLitterBox from "../components/NewsLitterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center my-10">
        <Title Text1={"ABOUT"} Text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mb-10 ">
        <img
          className="flex-1 w-full md:max-w-[450px] self-start"
          src={assets.about_img}
          alt=""
        />
        <div className="flex-1 space-y-10 w-full md:max-w-4/5 text-gray-500">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="text-black font-bold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-2xl mb-5">
        <Title Text1={"WHY"} Text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 px-14 py-20 border border-gray-300">
          <p className="font-bold pb-6">Quality Assurance:</p>
          <p className="text-sm text-gray-500">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex-1 px-14 py-20 border border-gray-300">
          <p className="font-bold pb-6">Convenience:</p>
          <p className="text-sm text-gray-500">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex-1 px-14 py-20 border border-gray-300">
          <p className="font-bold pb-6">Exceptional Customer Service:</p>
          <p className="text-sm text-gray-500">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLitterBox />
    </div>
  );
};

export default About;
