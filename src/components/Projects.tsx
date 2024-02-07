const Projects = () => {
  const projects = [
    {
      title: "Going Places",
      description: "Flights, Airports and Weather API's.",
      githubLink: "https://carlwebster125.github.io/Project-1/",
      languages: ["HTML", "CSS", "JavaScript"],
      image: "/images/project1.png",
    },
    {
      title: "PokeBlogs",
      description: "Editing Blog Posts",
      githubLink: "",
      languages: ["PostgreSQL", "React"],
      image: "/images/project2.png",
    },
    {
      title: "Squad Up",
      description: "Searching for Pokemon and Adding Them to Your Team",
      githubLink: "https://capstone-project-r0l5.onrender.com/",
      languages: ["PostgreSQL", "React"],
      image: "/images/project3.png",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} Image`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub/Render
            </a>
            {/* <a href={project.renderLink} target="_blank" rel="noopener noreferrer">
            /Render
          </a> */}
          </li>
        ))}
      </ul>

      <section className="languages-section">
        <div className="languages">
          {projects.map((project) =>
            project.languages.map((language, index) => (
              <li key={index}>{language}
              
              
              </li>
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default Projects;
