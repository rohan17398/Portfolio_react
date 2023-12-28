// Experience.js
import React from "react";
import experiences from "../experienceData"; // Make sure the path is correct

const Experience = () => {
  return (
    <section className="my-28 px-5" id="experience">
      <header className="text-2xl font-bold pt-10">
        <h2>Experience</h2>
      </header>
      <div className="my-7 space-y-24">
        {experiences.map((experience, index) => (
          <article className="flex flex-wrap md:justify-between md:items-center" key={index}>
            <div className="flex flex-col space-y-3 my-3 mx-1 w-full">
              <h3 className="uppercase font-bold text-lg">
                {experience.title} - {experience.company}
              </h3>
              <p className="text-gray-500">{experience.duration} - {experience.location}</p>
              <p>{experience.description}</p>
              {/* <div className="flex flex-wrap space-x-3 pb-2">
                {experience.tools.map((tool, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
