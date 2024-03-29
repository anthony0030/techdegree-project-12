/* eslint-disable filenames/match-exported */

// Application Images
import legacy from "../assets/images/AppPhotos/legacy.png";
import AppPhoto01 from "../assets/images/AppPhotos/01.png";
import AppPhoto02 from "../assets/images/AppPhotos/02.png";
import AppPhoto03 from "../assets/images/AppPhotos/03.png";
import AppPhoto04 from "../assets/images/AppPhotos/04.png";
import AppPhoto05 from "../assets/images/AppPhotos/05.png";
import AppPhoto06 from "../assets/images/AppPhotos/06.png";
import AppPhoto07 from "../assets/images/AppPhotos/07.png";
import AppPhoto08 from "../assets/images/AppPhotos/08.png";
import AppPhoto09 from "../assets/images/AppPhotos/09.png";
import AppPhoto10 from "../assets/images/AppPhotos/10.png";
import AppPhoto11 from "../assets/images/AppPhotos/11.png";
import AppPhoto12 from "../assets/images/AppPhotos/12.png";

const PROJECTS = [
  // {
  //   title: "TEST",
  //   photo: AppPhoto12,
  //   sourceUrl: "https://github.com/anthony0030/techdegree-project-12",
  //   url: "https://anthony0030.github.io/techdegree-project-12",
  //   skills: ["apache","appcelerator","apple","atom","aws","babel","backbone","bitbucket","chrome","codeignitor","coffeescript","composer","cucumber","d3js","debian","django","docker","drupal","firefox","gatling","gimp","git","github","gitlab","gradle","grunt","gulp","illustrator","inkscape","java","krakenjs","laravel","less","linux","meteor","mocha","mongo","mysql","nginx","node","nodewebkit","osx","photoshop","php","phpstorm","postgres","protractor","python","rails","seqelize","ssh","swift","tomcat","ts","ubuntu","vim","visualstudio","windows","wordpress","error"],
  //   overview: "In this project, I built a professional portfolio to showcase my Treehouse projects. I used the skills, tools, and techniques I learned throughout the Techdegree program."
  // },
  {
    title: "Personal Profile",
    photo: AppPhoto01,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-01",
    url: "https://anthony0030.github.io/techdegree-project-01",
    skills: ["html", "css", "js", "jade", "sass", "jquery", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-01",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/5ca7a91d6de340abbe125cae4961e50c",
    overview:
      "In this project, I was provided an HTML template and asked to fill in my details. I converted the template into a JADE template and the styling from CSS to SASS. I then proceeded to add a custom photo gallery. I used the built-in bower functionality of CodeKit to manage the dependencies for faster updates.",
  },
  {
    title: "Responsive Site",
    photo: AppPhoto02,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-02",
    url: "https://anthony0030.github.io/techdegree-project-02",
    skills: ["html", "css", "jade", "sass"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-02",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/f4cb99b5c0ee48ab8ca4adceb8f5aa51",
    overview:
      "In this project, I was given a mock-up consisting of three photos that represented a responsive website. One photo was of the desktop version, one was of the tablet version, and one was of the mobile version. I then created an exact duplicate using JADE and SASS.",
  },
  {
    title: "Registration Form",
    photo: AppPhoto03,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-03",
    url: "https://anthony0030.github.io/techdegree-project-03",
    skills: ["html", "css", "js", "jade", "sass", "jquery", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-03",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/f9c69f0b12f840709f96a1b8e7beba07",
    overview:
      "In this project, I was challenged to build a responsive, mobile-first registration form using a variety of HTML form elements. I built it using JADE and SASS. I also added a bunch of plug-ins for form validation.",
  },
  {
    title: "Photo Gallery",
    photo: AppPhoto04,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-04",
    url: "https://anthony0030.github.io/techdegree-project-04",
    skills: ["html", "css", "js", "jade", "sass", "jquery", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-04",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/0b84447f14204f728afd550ad62f1a96",
    overview:
      "In this project, I was excited to build a searchable photo gallery. Using JADE and SASS, I made this photo gallery responsive so that it looks great across all devices.",
  },
  {
    title: "Web Style Guide",
    photo: AppPhoto05,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-05",
    url: "https://anthony0030.github.io/techdegree-project-05",
    skills: ["css", "sass", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-05",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/19a44b27eef448da9443ab3664cf64ab",
    overview:
      "In this project, I was challenged to build a framework like bootstrap from scratch using SASS. It was great splitting the styling into multiple files that compile into a single CSS file.",
  },
  {
    title: "Video Player",
    photo: AppPhoto06,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-06",
    url: "https://anthony0030.github.io/techdegree-project-06",
    skills: ["html", "css", "js", "jade", "sass", "jquery", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-06",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/d658f87a7c084292b2ec59adfd35c5f8",
    overview:
      "In this project, I built a video player with closed captions beneath it. The captions are interactive and they highlight as the video is playing. You can also click on the captions to take you to a specific part of the video.",
  },
  {
    title: "Game Show App",
    photo: AppPhoto07,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-07",
    url: "https://anthony0030.github.io/techdegree-project-07",
    skills: ["html", "css", "js", "jade", "sass", "jquery", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-07",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/8ed9891faa9e4170a6d7694fabe70aec",
    overview:
      "In this project, I created a word-guessing game called “Wheel of Success” that a user can play in the browser. I used JavaScript to show random phrases that players try to guess by entering different letters into the game using the on-screen keyboard or their real keyboard.",
  },
  {
    title: "SVG Animations",
    photo: AppPhoto08,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-08",
    url: "https://anthony0030.github.io/techdegree-project-08",
    skills: ["html", "css", "js", "jade", "sass", "svg"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-08",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/cb18dfce7f394a33ac8851cb8f4899ba",
    overview:
      "In this project, I learned about Scalable Vector Graphics. I was tasked to improve the user interface of a web page for pets. I was provided SVGs to add to the page, which then I styled, optimized, and animated.",
  },
  {
    title: "Web Dashboard",
    photo: AppPhoto09,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-09",
    url: "https://anthony0030.github.io/techdegree-project-09",
    skills: ["html", "css", "js", "jade", "sass", "svg", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-09",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/c21087afd9644182b32ae612d47f5240",
    overview:
      "In this project, I built an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involved creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability. I utilized my knowledge of SCSS and JADE to build this project faster.",
  },
  {
    title: "Using APIs",
    photo: AppPhoto10,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-10",
    url: "https://anthony0030.github.io/techdegree-project-10",
    skills: ["html", "css", "js", "jade", "sass", "svg", "api", "bower"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-10",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/d55409a80c6543f8bb7b9659afd19852",
    overview:
      "In this project, I tapped into an API to render a page with random user data to make an 'employee directory'. The directory has a useful search feature that makes it quick and easy for the user to find the employee they are looking for.",
  },
  {
    title: "React Gallery",
    photo: AppPhoto11,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-11",
    url: "https://anthony0030.github.io/techdegree-project-11",
    skills: ["html", "css", "js", "api", "npm", "react"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-11",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/630d8b9691f349d5bd6f37c534a23498",
    overview:
      "In this project, I created an image gallery using React which connects with the Flickr API. I built the gallery components and set up routing for a flawless user experience.",
  },
  {
    title: "Online Portfolio",
    photo: AppPhoto12,
    sourceUrl: "https://github.com/anthony0030/techdegree-project-12",
    url: "https://anthony0030.github.io/techdegree-project-12",
    skills: ["html", "css", "js", "bootstrap", "npm", "react", "svg", "vcf"],
    codacyBadgeLink:
      "https://app.codacy.com/gh/anthony0030/techdegree-project-12",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/933fdff7981d4d92894f2ffafb2f00b9",
    overview:
      "In this project, I built a professional portfolio to showcase my Treehouse projects. I used the skills, tools, and techniques I learned throughout the Techdegree program.",
  },
  {
    title: "Original veaudry.pro",
    photo: legacy,
    sourceUrl: "https://github.com/anthony0030/veaudry.pro",
    url: "http://anthony0030.github.io/veaudry.pro",
    skills: ["html", "css", "js", "vcf"],
    codacyBadgeLink: "https://app.codacy.com/gh/anthony0030/veaudry.pro",
    codacyBadgeIcon:
      "https://api.codacy.com/project/badge/Grade/c8407d11341a4241bb2d55465c57ec1a",
    overview:
      "This is the Original page that was hosted on this domain. It is one of the first pages I ever made.",
  },
];

export default PROJECTS;
