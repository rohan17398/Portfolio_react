import React from "react";
import projects from "../projectData";

const Project = () => {
  return (
    <>
      <section className="my-28 px-5" id="projects">
        <header className="text-2xl font-bold pt-10">
          <h2>Projects</h2>
        </header>
        <div className="my-7 space-y-24">
          {projects.map((project, index) => (
            <article
              className="flex flex-col md:justify-between md:items-center"
              key={index}
            >
              <div className="my-3 mx-1 w-full">
                <h3 className="uppercase font-bold text-lg">{project.title}</h3>
                <p className="text-gray-500">Description:</p>
                <p>{project.description}</p>
                <p className="text-gray-500">Tools:</p>
                <div className="flex flex-wrap space-x-3 pb-2">
                  {project.tools.map((tool, index) => (
                    <span
                      className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                      key={index}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-5 relative">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img
                      src="./images/icons/github.svg"
                      alt="link to github page"
                      width="24px"
                      height="24px"
                    />
                  </a>
                  {/* Uncomment and use the link property if you have a live link for the projects */}
                  {/* <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src="./images/icons/external-link.svg"
                      alt="link to live website"
                      width="24px"
                      height="24px"
                    />
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-5">
        <a
          href="https://github.com/rohan17398"
          target="_blank"
          rel="noreferrer"
          className="block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>Checkout my Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;
