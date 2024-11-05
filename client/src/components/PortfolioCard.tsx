"use client";

import { truncateDescription } from "@/utils/helper";

type PortfolioCardProps = {
  title: string;
  description: string;
  language: string;
  author: string;
  imageUrl: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  language,
  author,
  imageUrl,
}) => (
  <div className="bg-white shadow rounded-lg flex space-x-4 my-4">
    <img
      src={imageUrl}
      alt={title}
      className="w-[16rem] h-[10rem] rounded-l-lg"
    />

    <div className="flex-1 p-3">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="hidden md:block text-gray-600 text-sm mt-1">
        {truncateDescription(description, 18)}
      </p>

      <div className="flex justify-between mt-4">
        <div>
          <p className=" text-sm mt-1">{language}</p>
          <p className="text-gray-600 text-sm">Oleh {author}</p>
        </div>

        <button className="hidden md:block bg-gradient-to-br from-amber-500 to-amber-300 text-white text-sm px-4 py-2 rounded hover:from-amber-600 hover:to-white">
          Add to Cart
        </button>
        <button className="block md:hidden bg-gradient-to-br from-amber-500 to-amber-300 text-white text-sm px-4 py-2 rounded hover:from-amber-600 hover:to-white">
          A
        </button>
      </div>
    </div>
  </div>
);

export default PortfolioCard;
