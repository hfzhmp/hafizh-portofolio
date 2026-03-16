import { useState, useEffect } from 'react';
import { Moon, Sun, Instagram, Linkedin, Github, MessageSquare, Users, Award, Download, Mail } from 'lucide-react';
import { Eyes } from './components/Eyes';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show navbar eyes after scrolling past the hero section (approx 300px)
  const showNavbarEyes = scrollY > 250;

  return (
    <div className="min-h-screen font-sans selection:bg-amber-900/20 dark:selection:bg-amber-100/20">
      
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-[#faf8f5]/90 dark:bg-[#1a1614]/90 backdrop-blur-md border-b border-amber-900/5 dark:border-amber-100/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="w-1/3">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2c221c] dark:text-[#f5ebe0]">Hafizh Maulana P.</span>
          </div>
          
          <div className="w-1/3 flex justify-center">
            {/* Navbar Eyes - Appear when scrolled past hero */}
            <div className={`transition-all duration-500 transform ${showNavbarEyes ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <Eyes variant="navbar" />
            </div>
          </div>
          
          <div className="w-1/3 flex items-center justify-end gap-4 md:gap-6 text-sm font-medium">
            <a href="#description" className="hidden md:block hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-[#2c221c] dark:text-[#f5ebe0]">Main</a>
            <a href="#journey" className="hidden md:block hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-[#2c221c] dark:text-[#f5ebe0]">Journey</a>
            <a href="#project" className="hidden md:block hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-[#2c221c] dark:text-[#f5ebe0]">Project</a>
            <span className="hidden md:block text-amber-900/20 dark:text-amber-100/20">|</span>
            <div className="flex items-center gap-1 md:gap-2">
              <a 
                href="https://instagram.com/hfzhmp" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-amber-900/5 dark:hover:bg-amber-100/5 transition-colors text-[#4a3b32] dark:text-[#d5bdaf]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hafizhmp12@gmail.com" 
                className="p-2 rounded-full hover:bg-amber-900/5 dark:hover:bg-amber-100/5 transition-colors text-[#4a3b32] dark:text-[#d5bdaf]"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-amber-900/5 dark:hover:bg-amber-100/5 transition-colors text-[#4a3b32] dark:text-[#d5bdaf]"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="main" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Geometric background with linear pattern and vignette */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Subtle glowing orbs */}
            <div className="absolute top-[15%] left-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-[#e3d5ca]/60 to-transparent dark:from-[#4a3b32]/40 blur-3xl mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
            <div className="absolute bottom-[5%] right-[5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-[#d5bdaf]/40 to-transparent dark:from-[#2c221c]/60 blur-3xl mix-blend-multiply dark:mix-blend-screen transition-all duration-1000" />
            
            {/* Vignette overlay to blend with main background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#faf8f5_100%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#1a1614_100%)]" />
          </div>
          
          <div className="relative z-10 text-center flex flex-col items-center px-6">
            <div className="mb-12 md:mb-16">
              <Eyes variant="hero" />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#2c221c] dark:text-[#f5ebe0]">
              Hi, I'm <span className="italic text-amber-800 dark:text-amber-200">Hafizh</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed mb-10">
              A curious Informatics Engineering student exploring the intersection of human experience and modern technology.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c221c] dark:bg-[#f5ebe0] text-[#f5ebe0] dark:text-[#2c221c] rounded-full font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2c221c]/20 dark:hover:shadow-[#f5ebe0]/20 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="description" className="py-32 px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-amber-900/5 dark:bg-amber-100/5 relative z-10">
                <img 
                  src="/hfzh.webp" 
                  alt="Abstract representation" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#e3d5ca] dark:bg-[#4a3b32] rounded-full -z-0 blur-2xl opacity-60" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d5bdaf] dark:bg-[#2c221c] rounded-full -z-0 blur-xl opacity-40" />
            </div>
            <div className="md:col-span-7 md:pl-8 order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#2c221c] dark:text-[#f5ebe0]">Not your average<br/><span className="italic text-amber-800 dark:text-amber-200">code monkey.</span></h2>
              <div className="space-y-6 text-lg text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed mb-8">
                <p>
                  I believe that writing code is just a small part of software engineering. The real magic happens when you understand the people you're building for.
                </p>
                <p>
                  Currently navigating the complexities of Computer Science, I spend my days breaking things, reading documentation, and occasionally building something that actually works. I'm drawn to the subtle details that make digital experiences feel human.
                </p>
              </div>
              
              <a 
                href="/cv.pdf" 
                download 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c221c] dark:bg-[#f5ebe0] text-[#f5ebe0] dark:text-[#2c221c] rounded-full font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2c221c]/20 dark:hover:shadow-[#f5ebe0]/20 transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Skills / Brief Description */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-[#f5ebe0]/40 to-transparent dark:via-[#2c221c]/40">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-12 bg-amber-800/20 dark:bg-amber-200/20 rounded-full" />
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#2c221c] dark:text-[#f5ebe0]">Frontend</h3>
                <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light mb-8 leading-relaxed">Crafting interfaces that feel natural and responsive. I care about the micro-interactions as much as the architecture.</p>
                <ul className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'].map(skill => (
                    <li key={skill} className="px-4 py-1.5 bg-white/50 dark:bg-[#1a1614]/50 border border-amber-900/10 dark:border-amber-100/10 rounded-full text-sm font-medium shadow-sm text-[#2c221c] dark:text-[#f5ebe0]">{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="relative md:mt-12">
                <div className="absolute -left-4 top-0 w-1 h-12 bg-amber-800/20 dark:bg-amber-200/20 rounded-full" />
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#2c221c] dark:text-[#f5ebe0]">Backend & Systems</h3>
                <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light mb-8 leading-relaxed">Building the invisible engines that power the web. Always learning how to make things faster, more scalable, and secure.</p>
                <ul className="flex flex-wrap gap-3">
                  {['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'Git'].map(skill => (
                    <li key={skill} className="px-4 py-1.5 bg-white/50 dark:bg-[#1a1614]/50 border border-amber-900/10 dark:border-amber-100/10 rounded-full text-sm font-medium shadow-sm text-[#2c221c] dark:text-[#f5ebe0]">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="journey" className="py-32 px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center text-[#2c221c] dark:text-[#f5ebe0]">The <span className="italic text-amber-800 dark:text-amber-200">Journey</span></h2>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-amber-900/20 dark:before:via-amber-100/20 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf8f5] dark:border-[#1a1614] bg-amber-800 dark:bg-amber-200 text-white dark:text-amber-900 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mt-1">
                <div className="w-2 h-2 bg-white dark:bg-amber-900 rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/60 dark:bg-[#2c221c]/60 backdrop-blur-sm shadow-sm border border-amber-900/5 dark:border-amber-100/5 hover:shadow-md hover:bg-white dark:hover:bg-[#2c221c] transition-all duration-300">
                <div className="flex flex-col mb-4">
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-bold tracking-widest uppercase mb-2">Present</span>
                  <h3 className="font-serif text-2xl font-bold text-[#2c221c] dark:text-[#f5ebe0]">Informatics Engineering</h3>
                  <span className="text-sm text-[#4a3b32]/70 dark:text-[#d5bdaf]/70 mt-1">UIN Sunan Gunung Djati Bandung</span>
                </div>
                <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed">
                  Diving deep into algorithms, data structures, and software architecture. Active member of the university's tech club, organizing workshops and hackathons.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf8f5] dark:border-[#1a1614] bg-[#e3d5ca] dark:bg-[#4a3b32] text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mt-1">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/60 dark:bg-[#2c221c]/60 backdrop-blur-sm shadow-sm border border-amber-900/5 dark:border-amber-100/5 hover:shadow-md hover:bg-white dark:hover:bg-[#2c221c] transition-all duration-300">
                <div className="flex flex-col mb-4">
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-bold tracking-widest uppercase mb-2">2023</span>
                  <h3 className="font-serif text-2xl font-bold text-[#2c221c] dark:text-[#f5ebe0]">Frontend Developer Intern</h3>
                  <span className="text-sm text-[#4a3b32]/70 dark:text-[#d5bdaf]/70 mt-1">Tech Agency Inc.</span>
                </div>
                <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed">
                  Helped build responsive web applications for local businesses. Learned the importance of clean code, version control, and collaborating with designers.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Organizations / Leadership */}
        <section id="organizations" className="py-20 px-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <div className="h-px bg-amber-900/20 dark:bg-amber-100/20 flex-1 max-w-[100px]" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#2c221c] dark:text-[#f5ebe0]">
              Leadership & <span className="italic text-amber-800 dark:text-amber-200">Organization</span>
            </h2>
            <div className="h-px bg-amber-900/20 dark:bg-amber-100/20 flex-1 max-w-[100px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organization 1 */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-[#2c221c]/40 backdrop-blur-sm shadow-sm border border-amber-900/5 dark:border-amber-100/5 hover:-translate-y-1 hover:shadow-md hover:bg-white/80 dark:hover:bg-[#2c221c]/80 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c221c] dark:text-[#f5ebe0]">Head of Technology</h3>
                  <span className="text-sm text-[#4a3b32]/80 dark:text-[#d5bdaf]/80 mt-1 block">University Tech Club</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-amber-900/10 dark:bg-amber-100/10 rounded-full text-amber-900 dark:text-amber-200">2023 - Present</span>
                </div>
              </div>
              <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed text-sm">
                Led a team of 15 students in developing campus-wide tech solutions. Organized 3 major hackathons and weekly coding workshops.
              </p>
            </div>
            
            {/* Organization 2 */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-[#2c221c]/40 backdrop-blur-sm shadow-sm border border-amber-900/5 dark:border-amber-100/5 hover:-translate-y-1 hover:shadow-md hover:bg-white/80 dark:hover:bg-[#2c221c]/80 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2c221c] dark:text-[#f5ebe0]">Curriculum Division</h3>
                  <span className="text-sm text-[#4a3b32]/80 dark:text-[#d5bdaf]/80 mt-1 block">Google Developer Student Clubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-amber-900/10 dark:bg-amber-100/10 rounded-full text-amber-900 dark:text-amber-200">2022 - 2023</span>
                </div>
              </div>
              <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed text-sm">
                Formulated learning resources for frontend and machine learning tracks. Mentored over 50 members throughout the semester.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="project" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center text-[#2c221c] dark:text-[#f5ebe0]">Selected <span className="italic text-amber-800 dark:text-amber-200">Works</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-amber-900/5 dark:bg-amber-100/5 mb-8 relative shadow-sm">
                  <img src="https://picsum.photos/seed/project_hub/800/600" alt="Campus Event Hub" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="https://signbuddy-six.vercel.app/" />
                  <div className="absolute inset-0 bg-[#2c221c]/20 dark:bg-[#1a1614]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/90 dark:bg-[#2c221c]/90 text-[#2c221c] dark:text-[#f5ebe0] px-8 py-3 rounded-full text-sm font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg">View Project</span>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-3xl font-bold mb-3 text-[#2c221c] dark:text-[#f5ebe0] group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">Sign-Buddy</h3>
                  <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed mb-4">A centralized platform for discovering and managing university events, built with React and Firebase.</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium px-3 py-1 bg-amber-900/5 dark:bg-amber-100/5 rounded-full text-[#2c221c] dark:text-[#f5ebe0]">React</span>
                    <span className="text-xs font-medium px-3 py-1 bg-amber-900/5 dark:bg-amber-100/5 rounded-full text-[#2c221c] dark:text-[#f5ebe0]">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group cursor-pointer md:mt-24">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-amber-900/5 dark:bg-amber-100/5 mb-8 relative shadow-sm">
                  <img src="https://picsum.photos/seed/project_sync/800/600" alt="StudySync" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#2c221c]/20 dark:bg-[#1a1614]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/90 dark:bg-[#2c221c]/90 text-[#2c221c] dark:text-[#f5ebe0] px-8 py-3 rounded-full text-sm font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg">View Project</span>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="font-serif text-3xl font-bold mb-3 text-[#2c221c] dark:text-[#f5ebe0] group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">PICO-App</h3>
                  <p className="text-[#4a3b32] dark:text-[#d5bdaf] font-light leading-relaxed mb-4">Real-time collaborative study notes application using WebSockets and rich text editing.</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium px-3 py-1 bg-amber-900/5 dark:bg-amber-100/5 rounded-full text-[#2c221c] dark:text-[#f5ebe0]">Next.js</span>
                    <span className="text-xs font-medium px-3 py-1 bg-amber-900/5 dark:bg-amber-100/5 rounded-full text-[#2c221c] dark:text-[#f5ebe0]">Socket.io</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-40 px-6 max-w-4xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gradient-to-tr from-[#e3d5ca]/30 to-transparent dark:from-[#4a3b32]/30 rounded-full blur-3xl -z-10" />
          
          <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-[#2c221c] dark:text-[#f5ebe0]">Let's <span className="italic text-amber-800 dark:text-amber-200">Talk</span></h2>
          <p className="text-xl text-[#4a3b32] dark:text-[#d5bdaf] font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col items-center gap-10">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/hfzhmp" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/50 dark:bg-[#2c221c]/50 hover:bg-white dark:hover:bg-[#2c221c] border border-amber-900/10 dark:border-amber-100/10 transition-all hover:scale-110 hover:shadow-md text-[#2c221c] dark:text-[#f5ebe0]" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/in/hfzhmp" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/50 dark:bg-[#2c221c]/50 hover:bg-white dark:hover:bg-[#2c221c] border border-amber-900/10 dark:border-amber-100/10 transition-all hover:scale-110 hover:shadow-md text-[#2c221c] dark:text-[#f5ebe0]" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/hfzhmp" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/50 dark:bg-[#2c221c]/50 hover:bg-white dark:hover:bg-[#2c221c] border border-amber-900/10 dark:border-amber-100/10 transition-all hover:scale-110 hover:shadow-md text-[#2c221c] dark:text-[#f5ebe0]" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>

            <div className="w-16 h-px bg-amber-900/20 dark:bg-amber-100/20" />

            {/* NGL Link */}
            <a href="https://ngl.link/hfzhmp" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
              <MessageSquare size={20} className="group-hover:animate-bounce" />
              Send Anonymous Message
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-sm text-[#4a3b32]/60 dark:text-[#d5bdaf]/60 border-t border-amber-900/10 dark:border-amber-100/10">
        <p>&copy; {new Date().getFullYear()} Hafizh. Crafted with curiosity.</p>
      </footer>
    </div>
  );
}

export default App;