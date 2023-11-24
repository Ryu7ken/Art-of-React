import { OFFER_IMG } from "../utils/constants";

const OfferCard = (props) => {

    const {resOffer} = props;
    const {imageId} = resOffer;

    return (
        <div className="mb-5">
            <div className="mr-5 relative h-[252px] w-[425px] rounded-2xl overflow-hidden hover:cursor-pointer">
                <img className="object-cover w-full h-full" alt="banner-image" src={OFFER_IMG + imageId} />
            </div>
        </div>
    );
}

export default OfferCard;