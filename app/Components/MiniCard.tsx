import Image from "next/image";

interface MiniCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const MiniCard: React.FC<MiniCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="max-w-xs w-full rounded-md overflow-hidden shadow-xl border border-gray-200 p-4 bg-white m-4 transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          width={300}
          height={200}
        />
      </div>
      <div className="px-1 py-4">
        <div className="font-semibold text-lg mb-2 text-center text-[#1F1F1F]">
          {title}
        </div>
        <p className="text-[#545454] text-[15px] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default MiniCard;
