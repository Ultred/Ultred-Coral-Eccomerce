import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface RatingStarsProps {
  rating: number;
}
function RatingStars({ rating }: RatingStarsProps) {
  const fullStars = Math.floor(rating);

  const remainingStars = rating - fullStars;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<BsStarFill key={i} />);
    } else if (i === Math.ceil(rating) && remainingStars >= 0.5) {
      stars.push(<BsStarHalf key={i} />);
    } else {
      stars.push(<BsStar key={i} />);
    }
  }

  return <div className="flex gap-1 text-yellow-400 text-xl">{stars}</div>;
}

export default RatingStars;
