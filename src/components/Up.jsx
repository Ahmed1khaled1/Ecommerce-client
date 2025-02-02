
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function Up() {
  const slideUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={slideUp}
      className="fixed cursor-pointer p-2 bg-gray-100 w-10 aspect-square rounded-full  shadow-xl hover:scale-120  bottom-5 right-5 "
    >
      <ArrowUpwardOutlinedIcon className="animate-updown" />
    </div>
  );
}

export default Up;
