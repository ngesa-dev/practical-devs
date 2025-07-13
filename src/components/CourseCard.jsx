import { FaClock, FaShoppingCart } from "react-icons/fa";
import { SiReact, SiNextdotjs } from "react-icons/si";

const techIcons = {
  react: <SiReact className="text-white text-xl" />,
  nextjs: <SiNextdotjs className="text-white text-xl" />,
};

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between shadow hover:shadow-lg transition-all">
      {/* Top Info */}
      <div className="flex justify-between items-start">
        {/* Time */}
        <div className="flex items-center gap-1 text-white text-sm">
          <FaClock /> {course.duration}
        </div>
        {/* Tech Icon */}
        <div>{techIcons[course.tech]}</div>
      </div>

      {/* Level */}
      <p className="text-primary text-sm mt-2">{course.level}</p>

      {/* Title */}
      <h3 className="text-white text-lg font-bold mt-1">{course.title}</h3>

      {/* Purpose */}
      <p className="text-gray-300 text-sm mt-1">{course.purpose}</p>

      {/* CTA */}
      <button className="mt-4 flex items-center gap-2 text-primary font-semibold hover:underline">
        <FaShoppingCart /> Get it Now
      </button>
    </div>
  );
};

export default CourseCard;
