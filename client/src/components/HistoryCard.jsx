import { useDeleteAllBusinessesMutation } from "../redux/api/business/business";
import { useDeleteBusinessMutation } from "../redux/api/business/business";


const HistoryCard = ({ business,business_id, liked, visited,  detail, index}) => {
  const [ deleteBusiness] = useDeleteBusinessMutation()
  const [ deleteAllBusinesses] = useDeleteAllBusinessesMutation();

   const handleDeleteCard = ()=>{

      deleteBusiness(business_id)

    }

  return (
 <div className="" key={index}>

        
<div className=" " //style={{resize:true,width:500,height:400}}
style={{resize:true, margin:20, width:"100%",height:"auto"}}

>
                <span onClick={()=>{handleDeleteCard()}} className="close" style={{height:20,color:"red"}}>×</span>

{/* <img src="https://www.w3schools.com/w3images/car.jpg" alt="Car" /> */}
<img src={business.detail.image_url} alt="business" //width={20} height={2500}
style={{height:200, width:300, float: 'left',resize:true}}  
/>
{/* 
<div className="w3-container">
<p>w3-card</p>
</div> */}
</div>
</div>

  );
};

export default HistoryCard;
