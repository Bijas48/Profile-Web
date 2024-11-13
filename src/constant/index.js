import imageProject1 from '@/assets/images/FinancyQ.png'
import imageProject2 from '@/assets/images/UMM-Refactor-Website.png'
import imageProject3 from '@/assets/images/SahabatBK.png'
import imageProject4 from '@/assets/images/MendangMendingApp.png'
import imageProject5 from '@/assets/images/Vue-Project.png'
import imageExperience1 from '@/assets/images/Logo_UPI.png'
import imageExperience2 from '@/assets/images/Prolite_News.png'
import imageExperience3 from '@/assets/images/GDSC.jpg'

const projects = [
  {
    image: imageProject1,
    title: 'FinancyQ',
    desc: 'This App is a mobile application dedicated to personal finance management. It empowers users with educational resources for effective financial management. Through intuitive features such as expense tracking and budgeting, FinancyQ ensures users have control over their finances. Whether for daily expenses or long-term goals, FinancyQ offers a comprehensive solution to enhance financial literacy and foster responsible financial habits.',
    link: 'https://github.com/Bijas48/FinancyQ-Capstone',
    type: 'Project',
  },
  {
    image: imageProject2,
    title: 'Website Refactor',
    desc: 'This project was assigned by the IT Team at my internship to refactor one of their existing websites using a new programming language, Vue.js. The refactoring process involved utilizing Tailwind CSS for styling, as well as incorporating several built-in libraries, including VueUse and ApexCharts.js, to enhance functionality and visualization.',
    link: 'https://github.com/Bijas48/UMM-web-refactor',
    type: 'Task',
  },
  {
    image: imageProject3,
    title: 'SahabatBK',
    desc: 'SahabatBK is an innovative application designed to overcome the challenges junior high school students face in accessing counseling services. With limited school counselors and the negative stigma surrounding visits to counseling offices, students are often reluctant to seek help. This digital solution allows students to receive guidance online, eliminating these barriers. Built with Python, the app features a chatbot powered by OpenAI, LangChain, and Streamlit, which maintains conversation context and provides coherent, personalized responses for a more interactive and efficient user experience.',
    link: 'https://github.com/Bijas48/AplikasiBK',
    type: 'Project',
  },
  {
    image: imageProject4,
    title: 'Mendang Mending App',
    desc: 'Mendang Mending App is a simple web application that compares the experience of eating porridge stirred versus not stirred, providing reasons for each preference. It utilizes the Google Gemini API as a token solver and AI-driven assistant to generate insightful responses, helping users explore the benefits and drawbacks of each approach in a fun and interactive way.',
    link: 'https://github.com/Bijas48/FinancyQ-Capstone',
    type: 'Exploration',
  },
  {
    image: imageProject5,
    title: 'Vue Job',
    desc: 'Vue Job is an exploratory web application developed to learn Vue.js. It serves as a hands-on project to experiment with commonly used features on websites, incorporating Vue.js libraries and utilities. The web application explores various aspects of Vue.js to help users understand its capabilities and best practices in real-world web development scenarios.',
    link: 'https://github.com/Bijas48/Vue-Job-',
    type: 'Exploration',
  },
]
const experiences = [
  {
    title: 'Website Editor and Data Entry at PGSD UPI Purwakarta',
    date: 'October 2022 - October 2022',
    image: imageExperience1,
    desc: [
      "Played a pivotal role in the campus accreditation process by ensuring the department's website was meticulously updated and maintained.",
      'Managed the accurate entry of accreditation data and verified supporting documentation.',
      "Enhanced the department's web presence to align with SEO best practices.",
      'Collaborated closely with faculty to uphold the integrity of accreditation efforts.',
      "Developed digital resources that supported the department's strategic accreditation objectives.",
    ],
    link: 'https://kd-purwakarta.upi.edu/',
    type: 'Seasonal',
    color: 'bg-slate-300',
  },
  {
    title: 'News Writer at Prolite News',
    date: 'June 2023 - August 2023',
    image: imageExperience2,
    desc: [
      'Crafted a diverse array of content across multiple categories, including: General news, Events, National and international affairs, Business, Lifestyle, Automotive, Technology, Community stories',
      'Focused on delivering information tailored to readers’ needs and benefits.',
      'Merged insightful news articles with engaging community activities to foster a well-informed public.',
    ],
    link: 'https://prolitenews.com/',
    type: 'Part-Time',
    color: 'bg-slate-300',
  },
  {
    title: 'Member Google Developer Student Clubs UPI',
    date: 'November 2023 - July 2024',
    image: imageExperience3,
    desc: [
      'Participated in Web Development workshops',
      'Engaged in Cloud Computing learning sessions',
      'Assisted in building a supportive tech community',
      'Attended events such as Build with AI and DevFest',
    ],
    link: 'https://www.linkedin.com/company/google-developer-student-clubs-upi',
    type: 'Seasonal',
    color: 'bg-slate-300',
  },
]
const techs = [
  'devicon:vuejs',
  'devicon:googlecloud',
  'devicon:kubernetes',
  'devicon:bash',
  'devicon:javascript',
  'devicon:typescript',
  'devicon:docker',
  'devicon:mysql-wordmark',
  'devicon:postgresql',
  'devicon:prisma',
  'devicon:sequelize',
  'devicon:express',
  'devicon:bootstrap',
  'devicon:flutter',
  'devicon:dart',
  'devicon:git',
  'devicon:github',
  'devicon:ubuntu',
  'devicon:html5',
  'devicon:css3',
  'devicon:linux',
  'devicon:tailwindcss',
  'devicon:nodejs',
  'devicon:python',
  'devicon:streamlit',
  'devicon:jupyter-wordmark',
  'devicon:npm',
  'devicon:notion',
  'devicon:trello',
]
const certificates = [{}]

export { projects, experiences, techs, certificates }
