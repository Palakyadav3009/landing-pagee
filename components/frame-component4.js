import { useMemo } from "react";

const FrameComponent4 = ({
  thereWasAThunderstormAndO,
  ellipse20,
  propWidth,
  thereWasADisplay,
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const thereWasAStyle = useMemo(() => {
    return {
      display: thereWasADisplay,
    };
  }, [thereWasADisplay]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[241px] flex flex-col items-center justify-start gap-[16px]"
      style={frameButtonStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
        <div className="flex flex-row items-start justify-start gap-[3px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/star.svg"
          />
        </div>
        <div
          className="self-stretch relative text-xs leading-[18px] font-semibold font-text-sm-regular text-g-50 text-center"
          style={thereWasAStyle}
        >
          {thereWasAThunderstormAndO}
        </div>
      </div>
      <img
        className="w-7 h-7 relative rounded-[50%] object-cover"
        alt=""
        src={ellipse20}
      />
    </button>
  );
};

export default FrameComponent4;
