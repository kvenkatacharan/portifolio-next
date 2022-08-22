import self from "../public/img/self.jpg";
import mock1 from "../public/img/mock1.png";
import mock2 from "../public/img/mock2.png";
import mock3 from "../public/img/mock3.png";
import mock4 from "../public/img/mock4.png";
import mock5 from "../public/img/mock5.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Charan",
  lastName: "K",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "I'm a front-end developer.",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🍫",
      text: "Fueled by chocolate",
    },
    {
      emoji: "🌎",
      text: "Based in the Andhra Pradesh, Kakinada",
    },
    {
      emoji: "💼",
      text: "Software Engineer at Proximity Works",
    },
    {
      emoji: "📧",
      text: "kvenkatcharan@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: FaFacebookF,
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: FaInstagram,
      label: "instagram",
    },
    {
      link: "https://github.com",
      icon: FaGithub,
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: FaLinkedinIn,
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: FaTwitter,
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: " Hello! I'm Charan, a front-end developer from Kakinada. I love creating web applications with React,I studied MSIT at JNTUK, I enjoy long walks on the beach, I've been working for Proximity works since may 2022",
  skills: {
    proficientWith: [
      "Javascript",
      "Typescript",
      "React",
      "Next",
      "Tailwind",
      "Material UI",
      "Git",
      "Github",
      "JIRA",
      "Custom React Hooks",
      "React Testing library",
      "Jest",
    ],
    exposedTo: ["Nodejs", "Express", "Python", "Firebase", "Mongodb", "SQL"],
  },
  hobbies: [
    {
      label: "Reading",
      emoji: "📖",
    },
    {
      label: "Playing Cricket",
      emoji: "🏏",
    },
    {
      label: "Movies",
      emoji: "🎥",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
