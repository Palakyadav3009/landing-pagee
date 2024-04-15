import { useMemo } from "react";

const FrameComponent5 = ({ talkWithJosh, propColor, propMinWidth }) => {
  const talkWithJoshStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <button className="cursor-pointer [border:none] py-3 px-6 bg-w-300 rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start gap-[1px]">
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <div className="rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-0 px-[10.5px]">
          <div
            className="relative text-base leading-[24px] font-medium font-text-sm-regular text-gray-500 text-left inline-block min-w-[110px] whitespace-nowrap"
            style={talkWithJoshStyle}
          >
            {talkWithJosh}
          </div>
        </div>
      </div>
      <img
        className="h-[38px] w-[38px] relative rounded-[50%] object-cover"
        alt=""
        src="/ellipse-20@2x.png"
      />
    </button>
  );
};

export default FrameComponent5;
