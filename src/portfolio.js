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
  username: "Abdul Qadeer",
  title: "Hi all, I'm Abdul Qadeer",
  subTitle: emoji(
    "I am a dedicated Full Stack Software Engineer  🚀 with a rich experience in developing web and mobile applications. My expertise spans across JavaScript, React.js, Node.js, React Native, and a variety of other innovative libraries and frameworks. I am passionate about crafting high-quality, efficient, and scalable software solutions. My commitment to continuous learning and improvement drives me to stay updated with the latest trends and technologies in the industry, ensuring that I can deliver the best results for every project I undertake."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/qadeer77",
  linkedin: "https://www.linkedin.com/in/abdul-qadeer-887332242/",
  gmail: "aq579733@gmail.com",
  facebook: "https://www.facebook.com/people/Abdul-Qadeer/pfbid0HaD2fEraLhGm6f8i7Cmm6FqWRbrFCQ9Z6LQQu6q11fLCWpCwgzXcWhJQKCV7KgXol/?mibextid=ZbWKwL",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Passionate Full Stack Developer Exploring Diverse Tech Stacks",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end/user interfaces for web and mobile applications"
    ),
    emoji("⚡ Build Progressive Web Applications (PWA) using modern SPA frameworks"),
    emoji(
      "⚡ Integrate third-party services and APIs such as Firebase, AWS, and Digital Ocean"
    ),
    emoji(
      "⚡ Design and manage scalable backend infrastructures and databases"
    )
  ],

  /* Make sure to include the correct Font Awesome class names to view your icons
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "AWS",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "Docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Allama Iqbal Open University",
      logo: require("./assets/images/Allama_Iqbal_Open_University_logo.png"),
      subHeader: "Bachelor of Business Administration (BBA)",
      duration: "April 2023 - Present ",
      desc: "Ranked in the top 10% of the program. Studied courses in Software Engineering, Web Security, Operating Systems, and more.",
      descBullets: [
        "Achieved a top 10% ranking in the BBA program",
        "Completed courses in Software Engineering, Web Security, and Operating Systems"
      ]
    },
    {
      schoolName: "Govt Superior Science College Karachi",
      logo: require("./assets/images/superior.jfif"),
      subHeader: "FSC Intermediate",
      duration: "August 2019 - June 2021",
      desc: "Focused on Pre-Engineering subjects, achieving high marks in Mathematics, Physics, and Chemistry. Actively participated in science fairs and technical workshops.",
      descBullets: [
        "Excelled in Pre-Engineering subjects with top grades",
        "Engaged in extracurricular activities including science fairs and technical workshops"
      ]
    },
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Instant Solution Lab",
      companylogo: require("./assets/images/1672573089601.jfif"),
      date: "October 2023 – Present",
      desc: "Leading the development and implementation of advanced web and mobile applications, ensuring optimal performance and user experience.",
      descBullets: [
        "Architecting and developing scalable, high-performance software solutions",
        "Mentoring junior engineers and fostering a culture of continuous improvement"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Tech Kolachi",
      companylogo: require("./assets/images/1630570088076.jfif"),
      date: "June 2021 – June 2024",
      desc: "Spearheaded multiple projects, driving innovation and efficiency in software development processes while collaborating with cross-functional teams.",
      descBullets: [
        "Designed and deployed RESTful APIs and microservices",
        "Enhanced application performance, reducing load times by 30%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Regex dot Private Limited",
      companylogo: require("./assets/images/1633713232367.jfif"),
      date: "February 2023 – October 2023",
      desc: "Developed robust software applications, focusing on reliability, maintainability, and scalability to meet the dynamic needs of the business.",
      descBullets: [
        "Implemented modern front-end technologies to improve user interfaces",
        "Collaborated with product managers to define and execute product roadmaps"
      ]
    },
    {
      role: "JavaScript Developer",
      company: "Strugbits",
      companylogo: require("./assets/images/download.png"),
      date: "January 2022 – February 2023",
      desc: "Specialized in building interactive, user-friendly web applications using JavaScript frameworks, contributing to several high-profile projects.",
      descBullets: [
        "Developed and maintained code for client-side applications",
        "Participated in code reviews and provided constructive feedback"
      ]
    },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Startups and Companies I Helped to Build Their Technology",
  projects: [
    {
      image: require("./assets/images/unnamed.webp"),
      projectName: "HeadacheFree App",
      projectDesc: "A comprehensive solution designed to help users manage and alleviate headaches through personalized treatment plans and real-time monitoring.",
      footerLink: [
        {
          name: "Visit Mobile App",
          url: "https://play.google.com/store/apps/details?id=com.hrp.co"
        },
        // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/unnamed (1).webp"),
      projectName: "OptiLingo: Learn New Languages",
      projectDesc: "An innovative language learning app that helps users achieve fluency through engaging and practical lessons, available in multiple languages.",
      footerLink: [
        {
          name: "Visit Mobile App",
          url: "https://play.google.com/store/apps/details?id=com.optilingo_app&hl=en&pli=1"
        },
        // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-color.png"),
      projectName: "Optilingo",
      projectDesc: "A web-based platform providing language learning resources and tools to help users become fluent in new languages efficiently and effectively.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.optilingo.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Web & App Development",
      subtitle:
        "Learn how to develop Web & Mobile Application",
      image: require("./assets/images/1584706875103.jfif"),
      imageAlt: "",
      footerLink: [
      ]
    },
    {
      title: "Python Development",
      subtitle:
        "Learn how to work using Python",
      image: require("./assets/images/landscape_logo.png"),
      imageAlt: "",
      footerLink: [
       
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      // title: "Build Actions For Google Assistant",
      // subtitle: "Codelab at GDG DevFest Karachi 2019",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3131104203",
  email_address: "aq579733@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
