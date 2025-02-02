const Title = ({ Text1, Text2 }) => {
  return (
    <div className="text-center inline-flex items-center gap-3 font-medium">
      <p className="text-gray-500">
        {Text1} <span className="text-gray-700">{Text2} </span>
      </p>
      {/* <p className="h-[2px] w-8 md:w-11 bg-gray-700"></p> */}
    </div>
  );
};

export default Title;
