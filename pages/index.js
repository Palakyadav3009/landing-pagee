import FrameComponent3 from "../components/frame-component3";
import DataAggregator from "../components/data-aggregator";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import DataMatrix from "../components/data-matrix";
import FrameComponent from "../components/frame-component";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[26px] px-0 pb-[34px] box-border gap-[251px] tracking-[normal] leading-[normal] mq450:gap-[63px] mq800:gap-[125px]">
      <div className="w-full h-[843.8px] !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-end pt-[200px] px-[105px] pb-[199.8px] box-border mq800:pl-[52px] mq800:pr-[52px] mq800:box-border">
        <div className="w-[1749px] h-[548px] absolute !m-[0] top-[368.15px] right-[-174px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
        <button className="cursor-pointer [border:none] py-3 px-6 bg-w-300 w-[274px] rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start box-border gap-[1px] z-[7]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/phone.svg"
            />
          </div>
          <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-sm-regular text-gray-400 text-center mq450:text-lgi mq450:leading-[26px]">
            (406) 862 1622
          </div>
        </button>
      </div>
      <div className="w-[1749px] h-[548px] absolute !m-[0] right-[-652px] bottom-[966.85px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[11]" />
      <FrameComponent3 />
      <main className="self-stretch flex flex-col items-end justify-start py-0 pr-1 pl-0 box-border max-w-full">
        <section className="self-stretch bg-gray-500 overflow-hidden flex flex-col items-end justify-start pt-[115px] pb-[256.2px] pr-[100px] pl-1 box-border relative gap-[597px] max-w-full z-[9] text-left text-xs text-g-50 font-text-sm-regular mq450:gap-[75px] mq450:pt-[21px] mq450:pb-[46px] mq450:box-border mq800:gap-[149px] mq800:pr-[25px] mq800:box-border mq1125:pt-8 mq1125:pb-[71px] mq1125:box-border mq1350:gap-[298px] mq1350:pt-[49px] mq1350:pr-[50px] mq1350:pb-[109px] mq1350:box-border">
          <div className="w-[1749px] h-[548px] absolute !m-[0] right-[-825px] bottom-[-127.15px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[3]" />
          <DataAggregator />
          <FrameComponent2 />
          <div className="mr-[-104px] w-[1440px] flex flex-col items-start justify-start shrink-0 max-w-[108%]">
            <div className="w-[1152.4px] flex flex-col items-end justify-start pt-[459px] pb-[121.8px] pr-[236.4px] pl-[100px] box-border relative gap-[267px] max-w-full mq450:gap-[33px] mq450:pr-5 mq450:box-border mq800:gap-[67px] mq800:pt-[194px] mq800:pb-[51px] mq800:pr-[59px] mq800:pl-[25px] mq800:box-border mq1125:gap-[133px] mq1125:pl-[50px] mq1125:pr-[118px] mq1125:box-border mq1350:pt-[298px] mq1350:pb-[79px] mq1350:box-border">
              <div className="w-[1790.4px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-638px]">
                <div className="absolute top-[868.15px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[1]" />
                <img
                  className="absolute top-[655px] left-[1337px] rounded-13xl w-[57px] h-[57px] overflow-hidden z-[4]"
                  loading="lazy"
                  alt=""
                  src="/frame-22.svg"
                />
              </div>
              <div className="w-[354px] flex flex-row items-start justify-end py-0 px-10 box-border max-w-full">
                <button className="cursor-pointer [border:none] py-3 px-6 bg-w-300 flex-1 rounded-lg shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-row flex-wrap items-start justify-start gap-[1px] z-[7]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/phone.svg"
                    />
                  </div>
                  <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-sm-regular text-gray-400 text-center inline-block min-w-[131px] mq450:text-lgi mq450:leading-[26px]">
                    (406) 862 1622
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[89px] max-w-full mq450:gap-[22px] mq1125:gap-[44px]">
                <FrameComponent1
                  ellipse20="/ellipse-20-6@2x.png"
                  robKelm="Rob Kelm"
                  asAFellowElectricalContra="As a fellow electrical contractor I think very highly of Josh and Kevin! They’ve been very professional and good friends in all of my interactions with them. And their work is top-notch."
                />
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
                  <FrameComponent1
                    ellipse20="/ellipse-20-10@2x.png"
                    robKelm="Jerif Shewnson"
                    asAFellowElectricalContra="I called for service yesterday.  Today (Saturday) the owner came and quickly fixed my problems for a very reasonable price!  I highly recommend these friendly "
                    propColor="#fcfcfd"
                    propMinWidth="89px"
                    propColor1="#f9fafb"
                    propColor2="#fcfcfd"
                  />
                  <FrameComponent1
                    ellipse20="/ellipse-20-11@2x.png"
                    robKelm="Johnson Thormton"
                    asAFellowElectricalContra="Great bunch of guys that do good work at a fair price!"
                    propColor="#f9fafb"
                    propMinWidth="109px"
                    propColor1="#fcfcfd"
                    propColor2="#f9fafb"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[229px] pb-[207.8px] pr-[84px] pl-[100px] box-border relative gap-[169px] max-w-full mt-[-248.8px] mq450:gap-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[84px] mq800:pl-[50px] mq800:pr-[42px] mq800:pb-[88px] mq800:box-border mq1350:pb-[135px] mq1350:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
                  <div className="w-[376px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border max-w-full">
                    <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1.9px_5.7px_rgba(16,_24,_40,_0.1),_0px_1.9px_3.8px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start pt-4 pb-2.5 pr-5 pl-6 gap-[8px] z-[4]">
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="h-8 w-8 relative rounded-[50%] object-cover"
                          alt=""
                          src="/ellipse-20-8@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[18px] font-medium inline-block min-w-[77px]">
                            Ayla Johnson
                          </div>
                          <div className="relative text-3xs leading-[18px]">
                            Operations Manager. ZR Homes
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-base leading-[24px]">
                        I was driving this morning between Columbia Falls to
                        Whitefish and one of their drivers past me like I was
                        standing still doing at least 80 mph. Then continues to
                        excel to go through the light, cutting off other
                        traffic...
                      </div>
                    </div>
                  </div>
                  <FrameComponent1
                    ellipse20="/ellipse-20-10@2x.png"
                    robKelm="Jerif Shewnson"
                    asAFellowElectricalContra="I called for service yesterday.  Today (Saturday) the owner came and quickly fixed my problems for a very reasonable price!  I highly recommend these friendly "
                    propColor="#fcfcfd"
                    propMinWidth="89px"
                    propColor1="#fcfcfd"
                    propColor2="#fcfcfd"
                  />
                  <FrameComponent1
                    ellipse20="/ellipse-20-6@2x.png"
                    robKelm="Rob Kelm"
                    asAFellowElectricalContra="As a fellow electrical contractor I think very highly of Josh and Kevin! They’ve been very professional and good friends in all of my interactions with them. And their work is top-notch."
                    propColor="#fcfcfd"
                    propMinWidth="54px"
                    propColor1="#f9fafb"
                    propColor2="#fcfcfd"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
                  <button className="cursor-pointer [border:none] py-[5.5px] px-6 bg-gray-300 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[4] hover:bg-dimgray-200">
                    <div className="relative text-base leading-[24px] font-medium font-text-sm-regular text-g-50 text-left">
                      Load More Testimonials
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[1790.4px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-274px] text-11xl text-g-25">
                <div className="absolute top-[868.15px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[2]" />
                <div className="absolute top-[593px] left-[1024px] w-[602px] flex flex-row items-start justify-start max-w-full">
                  <div className="w-[971.4px] !m-[0] absolute top-[-672px] left-[-750px] flex flex-col items-start justify-start pt-[665px] pb-[625.8px] pr-5 pl-[124px] box-border gap-[8px]">
                    <div className="w-[1749px] h-[calc(100%_-_795.8px)] absolute !m-[0] top-[868.15px] bottom-[-72.35px] left-[-819px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] [transform:_rotate(-29.8deg)] [transform-origin:0_0]" />
                    <div className="w-[73px] h-[7px] relative z-[3]">
                      <div className="absolute top-[4.9px] left-[73px] rounded bg-saddlebrown w-12 h-0.5 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[7px] left-[29px] rounded bg-w-300 w-[29px] h-[7px] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]" />
                    </div>
                    <b className="w-[314px] relative leading-[38px] inline-block z-[3] mq450:text-[18px] mq450:leading-[23px] mq800:text-5xl mq800:leading-[30px]">
                      Contact us
                    </b>
                  </div>
                  <img
                    className="h-[390px] flex-1 relative rounded-2xl max-w-full overflow-hidden z-[4]"
                    loading="lazy"
                    alt=""
                    src="/1.svg"
                  />
                </div>
              </div>
              <div className="w-[898px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full text-sm">
                <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
                  <div className="w-[399px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[8px] max-w-full">
                    <div className="relative leading-[20px] font-medium z-[3]">
                      Name/ Organization
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-gray-100 self-stretch h-9 rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-100 min-w-[239px] z-[4]"
                      placeholder="name"
                      type="text"
                    />
                  </div>
                  <div className="w-[399px] flex flex-col items-start justify-start gap-[8px] max-w-full">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[95px] z-[3]">
                      Email Address
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] bg-gray-100 self-stretch h-9 rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-100 min-w-[239px] z-[4]"
                      placeholder="email address"
                      type="text"
                    />
                  </div>
                  <div className="w-[399px] flex flex-col items-start justify-start pt-0 px-0 pb-[45px] box-border gap-[8px] max-w-full">
                    <div className="relative leading-[20px] font-medium z-[3]">
                      Additional information
                    </div>
                    <textarea
                      className="[border:none] bg-gray-100 h-[122px] w-auto [outline:none] self-stretch rounded shadow-[0px_1px_1px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-start py-2 px-3 box-border font-text-sm-regular text-sm text-dimgray-100 z-[4]"
                      placeholder="Description"
                      rows={6}
                      cols={20}
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base">
                    <div className="flex flex-col items-center justify-start gap-[19px] max-w-full z-[4]">
                      <div className="relative leading-[24px] font-medium">
                        For more Enquires:
                      </div>
                      <div className="rounded-13xl flex flex-row items-center justify-center py-2 px-[15px] gap-[23px] text-xl border-[1px] border-solid border-w-25 mq800:flex-wrap">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/phone-2.svg"
                          />
                          <div className="relative leading-[30px] font-medium mq450:text-base mq450:leading-[24px]">
                            +(406) 862 1622
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/email.svg"
                          />
                          <div className="relative leading-[30px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                            elliotelectricmt@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[1745.8px] absolute !m-[0] top-[-527px] right-[-4px]">
            <div className="absolute top-[1270.15px] left-[307px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[4]" />
            <div className="absolute top-[1217.15px] left-[-935px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[5]" />
            <div className="absolute top-[868.15px] left-[406px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(200,_200,_200,_0.1),_rgba(7,_6,_6,_0))] w-[1749px] h-[548px] [transform:_rotate(-29.8deg)] [transform-origin:0_0] z-[7]" />
            <img
              className="absolute top-[577px] left-[702px] rounded-13xl w-[57px] h-[57px] overflow-hidden z-[8]"
              loading="lazy"
              alt=""
              src="/frame-15.svg"
            />
            <img
              className="absolute top-[962px] left-[855px] w-[473px] h-[403px] object-cover z-[10]"
              loading="lazy"
              alt=""
              src="/image-png-1-1@2x.png"
            />
          </div>
          <div className="w-[1221px] h-px absolute !m-[0] top-[1554px] right-[95px] box-border z-[12] border-t-[1px] border-solid border-gray-200" />
        </section>
        <DataMatrix />
      </main>
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
