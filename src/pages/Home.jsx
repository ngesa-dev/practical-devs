import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CourseCard from "../components/CourseCard";
import { latestCourses, popularCourses } from "../constants";

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <>
      <HeroSection />

      {/* Latest Courses */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Latest Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(showAll ? popularCourses : popularCourses.slice(0, 9)).map(
            (course) => (
              <CourseCard key={course.id} course={course} />
            )
          )}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleToggle}
            className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less Courses" : "Show All Courses"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
