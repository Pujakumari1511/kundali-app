import { StarIcon } from "../icons/StarIcon";

interface StarRatingProp {
    rating: number;
    maxNumber?: number;
}

export const StarRating = ({ rating, maxNumber = 5}: StarRatingProp) => {
    return (
       <div className="flex gap-1">
            {[...Array(maxNumber)].map((_, i) => {
                const fillPercent = Math.max(0, Math.min(1, rating - i));

                return (
                <div
                    key={i}
                    className="relative w-6 h-6"
                >
                    {/* Empty star outline */}
                    <StarIcon
                        className="absolute top-0 left-0 h-full overflow-hidden text-gray-300"
                        style={{ fill: "none", stroke: "currentColor" }}
                    />

                    {/* Filled portion */}
                    <div
                    className="absolute top-0 left-0 h-full overflow-hidden"
                    style={{ width: `${fillPercent * 100}%` }}
                    >
                    <StarIcon
                        className="w-6 h-6 text-yellow-400"
                        style={{ fill: "currentColor", stroke: "currentColor" }}
                    />
                    </div>
                </div>
                );
            })}
       </div>
    )
}