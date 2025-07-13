import { Link } from "react-router-dom";
import StatsGrid from "./StatsGrid";

const HeroSection = () => {
  return (
    <section className="relative text-center text-white py-24 px-4 overflow-hidden">
      {/* ✅ Background image with blur */}
      <div className="absolute inset-0 bg-[url('/bg-hero.webp')] bg-cover bg-center bg-no-repeat scale-105 filter blur-sm" />

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* ✅ Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          Practical Devs
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-white mt-4">
          Practical Coding
        </h2>

        <p className="text-2xl md:text-5xl font-medium text-white mt-4">
          Tutorials for
        </p>

        <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mt-4">
          Web Developers
        </p>

        <p className="max-w-xl text-sm sm:text-base text-gray-200 mt-8">
          Bring your dream project to life by following these tutorials. No fluff, pure content.
        </p>

        <Link
          to="/courses"
          className="mt-4 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          View Courses
        </Link>

        <StatsGrid />
      </div>
    </section>
  );
};

export default HeroSection;
