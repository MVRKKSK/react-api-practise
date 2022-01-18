import React , {useState , useEffect} from 'react'
import Carousel from "react-elastic-carousel";

const User = () => {

    const [details, setDetails] = useState(null);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        
      ];

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        getData();
        async function getData(){
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setDetails(data);
        }
    } , [])

    
   

    return (
        <div>
            
            {details && (
                <div>
                    <Carousel breakPoints={breakPoints}>
                    {details.map((detail,index)=>(
                        <div key = {index} className="">
                         <p>{detail.name}</p>   
                        </div>
                    ))}
                    </Carousel>
                </div>
            )}
            
            
        </div>
    )
}

export default User
