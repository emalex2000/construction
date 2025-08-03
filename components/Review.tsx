import { AiFillStar } from "react-icons/ai";

interface ReviewCardProps {
  title: string;
  reviewText: string;
  profileImage: string;
  username: string;
  rating?: number; // from 1 to 5
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  reviewText,
  profileImage,
  username,
  rating = 5,
}) => {
  return (
    <div className="flex flex-col gap-4 pb-9 p-3 bg-white text-black w-[17rem] rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">{title}</p>
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className={i < rating ? "text-amber-500" : "text-gray-300"} />
          ))}
        </div>
      </div>
      <p className="text-sm">{reviewText}</p>
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt="user profile"
          className="w-[2rem] h-[2rem] rounded-full object-cover"
        />
        <label className="text-sm font-medium">{username}</label>
      </div>
    </div>
  );
};

export default ReviewCard;
