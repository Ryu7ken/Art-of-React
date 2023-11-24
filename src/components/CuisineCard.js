import { CUISINE_IMG } from "../utils/constants";

const CuisineCard = (props) => {

    const {resCuisine} = props;
    const {imageId} = resCuisine;

    return (
        <div>
            <div className="mr-5 relative h-[180px] w-[144px] rounded-2xl overflow-hidden hover:cursor-pointer">
                <img className="object-cover w-full h-full" alt="cuisine-image" src={CUISINE_IMG + imageId} />
            </div>
        </div>
    );
};

export default CuisineCard;