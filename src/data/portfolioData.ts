// Settings & Hero
export const settingsData = {
  instagram: "https://www.instagram.com/bluedev.agency",
  text_logo: "Amir Tejareh",
  linkedin: "https://www.linkedin.com/in/amirtejareh",
  telegram: "https://t.me/amirtejareh",
  phone: "+4915569382977",
  resume: "/Resume_Amir_Tejareh.pdf",
  hero_first: "Fullstack Developer",
  hero_second: "Amir Tejareh",
  image_dark: "/images/AmirTejareh.png",
  image_light: "/images/AmirTejarehLight.png",
  github: "https://github.com/amirtejareh",
  hero_about_me:
    "10 years of experience in front-end and back-end development.",
};

// About
export const aboutData = {
  content:
    "I'm a full-stack developer with over 10 years of experience, specializing in frontend technologies like HTML, CSS, and JavaScript, along with frameworks such as React and Angular. I have a solid grasp of backend systems for seamless integration and stay updated on industry trends. I'm eager to connect with professionals to explore new opportunities and enhance the digital landscape.",
  image: "/images/about.png",
  card: [
    { title: "Years of Experience", value: "10" },
    { title: "Completed Projects", value: "10" },
    { title: "Timely Delivery", value: "100" },
    { title: "Programming Languages", value: "5" },
  ],
};

// Skills (icon paths are not used — Skills.tsx imports SVG components directly)
export const skillsData = [
  { title: "React" },
  { title: "Next.js" },
  { title: "TypeScript" },
  { title: "Node.js" },
  { title: "Tailwind CSS" },
  { title: "Docker" },
  { title: "MongoDB" },
  { title: "Nest.js" },
];

// Services
export const servicesData = [
  {
    title: "Web Design and Development",
    subtitle: "Website Responsive",
    price: "$35",
    content: [
      "Responsive Website Design",
      "Single Page Application (SPA)",
      "Full-Stack Development",
      "SEO Web Development",
    ],
    iconType: "web",
  },
  {
    title: "App Design and Development",
    subtitle: "App Responsive",
    price: "$45",
    content: [
      "Responsive Web Apps (PWA)",
      "App Prototyping",
      "Maintenance and Updates",
      "App Performance Optimization",
    ],
    iconType: "app",
  },
  {
    title: "WP Theme Implementation",
    subtitle: "Wordpress Responsive",
    price: "$40",
    content: [
      "Custom Wordpress Design",
      "Theme Instalation",
      "Responsive Theme",
    ],
    iconType: "app",
  },
];

// Work / Projects
export const projectCategories = [
  { id: 1, name: "All" },
  { id: 2, name: "Fullstack" },
];

export const projectsData = [
  {
    title: "Celpip Practice Test",
    link: "https://cellpippracticetest.com",
    categoryIds: [1, 2],
    image: "/images/celpippracticetest.png",
    attachment: "",
  },
  {
    title: "Portfolio",
    link: "https://www.amirtejareh.com",
    categoryIds: [1, 2],
    image: "/images/AmirTejarehLight.png",
    attachment: "",
  },
];

// Function to format work data for Tab component
export const getFormattedWorkData = () => {
  return projectCategories.map((category) => {
    const categoryProjects = projectsData
      .filter((project) => project.categoryIds.includes(category.id))
      .map((project) => ({
        website: {
          title: project.title,
          link: project.link,
        },
        attachment: project.attachment,
        image: project.image,
      }));

    return {
      title: category.name,
      data: categoryProjects,
    };
  });
};
