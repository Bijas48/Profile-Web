import imageProject1 from '@/assets/images/FinancyQ.png'
import imageProject2 from '@/assets/images/UMM-Refactor-Website.png'
import imageProject3 from '@/assets/images/SahabatBK.png'
import imageProject4 from '@/assets/images/MendangMendingApp.png'
import imageProject5 from '@/assets/images/Vue-Project.png'
import imageExperience1 from '@/assets/images/Logo_UPI.png'
import imageExperience2 from '@/assets/images/Prolite_News.png'
import imageExperience3 from '@/assets/images/GDSC.jpg'
import imageEducation1 from '@/assets/images/Logo_UPI.png'
import imageEducation2 from '@/assets/images/logo_bangkit.png'
import imageCertificate1 from '@/assets/images/dicoding_logo.jpg'
import imageCertificate2 from '@/assets/images/gcsb_logo.jpg'
import imageCertificate3 from '@/assets/images/google_logo.jpg'

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
    date: 'October 2022',
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
    date: 'June - August 2023',
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
  'logos:pinia',
  'devicon:github',
  'devicon:ubuntu',
  'devicon:html5',
  'devicon:css3',
  'devicon:vercel',
  'devicon:linux',
  'devicon:terraform',
  'devicon:tailwindcss',
  'devicon:nodejs',
  'devicon:python',
  'devicon:streamlit',
  'devicon:jupyter-wordmark',
  'devicon:npm',
  'devicon:notion',
  'devicon:trello',
]
const certificates = [
  {
    image: imageCertificate3,
    title: 'Associate Cloud Engineer Certification',
    subtitle: 'Google',
    link: 'https://www.credly.com/badges/7d0d43a6-5840-4846-a87e-fcf8bac8096f/linked_in_profile',
  },
  {
    image: imageCertificate1,
    title: 'Menjadi Google Cloud Architect',
    subtitle: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/4EXG7Y9LEPRL',
  },
  {
    image: imageCertificate2,
    title: 'Google Cloud Computing Foundations Certificate',
    subtitle: 'Google Cloud Skills Boost',
    link: 'https://www.credly.com/badges/f9255ba6-28f3-44fb-84d3-55f73890ff0f/linked_in_profile',
  },
  {
    image: imageCertificate2,
    title: 'Google Cloud Big Data and Machine Learning Fundamentals',
    subtitle: 'Google Cloud Skills Boost',
    link: 'https://www.cloudskillsboost.google/public_profiles/312b34f6-945a-45a2-8749-0f54a483c5e7/badges/11324093?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    image: imageCertificate1,
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud',
    subtitle: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/MRZMEQGY0PYQ',
  },
  {
    image: imageCertificate1,
    title: 'Belajar Penerapan Machine Learning dengan Google Cloud',
    subtitle: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/QLZ974EY7P5D',
  },
  {
    image: imageCertificate1,
    title: 'Menjadi Google Cloud Engineer',
    subtitle: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/L4PQ1862QXO1',
  },
  {
    image: imageCertificate1,
    title: 'Belajar Dasar Pemrograman JavaScript',
    subtitle: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/RVZKR64LQPD5',
  },
  {
    image: imageCertificate3,
    title: 'Google Cybersecurity',
    subtitle: 'Google Career Certificates',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/63PC54V9426L',
  },
  {
    image: imageCertificate3,
    title: 'Google IT Support',
    subtitle: 'Google Career Certificates',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CE3KWPTWP2K2',
  },
]
const educations = [
  {
    image: imageEducation1,
    title: 'Education of System and Information Technology Indonesia University of Education',
    date: 'August 2021 - Present',
    desc: [
      'Current GPA: 3.76/4.00',
      'Participated in the website development for PGSD UPI accreditation',
      'Competed in Mobile Legends E-Sports and won First Place in an intercampus competition',
      'Served as a teaching assistant for the Networking course and evaluated students for the UKK TKJ Module 4 at a vocational school',
    ],
    link: 'https://www.upi.edu/',
  },
  {
    image: imageEducation2,
    title: 'Cloud Computing Bangkit Academy By Google, GoTo, Traveloka',
    date: 'February - July 2024',
    desc: [
      'Achieving top 10% Distinction Graduate in Cloud Computing Development',
      'Completed/Developed a major recommendation application with my capstone team',
      'Studied networking, back-end development, deployment on Google Cloud, machine learning, and REST API creation',
      'Selected from 57k+ applicants to join Bangkit – an interdisciplinary program by Google to prepare for a career in leading Indonesian tech companies',
    ],
    link: 'https://grow.google/intl/id_id/bangkit/?tab=machine-learning',
  },
]

export { projects, experiences, techs, educations, certificates }
