import FrameComponent5 from "./frame-component5";
import FrameComponent4 from "./frame-component4";

const FrameComponent3 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[30px] pl-5 box-border max-w-full text-left text-77xl text-g-25 font-text-sm-regular">
      <div className="w-[1234px] flex flex-row items-start justify-start relative max-w-full">
        <div className="h-px w-[1483px] absolute !m-[0] top-[80px] right-[-130px] box-border z-[8] border-t-[1px] border-solid border-gray-200" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px]">
          <header className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full z-[8]">
              <button className="cursor-pointer [border:none] pt-[11.5px] pb-0 pr-[27px] pl-0 bg-[transparent] flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[39px] w-[39px] relative rounded-[5.57px] [background:linear-gradient(180deg,_#2d2c2c,_#010101)] overflow-hidden shrink-0">
                    <div className="absolute top-[10.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[20.2px] h-[4.9px]" />
                    <div className="absolute top-[24.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[20.2px] h-[4.9px]" />
                    <div className="absolute top-[17.4px] left-[10.4px] rounded-[5.57px] bg-white shadow-[0px_0.7px_1.39px_rgba(0,_0,_0,_0.25)] w-[15.3px] h-[4.9px]" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <div className="relative text-base font-text-sm-regular text-g-25 text-left">
                      <p className="m-0">EllioTt</p>
                      <p className="m-0">Electric</p>
                    </div>
                  </div>
                </div>
              </button>
              <nav className="m-0 w-[487px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border max-w-full mq1125:hidden">
                <nav className="m-0 self-stretch rounded-2xl [filter:drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.1))] flex flex-row items-start justify-between py-[7px] px-[17px] gap-[20px] mq800:hidden mq1125:hidden mq1350:hidden">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[47px]">
                    About
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[67px]">
                    Services
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[53px]">
                    Pricing
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[62px]">
                    Contact
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left inline-block min-w-[88px]">
                    Testimonial
                  </button>
                </nav>
              </nav>
              <FrameComponent5 talkWithJosh="Talk with Josh" />
            </div>
          </header>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border">
            <div className="flex flex-row items-start justify-center gap-[64px] max-w-full z-[8] mq800:gap-[16px] mq1125:flex-wrap mq1125:gap-[32px]">
              <FrameComponent4
                thereWasAThunderstormAndO={`"There was a thunderstorm and our main board had fried. Josh and his team came at middle of the night to fix our issue."`}
                ellipse20="/ellipse-20-1@2x.png"
              />
              <FrameComponent4
                thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                ellipse20="/ellipse-20-2@2x.png"
                propWidth="221px"
                thereWasADisplay="inline-block"
              />
              <FrameComponent4
                thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                ellipse20="/ellipse-20-2@2x.png"
                propWidth="221px"
                thereWasADisplay="inline-block"
              />
              <FrameComponent4
                thereWasAThunderstormAndO={`"LIFESAVER! We had an emergency and Josh was available. I recommend him to everyone"`}
                ellipse20="/ellipse-20-2@2x.png"
                propWidth="221px"
                thereWasADisplay="inline-block"
              />
            </div>
          </div>
          <div className="w-[798px] flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[1146px] w-px absolute !m-[0] bottom-[-556px] left-[107px] box-border border-r-[1px] border-solid border-gray-200" />
            <div className="flex-1 relative tracking-[-0.02em] leading-[110px] font-black inline-block max-w-full z-[7] mq450:text-10xl mq450:leading-[44px] mq800:text-29xl mq800:leading-[66px]">{`Best Electricians in Whitefish, MT `}</div>
          </div>
        </div>
        <div className="h-[1343.8px] w-full absolute !m-[0] bottom-[-1059.8px] left-[-98px] text-center text-base">
          <div className="absolute top-[322px] left-[403px] leading-[38px] font-semibold inline-block w-[336px] h-[37px] z-[7]">{`Josh and Kevin are available `}</div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[-559px] w-[1790.4px]">
            <img
              className="absolute top-[333px] left-[984px] w-[15px] h-[15px] z-[8]"
              alt=""
              src="/group-14.svg"
            />
            <div className="absolute top-[868.15px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.05),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[12]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
