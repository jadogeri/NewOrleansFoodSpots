import { useDeleteBusinessMutation } from "../redux/api/business/business";


const HistoryCard = ({ business,business_id, index}) => {
  const [ deleteBusiness] = useDeleteBusinessMutation()
   const handleDeleteCard = ()=>{

      deleteBusiness(business_id)

    }

  return (
 <div className="" key={index}>

        
<div className=" " 
style={{resize:true, margin:20, width:"100%",height:"auto"}}

>
  <span onClick={()=>{handleDeleteCard()}} className="close" style={{height:20,color:"red"}}>×</span>

<img src={business.detail.image_url} alt="business" 
style={{height:200, width:300, float: 'left',resize:true}}  
/>

</div>
</div>

  );
};

export default HistoryCard;
