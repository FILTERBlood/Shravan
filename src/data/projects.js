const projects = [
  {
    title: "MERN Blogging Platform",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Tailwind CSS",
    ],
    points: [
      "Developed a full-stack blogging platform with secure user authentication using JWT and Google OAuth.",
      "Built RESTful APIs following MVC architecture for blog creation, editing, publishing, drafts, comments, likes, and user profiles.",
      "Implemented rich-text editing, search, notifications, an analytics dashboard, role-based access, and protected routes.",
      "Designed a responsive modern UI with optimized MongoDB queries and React Hooks for efficient state management.",
    ],
    github: "https://github.com/FILTERBlood/bhootshoot-blogging.git",
    live: "",
  },
  {
  title: "Weather App",
  technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
  points: [
    "Built a weather lookup app that fetches real-time forecast data by city name using the OpenWeatherMap API.",
    "Implemented dynamic weather icons that update based on current conditions (clear, clouds, rain, drizzle, fog).",
    "Displayed temperature, humidity, and wind speed with a clean, responsive card-based UI.",
    "Added error handling for invalid city searches with user-friendly alerts.",
  ],
  github: "https://github.com/FILTERBlood/Weather-App",
  live: "",
},
{
  title: "Movie Search App",
  technologies: ["JavaScript", "HTML5", "CSS3", "OMDb API"],
  points: [
    "Developed a movie search application that retrieves real-time movie data using the OMDb API.",
    "Implemented dynamic search functionality with instant results as users type movie titles.",
    "Displayed movie posters, release year, and plot summaries in responsive hover-enabled movie cards.",
    "Integrated API error handling and fallback images to provide a smooth user experience for missing or invalid data.",
  ],
  github: "https://github.com/FILTERBlood/Movie-Search.git",
  live: "",
},
];

export default projects;