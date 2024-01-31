import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5"></div>
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">Hello. I’m Rohan</h1>
        <h2 className="text-3xl font-bold md:text-5xl">
          <Typed
            strings={[
              "Full Stack Engineer",
              "Product Manager",
              "Problem Solver",
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </h2>
        <p className="tracking-wide leading-relaxed">
        Hey there, I'm Rohan, a Computer Science grad student at Santa Clara University, California. 
        My journey spans full-stack engineering and cybersecurity contributions in agile settings. 
        I thrive on challenges, adapt fast, and I'm geared up to innovate and learn. Welcome to my portfolio.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
