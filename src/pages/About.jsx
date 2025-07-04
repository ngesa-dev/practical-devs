
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
} from 'react-icons/si';
import { FaCube, FaLightbulb, FaLaptopCode, FaBrain} from 'react-icons/fa';

import practical_logo from '../assets/practical_logo.png';
import sampleVideo from '../assets/sampleVideo.mp4';
import AnimatedTestimonials from '../components/AnimatedTestimonials';
import { testimonials,companies,companyIcons} from '../constants';
import { TestimonialCard } from '../components';

const About = () => {


  return (
    <>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-28 pb-0">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm">
              Start Your Personalized Developer Learning Path
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Code Your Way to a <br /> Life-Changing Career
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              Stop wasting time on scattered tutorials. Get a personalized learning path, build real-world projects, and land your dream job—faster.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-spin-slow">
              {/* Center logo */}
              <div className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-blue-500 z-10 bg-white">
                <img src={practical_logo} alt="Kevin Ngesa" className="w-full h-full object-cover" />
              </div>

              {/* Orbiting icons */}
              <SiJavascript className="absolute text-yellow-500 text-4xl" style={{ top: '12%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <SiReact className="absolute text-blue-500 text-4xl" style={{ top: '24%', left: '88%', transform: 'translate(-50%, -50%)' }} />
              <SiMongodb className="absolute text-green-600 text-4xl" style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }} />
              <SiTailwindcss className="absolute text-cyan-500 text-4xl" style={{ bottom: '24%', left: '88%', transform: 'translate(-50%, 50%)' }} />
              <SiTypescript className="absolute text-blue-700 text-4xl" style={{ bottom: '12%', left: '50%', transform: 'translate(-50%, 50%)' }} />
              <SiNodedotjs className="absolute text-green-700 text-4xl" style={{ bottom: '24%', left: '12%', transform: 'translate(-50%, 50%)' }} />
              <FaCube className="absolute text-purple-500 text-4xl" style={{ top: '24%', left: '12%', transform: 'translate(-50%, -50%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome + Testimonials Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
        {/* Video Section */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold">
            Welcome to <span className="text-green-600">Practical Devs</span>
          </h2>
          <video src={sampleVideo} controls className="w-full h-64 rounded-lg object-cover shadow-md" />
        </div>

        {/* Animated Testimonials */}
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Trusted by <span className="text-green-600">millions</span>
          </h2>
          <AnimatedTestimonials />
        </div>
      </section>

      {/* Companies */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-10">
            Our Graduates Work at these Companies
          </h2>
          <div className="overflow-hidden relative w-full">
            <div className="flex gap-12 animate-scroll-infinite whitespace-nowrap">
              {companies.map(({name,icon,color}, index) => {
                  const Icon=companyIcons[icon]; 
                  return(
                      <div key={index} className="flex items-center space-x-3 bg-white px-4 py-2 rounded shadow-md text-gray-700 text-lg min-w-max">
                  <Icon className={`${color}`}/>
                  <span>{name}</span>
                </div>
                  )
              }
              )
              }
              
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-left mb-12 text-gray-900 pl-10 sm:pl-20">
          Who is this for?
        </h2>
        <div className="space-y-12 pl-10 sm:pl-20">
          <div className="flex items-start gap-5">
            <FaLightbulb className="text-yellow-400 text-4xl mt-1 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2">
                <span className="text-2xl text-gray-800 font-extrabold">01.</span> Lost Beginners
              </h3>
              <p className="text-gray-700 mt-2">Overwhelmed by too much info, you need a clear roadmap.</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaLaptopCode className="text-yellow-500 text-4xl mt-1 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
                <span className="text-2xl text-gray-800 font-extrabold">02.</span> Stuck in Tutorial Hells
              </h3>
              <p className="text-gray-700 mt-2">
                You’ve learned by watching but struggle to start coding on your own.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaBrain className="text-purple-500 text-4xl mt-1 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
                <span className="text-2xl text-gray-800 font-extrabold">03.</span> Hands-on Experience Seekers
              </h3>
              <p className="text-gray-700 mt-2">Dream chasers who make things happen.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pl-10 sm:pl-20 pr-6 sm:pr-0">
          <button className="w-full sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300">
            Become a Member
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-full transition duration-300">
            Success Stories
          </button>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          What Students Say About <span className="text-green-600">Practical Devs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
