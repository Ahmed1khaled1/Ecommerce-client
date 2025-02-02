const NewsLitterBox = () => {
  const submitHandler = (e) => {
    e.preventDefaulte();
  };
  return (
    <div className="text-center py-10">
      <p className="font-medium text-2xl">Subscribe now & get 20% off </p>
      <p className="text-sm text-gray-500 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        tenetur eaque.
      </p>
      <form
        onSubmit={submitHandler}
        className="flex w-full mx-auto sm:w-1/2"
      >
        <input
          placeholder="Enter Your Email"
          required
          className="border outline-none px-3 py-2 border-gray-300 w-full"
        />
        <botton className="text-white bg-black px-10 py-2  text-sm">
          Subscrib{" "}
        </botton>
      </form>
    </div>
  );
};

export default NewsLitterBox;
