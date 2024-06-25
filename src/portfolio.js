/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Minjun Kim",
  title: "Hi, I'm Minjun!",
  subTitle: emoji(
    "A passionate student, researcher and a developer with focus at the intersection of Quantitative Analytics and Deep Learning & Natural Language Processing."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minjunnkim",
  linkedin: "https://www.linkedin.com/in/minjunnkim/",
  gmail: "ckandrew04@gmail.com",
  gitlab: "",
  facebook: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Constantly learning student, always exploring more ways to create efficient solutions",
  skills: [
    emoji(
      "⚡ Study ways computers can learn and form more efficient neural networks using CUDA and TensorRT Model Optimizer"
    ),
    emoji("⚡ Analyze datasets from vastly different areas such as TensorFlow DataSet's IMDB reviews, Riot Games's Teamfight Tactics game data, financial data from SEC EDGAR, or even medical data from Kaggle."),
    emoji(
      "⚡  Extract useful information from datasets and determine which features are the most important ones"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "far fa-copyright"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorRT",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fab fa-gripfire"
    },
    {
      skillName: "CUDA",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Amazon S3",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "far fa-file-code"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2024 - December 2025",
      desc: "BSMS Program, Concentration in Machine Learning. 4.0 GPA",
      descBullets: [
        "Machine Learning",
        "Deep Learning",
        "Emerging Database Technologies",
      ]     
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Concentration in Intelligence and Theory, Minor in Economics. 4.0 GPA",
      descBullets: [
        "Natural Language Processing",
        "Artificial Intelligence",
        "Database Systems",
        "Algorithms",
        "Economics of Entrepreneurship"
      ]
    },
    {
      schoolName: "College of the Canyons",
      logo: require("./assets/images/cocLogo.jpg"),
      subHeader: "Associate of Science in Computer Science, Mathematics, and Accounting",
      duration: "July 2021 - June 2023",
      desc: "Completed through Dual Enrollment entirely during high school. 4.0 GPA",
      descBullets: [
        "Data Structures",
        "Databases",
        "Linear Algebra",
        "Differential Equations",
        "Principles of Accounting"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Intern",
      company: "Robomation",
      companylogo: require("./assets/images/robomationLogo.png"),
      date: "July 2021 – November 2021",
      desc: "",
      descBullets: [
        "Created projects for commercial use using small robots created by the company",
        "Robotic recreation of a game from Squid Games, utilizing Computer Vision concepts. Used motion detection to detect if a player in sight is moving and object recognition to determine the player robot."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const personalProjects = { 
  title: "Personal Projects",
  subtitle: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/tftLogo.png"),
      projectName: "TFT Post-Game Analytics",
      projectDesc: "Post-game analytics on data for Teamfight Tactics (TFT) using Riot API and various machine learning and deep learning techniques. ",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/minjunnkim/tft_analysis"
        }
      ]
    },
    {
      image: require("./assets/images/hftLogo.jpg"),
      projectName: "High-Frequency Trading Predictive Analysis",
      projectDesc: "Analysis of high-frequency trading data to identify patterns, anomalies, and insights.",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/minjunnkim/hft_analysis"
        }
      ]
    },
    {
      image: require("./assets/images/imdbLogo.png"),
      projectName: "IMDb Sentiment Analysis",
      projectDesc: "Sentiment Analysis model that classifies movie reviews into positive or negative sentiments based on a model trained on the imdb_reviews dataset from the TensorFlow Dataset (tfds) library",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/minjunnkim/imdb_sentiment"
        }
      ]
    },
  ],
  display: true 
}

// Some big projects you have worked on

const bigProjects = {
  title: "Coursework Projects",
  subtitle: "Projects from Georgia Tech Courses",
  projects: [
    {
      image: require("./assets/images/housingLogo.jpg"),
      projectName: "Housing Price Prediction",
      projectDesc: "Employs supervised and unsupervised machine learning algorithms to accurately predict housing prices. Refer to the Final Report page.",
      footerLink: [
        {
          name: "Visit Streamlit App",
          url: "https://housing-price-prediction-cs7641.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/respdiagassistLogo.png"),
      projectName: "Respiratory Diagnosis Assistant",
      projectDesc: "Tool designed to assist in diagnosing respiratory conditions based on audio recordings. It utilizes Amazon S3 for storing audio files and MongoDB for managing data. Uses Gated Recurrent Units (GRU).",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/nabinkim0318/Respiratory-Diagnosis-Assistant/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificates 🏆"),
  subtitle:
    "Certificates from MOOCs that I've done. Spans from subjects in Physics, Law, to Mathematics and Computer Science.",

  achievementsCards: [
    {
      title: "Mathematics for Machine Learning",
      subtitle:
        "Coursera | Imperial College London",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/fd7ee3f7e56c2ea8fc7cbb9660d3e4c6"
        },
      ]
    },
    {
      title: "Introduction to Complex Analysis",
      subtitle:
        "Coursera | Wesleyan University",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/c554ea743b31fa4f770bc4af1c1a2d1d"
        },
      ]
    },

    {
      title: "C Programming with Linux",
      subtitle: "edX | Dartmouth & IMT",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://credentials.edx.org/credentials/559dd859b62c4f01b2e74c91158aa473/"
        },
      ]
    },
    
    {
      title: "Cloud Application Development Foundations",
      subtitle: "edX | IBM",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://credentials.edx.org/credentials/152b773e036341879af2c8803654ea75/"
        },
      ]
    },
    
    {
      title: "Front-End Web Developer",
      subtitle: "edX | W3C",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://credentials.edx.org/credentials/58f1724c6d91490cbe71ea4ad52e7511/"
        },
      ]
    },
    
    {
      title: "HTML5 from W3C",
      subtitle: "edX | W3C",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "link",
          url: "https://credentials.edx.org/credentials/ffc3de440cc64400b0189ffcbd965f3f/"
        },
      ]
    },

    {
      title: "Astrophysics",
      subtitle: "edX | ANU",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "link",
          url: "https://credentials.edx.org/credentials/e301a73e892c4de8840af9664774e317/"
        },
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+1(818)426-4349",
  email_address: "ckandrew04@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  personalProjects
};
