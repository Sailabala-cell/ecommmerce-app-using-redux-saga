// import "./Main.css"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import {addTocart} from "../redux/action"
import {removeFromcart} from "../redux/action"
import {emptycart1} from "../redux/action"
import { addProductaction } from "../redux/productAction"
import {useSelector} from "react-redux"
import {searchProductList} from "../redux/productAction"
function Main() {
  const dispatch=useDispatch()
  const data= useSelector((state)=>state.productDataReducer)
  console.log(data, "data from saga")
  useEffect(()=>{
   dispatch( addProductaction() )
  },[])
  return (
    <div className="App">
       <section >
       <div >Free Online Store</div>
       <div className="search" style={{marginTop:"100px"}}>
        <input type="text" placeholder="Search"
          style={{paddingLeft:"10px",width:"500px",height:"30px", outline:"none"}}
          onChange={(event)=>dispatch(searchProductList(event.target.value))}
        />
       </div>
         <div style={{display:"flex",flexWrap:"wrap", marginTop:"10px"}}>
          {data.map((item)=>{
           return ( 
            
            <div className="product-item" style={{display:"flex", flexDirection:"column",
            justifyContent:"flex-end",
            alignItems:"center" ,
            border:"1px solid #ccc",
            margin:"30px",
            padding:"20px",
            width:"300px",
           
          }}
            key={item.id}>
              <img src={`${item.thumbnail}`} alt="" style={{height:'200px' ,width:"200px", objectFit:"contain"}}/>
              <div>{item.title}</div>
              {/* <div style={{width:"100px"}}>{item.description}</div> */}
              <div><span>$</span>{item.price}</div>
              <div>
              <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
              <button style={{color:"white"}} onClick={()=>dispatch(addTocart(item))}>Add to Cart</button>
              <button style={{color:"white"}} onClick={()=>dispatch(removeFromcart(item.id))}>Remove from Cart</button>
              </div>
              </div>
            </div>
          )
          })}
         </div>
       </section>
    </div>
  );
}

export default Main;
