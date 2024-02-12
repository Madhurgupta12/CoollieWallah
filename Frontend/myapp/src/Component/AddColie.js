
import React, { useState } from "react";
import swl from "sweetalert"
function AddColie() {
  const [name,setname]=useState("");
  const [location,setlocation]=useState("");
  const [image,setimage]=useState("");
  const [rating,setRating]=useState("");
  const [contactNumber,setcontactNumber]=useState("");
  const[badgeNumber,setbadgeNumber]=useState("");

  

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name,image:image,rating:rating,badgeNumber:badgeNumber,contactNumber:contactNumber,location:location})
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      else
      {
         swl({
            title: 'Successfully created',
            text: 'This is a SweetAlert .',
            icon: 'success',
            confirmButtonText: 'OK'
          });
      const responseData = await response.json();
      setResponse(responseData);
      }
    } 
    catch (error) {
        swl({
            title: 'Unsuccessful response',
            text: 'error',
           
            confirmButtonText: 'false'
          });
      console.error('There was a problem submitting the post:', error);
      setError(error.message);
    }
  };


  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create a Post</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e)=>setRating(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="badgeNumber" className="block text-gray-700 font-bold mb-2">
            Badge Number
          </label>
          <input
            type="text"
            id="badgeNumber"
            name="badgeNumber"
            value={badgeNumber}
            onChange={(e)=>setbadgeNumber(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e)=>setcontactNumber(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e)=>setlocation(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e)=>setimage(e.target.value)}
            className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
        onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddColie;
