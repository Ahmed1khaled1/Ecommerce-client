import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around sm:flex-row gap-12 text-center py-15 ">
      <div>
        <div className=" mx-auto">
          <CurrencyExchangeOutlinedIcon
            sx={{ fontSize: 30 }}
            className="mb-2"
          />
        </div>
        <p className="text-sm font-medium">Easy Exchange Policy</p>
        <p className="text-gray-500 text-xs">
          we offer hassel free exchange policy{" "}
        </p>{" "}
      </div>
      <div>
        <VerifiedIcon sx={{ fontSize: 30 }} className="mb-2" />
        <p className="text-sm font-medium">7 Days Return Policy</p>
        <p className="text-gray-500 text-xs">
          we provide 7 dayes free return policy{" "}
        </p>
      </div>
      <div>
        <HeadsetMicOutlinedIcon sx={{ fontSize: 30 }} className="mb-2" />
        <p className="text-sm font-medium">Best Customer Support</p>
        <p className="text-gray-500 text-xs">
          we provide 24/4 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
