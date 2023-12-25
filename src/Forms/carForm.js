import React, { useEffect, useState } from 'react';
import { toast, Zoom } from "react-toastify";
import { RiFileEditFill, RiDeleteBin6Fill } from 'react-icons/ri';


const initialValue = {
  taxi_name: ""
}
export default function CarForm() {
  const [data, setData] = useState(initialValue);
  const [printData, setPrintData] = useState([]);
  const [edit,setEdit] = useState(false);


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    })

  }


  const handleDelete = id => {
    try{  
    fetch(`http://193.203.162.218:4200/api/v1/deleteTaxi/${id}`, {
      method: "DELETE" })
      .then(response => response.json())
      .then(() => 
      {
          setPrintData(values => {
          return values.filter(item => item.id !== id)})
      })
      fatch();
      toast.success("Delete Taxi Successfully")
    }catch(err){
      console.log(err)
    }
  }

  const updateUser = async id => {
    const user = printData.find(user => user._id === id);
    setData(user);
    setEdit(true);
    // try {
    //   setEdit(true);
    //   const addRecordEndpoint = `http://193.203.162.218:4200/api/v1/updateTaxi/${id}`;
    //   const options = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    //   }
    //   const response = await fetch(addRecordEndpoint, options);
    //   const jsonResponse = await response.json();
    //   console.log(jsonResponse);
      
    // } catch (err) {
    //   toast.error("Please Enter valid");
    // }
  }

  const handleUpdate = async id =>{
 
    try {
      setEdit(true);
      const addRecordEndpoint = `http://193.203.162.218:4200/api/v1/updateTaxi/${data._id}`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      if(jsonResponse){
        setData(jsonResponse);
        fatch();
        setData(initialValue);
        toast.success("Update Taxi Data Successfullly");
      }
    
      
    } catch (err) {
      toast.error("Please Enter valid");
    }
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/addTaxi";

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      if (jsonResponse) {
        setData(initialValue);
        console.log("success data add");
        toast.success("Taxi Add Successfully");
        fatch();
      }
    } catch (err) {
      toast.error("Please Enter valid");
    }
  };
  const fatch = async () => {

    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/allTaxi";

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      setPrintData(jsonResponse?.data);

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fatch();
  }, []);
  
  return <>
    <main className='main-container'>
      <h1 className='text-black text-[20px] py-3 px-8'>Car Add Form</h1>
      <form>
        <div class="w-full max-w-xs mx-auto py-4 bg-gray-200 my-4 px-4 shadow-xl rounded-xl">
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="text" placeholder="Taxi name" name='taxi_name' onChange={handleChange} value={data.taxi_name} />
          </div>
          <div className='flex'>
            {edit ?  <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff] 
          border border-[#188ae2]  rounded-lg px-4 py-2 mt-4" onClick={ handleUpdate}> Update </button>
           :   <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff] 
          border border-[#188ae2]  rounded-lg px-4 py-2 mt-4" onClick={handleSubmit}> Submit </button> }
        
          <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff]
           border border-[#188ae2] rounded-lg px-4 py-2 mt-4" onClick={() => {setData(initialValue)}}>Reset</button>
          </div>
        </div>
      </form>
      <div class="w-full h-screen ">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="flex flex-col">

            <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 my-10">
              <div class="align-middle inline-block w-full  shadow-xl overflow-x-auto sm:rounded-lg border border-gray-400 ">
                <table class="min-w-full text-center">

                  <thead className='text-center'>

                    <tr class="bg-gray-50  text-xs leading-4 text-gray-500 uppercase tracking-wider  border-b border-gray-400">

                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        ID
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Taxi Name
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200">
                        Edit
                      </th>

                    </tr>
                  </thead>

                  <tbody class="bg-white text-center">

                    {printData?.map((item, i) => {
                      return <>
                        <tr className='border border-grey-400'>
                          <td className='text-black border-r border-gray-400'>{i + 1}</td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.taxi_name}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap bg-white-200 text-center">
                        <div class="text-sm leading-5 text-gray-900 flex space-x-6 justify-center items-center">
                          <RiFileEditFill size={20} fill='green' onClick={() => updateUser(item._id)} />
                          
                          <RiDeleteBin6Fill size={20} fill='red' onClick={() => handleDelete(item._id)} />
                        </div>
                      </td>
                        </tr>
                      </>
                    })}
                
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </main>
  </>

}
// %qgRDk6H7rx_ypF