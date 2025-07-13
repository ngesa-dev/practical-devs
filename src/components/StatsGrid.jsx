import { stats } from "../constants";

const StatsGrid = () => {
  return (
    <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="flex flex-col items-center">
            <Icon className="text-5xl text-white mb-1" />
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-white">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
