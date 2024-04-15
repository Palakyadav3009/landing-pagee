import { useMemo } from "react";

const FrameComponent1 = ({
  ellipse20,
  robKelm,
  asAFellowElectricalContra,
  propColor,
  propMinWidth,
  propColor1,
  propColor2,
}) => {
  const robKelmStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const operationsManagerZRStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const asAFellowStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className="w-[357px] rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-2.5 pr-5 pl-6 box-border relative gap-[8px] max-w-full z-[4] text-left text-xs text-g-25 font-text-sm-regular">
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <img
          className="h-8 w-8 relative rounded-[50%] object-cover"
          alt=""
          src={ellipse20}
        />
        <div className="flex flex-col items-start justify-start">
          <div
            className="relative leading-[18px] font-medium inline-block min-w-[54px]"
            style={robKelmStyle}
          >
            {robKelm}
          </div>
          <div
            className="relative text-3xs leading-[18px] text-g-100"
            style={operationsManagerZRStyle}
          >
            Operations Manager. ZR Homes
          </div>
        </div>
      </div>
      <div
        className="self-stretch relative text-base leading-[24px]"
        style={asAFellowStyle}
      >
        {asAFellowElectricalContra}
      </div>
      <div className="w-[1196px] !m-[0] absolute top-[-724px] right-[-983px] flex flex-row items-start justify-start pt-[662px] pb-[101.8px] pr-[76px] pl-[315px] box-border gap-[79px] text-xl">
        <div className="h-[calc(100%_-_795.8px)] w-[1749px] absolute !m-[0] top-[868.15px] right-[-553px] bottom-[-72.35px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[3]" />
        <div className="w-[357px] flex flex-col items-start justify-start gap-[32px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[57px] box-border max-w-full">
            <div className="relative leading-[30px] font-semibold z-[4] mq450:text-base mq450:leading-[24px]">
              Customer Testimonials
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-2 pr-5 pl-6 gap-[8px] z-[4] text-xs">
            <div className="flex flex-row items-center justify-start gap-[12px] mq800:flex-wrap">
              <img
                className="h-8 w-8 relative rounded-[50%] object-cover"
                alt=""
                src="/ellipse-20-7@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[18px] font-medium inline-block min-w-[104px]">
                  Sharmon Votteller
                </div>
                <div className="relative text-3xs leading-[18px] text-g-50">
                  Operations Manager. ZR Homes
                </div>
              </div>
            </div>
            <div className="self-stretch h-44 relative text-base leading-[24px] inline-block shrink-0">
              <p className="[margin-block-start:0] [margin-block-end:16px] whitespace-pre-wrap">
                We had an electrical issue in our garage and the owner was very
                responsive and came out the same day! That in itself was
                impressive. Then he did an excellent job at a reasonable price.
                I would definitely recommend Elliotts Electric.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border max-w-full text-xs">
          <div className="self-stretch flex flex-col items-start justify-start gap-[66px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full">
              <div className="flex-1 rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-[9px] pr-5 pl-6 box-border gap-[8px] max-w-full z-[4]">
                <div className="flex flex-row items-center justify-start gap-[12px] mq800:flex-wrap">
                  <img
                    className="h-8 w-8 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-20-8@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[18px] font-medium inline-block min-w-[77px]">
                      Ayla Johnson
                    </div>
                    <div className="relative text-3xs leading-[18px] text-g-50">
                      Operations Manager. ZR Homes
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  I was driving this morning between Columbia Falls to Whitefish
                  and one of their drivers past me like I was standing still
                  doing at least 80 mph. Then continues to excel to go through
                  the light, cutting off other traffic...
                </div>
              </div>
            </div>
            <div className="w-[357px] rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-[9px] pr-5 pl-6 box-border gap-[8px] max-w-full z-[4]">
              <div className="flex flex-row items-center justify-start gap-[12px] mq800:flex-wrap">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-cover"
                  alt=""
                  src="/ellipse-20-7@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[18px] font-medium inline-block min-w-[104px]">
                    Sharmon Votteller
                  </div>
                  <div className="relative text-3xs leading-[18px] text-g-50">
                    Operations Manager. ZR Homes
                  </div>
                </div>
              </div>
              <div className="self-stretch h-44 relative text-base leading-[24px] inline-block shrink-0">
                <p className="[margin-block-start:0] [margin-block-end:16px] whitespace-pre-wrap">
                  We had an electrical issue in our garage and the owner was
                  very responsive and came out the same day! That in itself was
                  impressive. Then he did an excellent job at a reasonable
                  price. I would definitely recommend Elliotts Electric.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
