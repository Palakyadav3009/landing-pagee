import InputFilter from "./input-filter";
import FrameComponent5 from "./frame-component5";

const ResidentalCS = () => {
  return (
    <div className="w-[1248px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[50px] max-w-full text-left text-xl text-g-25 font-text-sm-regular mq800:gap-[25px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[37px]">
        <div className="relative leading-[30px] font-medium z-[8] mq450:text-base mq450:leading-[24px]">{`Residential & Commercial Services`}</div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center relative gap-[68px] max-w-full z-[8] text-base mq450:gap-[17px] mq800:gap-[34px]">
        <InputFilter frame16="/frame-16.svg" electrical="Electrical" />
        <InputFilter
          frame16="/frame-16-1.svg"
          electrical="Contracting"
          propMinWidth="91px"
        />
        <InputFilter
          frame16="/frame-16-2.svg"
          electrical="Installations"
          propMinWidth="93px"
        />
        <InputFilter
          frame16="/frame-16-3.svg"
          electrical="Repairs"
          propMinWidth="58px"
        />
        <div className="w-[1015.4px] !m-[0] absolute bottom-[-1213.8px] left-[-108px] flex flex-col items-start justify-start pt-[250px] px-24 pb-[598.8px] box-border gap-[5px] max-w-full z-[4] text-45xl">
          <div className="w-[1749px] h-[calc(100%_-_795.8px)] absolute !m-[0] top-[868.15px] bottom-[-72.35px] left-[-775px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[6]" />
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
            <div className="relative tracking-[-0.02em] leading-[40px] font-extrabold z-[8] mq450:text-19xl mq450:leading-[24px] mq800:text-32xl mq800:leading-[32px]">
              <p className="[margin-block-start:0] [margin-block-end:40px]">
                In an emergency?
              </p>
              <p className="m-0">We are available 24/7</p>
            </div>
          </div>
          <div className="w-[784.4px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-lg-4 text-black mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[184px]">
              <FrameComponent5
                talkWithJosh="Speak with Josh"
                propColor="#0f0f0f"
                propMinWidth="126px"
              />
              <div className="w-[109px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="h-[7px] flex-1 relative z-[7]">
                  <div className="absolute top-[4.9px] left-[73px] rounded bg-saddlebrown w-12 h-0.5 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[7px] left-[29px] rounded bg-w-300 w-[29px] h-[7px] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]" />
                </div>
              </div>
            </div>
            <div className="w-[30px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border">
              <div className="self-stretch h-[30px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white shadow-[0px_1.2px_3.49px_rgba(16,_24,_40,_0.1),_0px_1.2px_2.33px_rgba(16,_24,_40,_0.06)] w-full h-full z-[8]" />
                <div className="absolute top-[0.02px] left-[11.56px] leading-[24px] font-semibold inline-block [transform:_rotate(29.9deg)] [transform-origin:0_0] min-w-[19px]">
                  ⚡️
                </div>
              </div>
            </div>
          </div>
          <div className="w-[805.4px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-41xl">
            <b className="w-[981px] relative tracking-[-0.02em] leading-[72px] inline-block shrink-0 max-w-[129%] z-[7] mq450:text-17xl mq450:leading-[43px] mq800:text-29xl mq800:leading-[58px]">
              Why Choose Elliot Electric?
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentalCS;
