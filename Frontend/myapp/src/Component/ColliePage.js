import React from 'react'
import {useState,useEffect} from "react"
const ColliePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/find", {
         
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setData(result.user);
          });
      }, []);
  return (
    <>
    <div className=" bg-red-300 flex  justify-center h-screen">
      {data.map((item) => {
        return (
          <>
            <div key={item._id} className="card home-card">

              <h5>{item.name}</h5>
              <div className="card-image">
                <img className="h-64 w-64 object-cover" src={item.image} alt="No photo present" />
              </div>
              <div className="card-content">
                <h6>location:{item.location}</h6>
                <h6>Phone:{item.contactNumber}</h6>
               

                <i className="material-icons" style={{ color: "red" }}>
                 rating:{item.rating}
                </i>
               
               
               
                <form  onSubmit={(e)=>{
                  e.preventDefault();
                 

                }}>
               
                </form>
              </div>
            </div>
          </>
        );
      })}
    </div>


    </>
  )
}

export default ColliePage