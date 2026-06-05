"use client";

import { motion } from "framer-motion";
import { useEffect, useState,useRef } from "react";
import "tailwindcss";


const navItems = ["home", "about", "journal", "career","projects", "cv", "certificates"];

const journalItems = [
"Developed hands-on experience in software development by working on real-world client projects during my internship, where I learned how to design, develop, test, and maintain web applications in a professional environment.",

"Improved my technical skills in WordPress, PHP, React.js, JavaScript, HTML, CSS, and Tailwind CSS through the development of client websites and academic projects.",

"Strengthened my communication and teamwork abilities by collaborating with developers, designers, project managers, and clients to gather requirements and deliver successful project outcomes.",

"Gained practical experience in client-based web development through projects such as the Farade Education Website and EC Physics Website for Erendra Chrysanthus Sir, where I was responsible for development, customization, and implementing user requirements.",

"Enhanced my problem-solving and troubleshooting skills by identifying, analyzing, and resolving technical issues during website development, maintenance, and deployment stages.",

"Developed knowledge in database management, API integration, authentication systems, and payment gateway implementation through projects such as the Sienna Retreat Hotel Management System and E-Pal E-Commerce Platform.",

"Improved my understanding of data engineering and business intelligence by designing ETL pipelines, data warehouses, and interactive dashboards in projects such as the Airbnb Business Intelligence System and Electric Vehicle Analytics Dashboard.",

"Gained exposure to Artificial Intelligence and Machine Learning concepts through the development of AI-powered projects, including a Multi-Agent Culture Travel Guide System and a Language Assistant AI Bot using Python and API integrations.",

"Learned the importance of project planning, documentation, and version control while managing multiple academic, freelance, and industry projects simultaneously.",

"Developed a strong professional mindset by balancing university studies, internship responsibilities, and freelance projects, which improved my adaptability, time management, and commitment to continuous learning."
];

const careerPlans = ["Short-Term", "Medium-Term", "Long-Term"];
const certificates = [1, 2, 3];



