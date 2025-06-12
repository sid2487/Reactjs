import React from 'react'
import asset37 from "../../assets/asset 37.png"
import asset38 from "../../assets/asset 38.png"

const BentoGrid = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
      <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">
        TODesktop handles the details
      </h2>
      <div
        className="flex flex-col gap-6  lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: "96px" }}
      >
        <div class="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200;">
          <div class="bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50; rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center ">
            <h3 className="text-2xl">Native Notifications</h3>
            <img src={asset37} alt="" />
          </div>
        </div>

        <div class="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200;">
                    <div class="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50;">
                        <h3 class="text-2xl">Native Notifications</h3>
                        <p class="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38} alt="" />
                    </div>
                </div>

                <div class="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200;">
                    <div class="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50;">
                        <h3 class="text-2xl">Native Notifications</h3>
                        <img src={asset38} alt="" />
                    </div>
                </div>

                <div class="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200;">
                    <div class="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50;">
                        <h3 class="text-2xl">Native Notifications</h3>
                        <p class="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38}/>
                    </div>
                </div>

                <div class="row-start-4 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div class="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50;">
                        <h3 class="text-2xl">Native Notifications</h3>
                        <img src={asset38} alt=""/>
                    </div>
                </div>

                <div class="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200;">
                    <div class="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50;">
                        <h3 class="text-2xl">Native Notifications</h3>
                        <p class="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset37} alt=""/>
                    </div>
                </div>

      </div>
    </div>
  );
}

export default BentoGrid