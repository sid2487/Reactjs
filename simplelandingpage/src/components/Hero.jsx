import React from "react";

const Hero = () => {
  return (
    <div className="">
      <section className="bg-blue-600 w-full h-150 flex justify-center items-center px-10 py-20">
        <div className="flex max-w-7xl w-full items-center justify-between gap-60">
          {/* Text Content */}
          <div className="flex flex-col text-white gap-4 ">
            <p className="text-sm tracking-wide uppercase">
              TOP-RATED LANDING PAGE BUILDER -----
            </p>
            <h2 className="text-4xl font-bold text-white leading-snug whitespace-nowrap">
              Quickly launch high-
              <br />
              converting landing pages
            </h2>

            <p className="text-base leading-relaxed">
              Don't let complex processes or tools slow you down. Unbounce makes
              it easy for any marketer to create personalized landing
              pages—without a designer or developer.
            </p>
            <button className="mt-4 py-3 bg-white text-black font-semibold mr-40 rounded-4xl hover:bg-gray-100 transition cursor-pointer ">
              Start building for free
            </button>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="w-[800px] max-w-full object-contain"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://unbounce.com/photos/Frame-1171276146-1.png"
              alt="Landing page illustration"
            />
          </div>
        </div>
      </section>

      <section>section2</section>
      <section>section3</section>
      <section>section4</section>
      <section>section5</section>
      <section>section6</section>
      <section>section7</section>
    </div>
  );
};

export default Hero;
