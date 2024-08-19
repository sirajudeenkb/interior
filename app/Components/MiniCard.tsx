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
    <div className="max-w-xs w-full rounded-md overflow-hidden shadow-xl border border-gray-200 p-4 bg-white m-4">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
          width={300}
          height={200}
        />
      </div>
      <div className="px-1 py-4">
        <div className="font-bold text-lg mb-2 text-center text-orange-500">
          {title}
        </div>
        <p className="text-gray-700 text-[15px] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default MiniCard;