export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("home");

  /* ================= THEME ================= */
  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme as "light" | "dark");
  }, []);

 /* ================= CERT SLIDER REF ================= */
  const certRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = certRef.current;
    if (!container) return;

    let scrollPos = 0;

    const interval = setInterval(() => {
      scrollPos += 1;

      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
  const html = document.documentElement;
  theme === "dark"
    ? html.classList.add("dark")
    : html.classList.remove("dark");

  localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

     const careerPlans = [
  {
    title: "Short-Term",
    content: [
      "Complete BSc (Hons) in IT at SLIIT",
      "Get a Junior Data Engineer / Data Analyst role",
      "Improve SQL & Python skills",
      "Learn ETL tools (SSIS, Airflow basics)",
      "Build 2–3 strong data projects",
      "Earn AWS / Microsoft certifications",
    ],
  },
  {
    title: "Medium-Term",
    content: [
      "Work as a Data Engineer in a reputed company",
      "Build scalable data pipelines",
      "Gain experience with AWS & Azure",
      "Learn Big Data tools (Spark, Hadoop)",
      "Improve data warehousing knowledge",
      "Start working with machine learning systems",
    ],
  },
  {
    title: "Long-Term",
    content: [
      "Become a Senior Data Engineer / Data Scientist",
      "Design large-scale data architectures",
      "Specialize in AI & Machine Learning",
      "Lead data-driven projects",
      "Explore freelancing or tech entrepreneurship",
    ],
  },
];



const certificates = [
  {
    title: "Stage1- AI/ML Engineer Certificate (SLIIT)",
    image: "/1.png",
  },
  {
    title: "C Programming- Introduction (Allison Academy)",
    image: "/2.png",
  },
  {
    title: "Introdction to PHP (Allison Academy)",
    image: "/3.png",
  },
  {
    title: "React Javascript- Fundamentals to coding & new begining (Allison Academy)",
    image: "/4.png",
  },
  {
    title: "Get Started With PowerApps (Microsoft)",
    image: "/5.png",
  },

];

const projects = [
  {
    title: "Sienna Retreat Web Development",
    description: "A JavaScript + Tailwind CSS + Chatbot + Firebase + Mysql + JavaScript + React platform where users can explore and book while the admins can check the business status.",
    image: "/sienna.png",
    github: "https://github.com/Binuka321/SiennaRetreat",
  },
  {
    title: "Restaurant management system developed for Lunu Mirisa restaurant",
    description: " Restaurant management system developed for Lunu Mirisa restaurant using Reactjs, Vite, Tailwind.css, GitHub, and Mongodb",
    image: "/lunu.png",
    live: "https://lunu-mirisalk.vercel.app/",
    github: "https://github.com/akilaManu-MaHiTo/LunuMirisa",
  },
  {
    title: "CCL Academy Website",
    description: "Web development for CCL Academy, a leading educational institution, using wordpress.",
    image: "/ccl.png",
    live: "https://cclacademy.lk/",
  },
  {
    title: "Mathale Aluviharaya temple web development",
    description: " Developed a responsive educational website using React.js to showcase the history, culture, and religious significance of Aluvihare Rock Temple, featuring interactive content and a user-friendly design.",
    image: "/aluviharaya.png",
    live: "https://www.aluviharaya.lk/",
  },
  
];

  /* ================= SCROLL TRACKING ================= */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) =>
        document.getElementById(id)
      );

      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

 
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen scroll-smooth">
      {/* ================= NAVBAR (UNCHANGED) ================= */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur z-50 flex items-center justify-between px-6 py-4">

  {/* BRAND */}
  <div className="font-bold text-white">
    Portfolio
  </div>

  {/* NAV LINKS */}
  <div className="flex gap-8">
    {navItems.map((id) => (
      <a
        key={id}
        href={`#${id}`}
        className={`relative pb-1 capitalize transition ${
          activeSection === id
            ? "text-purple-600"
            : "text-slate-100 hover:text-slate-300"
        }`}
      >
        {id}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-purple-600 transition-all duration-300 ${
            activeSection === id ? "w-full" : "w-0"
          }`}
        />
      </a>
    ))}
  </div>

  {/* CONTACT ICONS */}
  <div className="hidden md:flex items-center gap-4">

    <a href="+94702536667" className="hover:scale-110 transition">
      <img src="/phone-call.png" className="w-5 h-5" />
    </a>

    <a href="mailto:binukasomarathne@gmail.com" className="hover:scale-110 transition">
      <img src="/gmail.png" className="w-5 h-5" />
    </a>

    <a
      href="https://www.linkedin.com/in/binuka-somarathne/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <img src="/linkedin.png" className="w-5 h-5" />
    </a>

    <a
      href="https://github.com/Binuka321"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <img src="/github.png" className="w-5 h-5" />
    </a>

  </div>

  {/* THEME TOGGLE */}
  <button
    onClick={toggleTheme}
    className="px-3 py-1 border rounded-md text-white"
  >
    {theme === "dark" ? "☀️" : "🌙"}
  </button>

</nav>

      {/* ================= HERO (UNCHANGED) ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-16 pt-24 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            >
              Building digital <br />
              products, brands <br />
              <span className="text-purple-500">experience.</span>
            </motion.h1>

            <p className="mt-6 text-white/80 max-w-lg">
              I’m <span className="font-semibold">Binuka Somarathne</span>, a Full Stack Developer.
              I build modern, scalable web applications using React, Spring Boot, and MongoDB.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#cv"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-start -mt-10 md:-mt-20">
            <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

            <img
              src="/image.png"
              alt="profile"
              className="relative w-[320px] md:w-[480px] lg:w-[550px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
  <section id="about" className="min-h-screen flex items-center px-6 md:px-16 py-20">
  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE (LEFT ON DESKTOP) */}
    <div className="relative flex justify-center md:order-1 order-2">
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <img
        src="/about.jpeg"
        alt="profile"
        className="relative w-[280px] md:w-[360px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* TEXT (RIGHT ON DESKTOP) */}
    <div className="md:order-2 order-1">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-purple-600">
        About Me
      </h2>

      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
        I’m a Full Stack Developer passionate about building modern, scalable applications 
        using clean design and efficient code.
      </p>

      <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
        I enjoy solving complex problems and turning them into simple, beautiful solutions. 
        I focus on performance, user experience, and clean architecture in every project I build.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition" onClick={() => window.location.href = "https://wa.me/94702536667"}>
          Contact Me
        </button>

        <button className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-slate-900 dark:text-purple-600">
          Download CV
        </button>
      </div>
    </div>

  </div>

  
</section>

      {/* ================= JOURNAL ================= */}
  <section id="journal" className="min-h-screen py-20 px-6 md:px-10">

  {/* TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-purple-600">
    Reflective Journal
  </h2>

  {/* WRAPPER */}
  <div className="relative max-w-7xl mx-auto">

    {/* TIMELINE LINE */}
    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-300 dark:bg-slate-700"></div>

    {/* SCROLL CONTAINER */}
    <div className="overflow-hidden">
      <div className="flex gap-10 px-4 min-w-max animate-scroll">

        {journalItems.map((text, i) => (
          <div
            key={i}
            className="relative snap-center flex-shrink-0 w-[280px]"
          >

            {/* DOT */}
            <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

            {/* CARD */}
            <div className="mt-6 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">            

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {text}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>


{/* ================= CAREER ================= */}
<section id="career" className="min-h-screen py-24 px-6 md:px-10 bg-gradient-to-b from-slate-950 to-slate-900">
  <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
    Career Roadmap
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {careerPlans.map((plan, i) => (
      <div
        key={i}
        className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
      >
        <div className="rounded-2xl bg-slate-950 p-6 h-full shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-purple-500/30">

          {/* Title */}
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            {plan.title}
          </h3>

          {/* List */}
          <ul className="space-y-3 text-sm text-slate-300">
            {plan.content.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-purple-500">●</span>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    ))}

  </div>
</section>




     <section id="projects" className="min-h-screen py-20 px-10">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-purple-600">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {projects.map((project, i) => (
      <div
        key={i}
        className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 
        shadow-md transition duration-300 transform hover:scale-105 
        hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] dark:hover:shadow-[0_0_30px_rgba(192,132,252,0.8)]"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-purple-600 mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {project.description}
          </p>

          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-sm px-3 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700"
              >
                Live
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-sm px-3 py-1 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ================= CV ================= */}
      <section id="cv" className="min-h-screen flex items-center justify-center py-20 px-6">
  <div className="max-w-3xl w-full text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-purple-500">
      Curriculum Vitae
    </h2>

    <p className="text-slate-600 dark:text-slate-400 mb-10">
      Want to know more about my experience, skills, and projects?  
      Download my CV and explore my journey.
    </p>

    {/* Card */}
    <div className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
      
      <div className="rounded-2xl bg-white dark:bg-slate-900 p-10 shadow-lg transition duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
        
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          My Resume
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          A detailed overview of my education, technical skills, and professional experience.
        </p>

        {/* Download Button */}
        <a
          href="/Binuka Somarathne CV Data Engineer (2).pdf"  // <-- replace with your CV file path
          download
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium 
          shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300"
        >
          Download CV
        </a>

      </div>
    </div>

  </div>
</section>

      {/* ================= CERTIFICATES ================= */}
     <section id="certificates" className="min-h-screen py-20 px-6">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-purple-500">
    Certificates
  </h2>

  <div className="max-w-6xl mx-auto">
    <div
      ref={certRef}
      className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 no-scrollbar"
    >
      {certificates.map((cert, i) => (
        <div
          key={i}
          className="min-w-[300px] md:min-w-[350px] snap-center group relative rounded-2xl p-[2px]
          bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
        >
          <div
            className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md transition duration-300
            group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            {/* IMAGE WITH DOWNLOAD */}
            <div className="overflow-hidden rounded-lg mb-4">
              <a
                href={cert.image}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-40 w-full object-cover group-hover:scale-110 transition duration-400 cursor-pointer"
                />
              </a>
            </div>

            <p className="text-slate-900 dark:text-slate-300 font-medium">
              {cert.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* FOOTER */}
<footer className="relative mt-24 border-t border-slate-800 bg-gradient-to-b from-black to-slate-950 text-white">
  <div className="max-w-6xl mx-auto px-6 py-14">

    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

      {/* Brand */}
      <div className="text-center md:text-left space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          Binuka Somarathne
        </h3>

        <p className="text-sm text-slate-400">
          Full Stack Developer • React • Spring Boot • MongoDB
        </p>

        <div className="pt-4 space-y-3">

          <a
            href="tel:+94702536667"
            className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-purple-400 transition"
          >
            <img src="/phone-call.png" className="w-4 h-4" />
            <span>+94 70 253 6667</span>
          </a>

          <a
            href="mailto:binukasomarathne@gmail.com"
            className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-purple-400 transition"
          >
            <img src="/gmail.png" className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/binuka-somarathne/"
            target="_blank"
            className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-purple-400 transition"
          >
            <img src="/linkedin.png" className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Binuka321"
            target="_blank"
            className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-purple-400 transition"
          >
            <img src="/github.png" className="w-4 h-4" />
            <span>GitHub</span>
          </a>

        </div>
      </div>

      {/* Navigation */}
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold mb-4 text-white">
          Navigation
        </h4>

        <div className="flex flex-col gap-2 text-slate-400">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#certificates" className="hover:text-purple-400 transition">Certificates</a>
          <a href="#cv" className="hover:text-purple-400 transition">CV</a>
        </div>
      </div>

      {/* Optional: Right Section (can be used later) */}
      <div className="text-center md:text-left">
        <h4 className="text-xl font-semibold mb-4 text-white">
          Let’s Connect
        </h4>

        <p className="text-sm text-slate-400 leading-relaxed">
          Always open to opportunities, collaborations, and interesting projects.
        </p>

      
      </div>
    </div>

    {/* Divider */}
    <div className="my-10 border-t border-slate-800/60"></div>

    {/* Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-center text-sm text-slate-100 gap-3">
      <p>© 2026 Binuka Somarathne. All rights reserved.</p>

    </div>
  </div>
</footer>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/94702536667"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  <div className="relative">
    
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-50 group-hover:opacity-70 transition"></div>

    {/* Button */}
    <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:scale-110 transition duration-300">
      
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </div>

    {/* Tooltip */}
    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      Chat on WhatsApp
    </span>

  </div>
</a>
    </main>
  );
}