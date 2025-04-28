import { IconType } from "react-icons";
interface CardProps {
  title: string;
  description: string;
  icon: IconType;
}
const ServiceCard = ({ title, description, icon: Icon }: CardProps) => {
  return (
    <div className="group bg-lightGray flex flex-col items-center rounded-2xl p-4 text-white shadow-lg transition-all hover:scale-[1.03] hover:shadow-none">
      <div className="mb-2 rounded-full bg-gradient-to-br from-green-400 to-green-500 p-4 text-white shadow-md">
        <Icon size={20} className="" />
      </div>
      <h3 className="group-hover:text-lightGreen mb-1 text-center text-xl font-semibold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-center text-sm text-zinc-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
