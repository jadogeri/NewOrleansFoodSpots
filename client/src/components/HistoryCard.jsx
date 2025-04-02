import { BsFillBagFill } from "react-icons/bs";

const HistoryCard = ({ img, title, star, reviews, prevPrice, newPrice,  business_id,
  liked,
  visited,
  detail}) => {
  return (
    <>
      <div className="w3-card">
      <img src={detail?.image_url} alt="Car" style={{width:"100%"}}/>
      <div className="w3-container">
      <p>w3-card</p>
      </div>
    </div>
    </>
  );
};

export default HistoryCard;
