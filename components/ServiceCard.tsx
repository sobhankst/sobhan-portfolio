import { IconType } from "react-icons";
interface CardProps {
  title: string;
  description: string;
  icon: IconType;
}
const ServiceCard = ({ title, description, icon: Icon }: CardProps) => {
  return (
    <div className="group bg-lightGray flex h-full flex-col items-center rounded-2xl p-4 text-white shadow-lg transition-all hover:shadow-none">
      <div className="mb-2 rounded-full bg-gradient-to-br from-green-400 to-green-500 p-4 text-white shadow-md transition-all duration-300 group-hover:scale-115">
        <Icon size={28} className="" />
      </div>
      <h3 className="group-hover:text-lightGreen mb-1 text-center text-xl font-semibold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-center text-base text-zinc-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
