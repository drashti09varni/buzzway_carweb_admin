import React, { useEffect, useState } from 'react';
import { toast, Zoom } from "react-toastify";
import { RiFileEditFill, RiDeleteBin6Fill } from 'react-icons/ri';
import axios from 'axios';

const initialValue = {
  totalKm: "",
  tollTax: "",
  stateTax: "",
  driverAllow: "",
  pessenger: "",
  bags: "",
  baseFare: "",
  carImg: [],
  car_name: "",


}
export default function CarDetailsForm() {
  const [data, setData] = useState(initialValue);
  const [taxiPrint, setTaxiPrint] = useState([]);
  const [cityPrint, setCityPrint] = useState([]);
  const [selectCity, setSelectCity] = useState();
  const [edit, setEdit] = useState(false);
  const [selectPrint, setSelectPrint] = useState();
  const [formData, setFormData] = useState(initialValue);
  const [allDataTable, setAllDataTable] = useState([]);
  const [showImg, setShowImg] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // delete products.....
  const handleDelete = id => {
    console.log(id);
    try {
      fetch(`http://193.203.162.218:4200/api/v1/deletecardetail/${id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(() => {
          setAllDataTable(values => {
            return values.filter(item => item.id !== id)
          })
        })
      fatchData();
      toast.success("Delete Taxi Successfully")
    } catch (err) {
      console.log(err)
    }
  }

  // update get data form.....
  const getUpdateData = (id) => {
    console.log(id)
    const user = allDataTable.find((user) => user._id === id);
    console.log(user)
    const imageData = user?.carImg?.map((image) => (  
      {
        name:image,
      preview: `http://193.203.162.218:4200/uploads/${image}`,
    }));
  console.log(imageData)
  console.log(imageData[0].preview);
    setFormData({
      ...initialValue,
      totalKm: user.totalKm,
      tollTax: user.tollTax,
      stateTax: user.stateTax,
      driverAllow: user.driverAllow,
      pessenger: user.pessenger,
      bags: user.bags,
      baseFare: user.baseFare,
      carImg: imageData[0].name,
      id:user._id
    });
    setShowImg(imageData[0].preview);
    setSelectCity(user.city_name);
    setSelectPrint(user.car_name);
    setEdit(true);
    console.log(imageData[0].preview)
  };

 
// update data.....
const handleUpdate = async () => {
  console.log(formData)
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('city_name', selectCity);
    formDataToSend.append('car_name', selectPrint);
    formDataToSend.append('totalKm', formData.totalKm);
    formDataToSend.append('tollTax', formData.tollTax);
    formDataToSend.append('stateTax', formData.stateTax);
    formDataToSend.append('driverAllow', formData.driverAllow);
    formDataToSend.append('pessenger', formData.pessenger);
    formDataToSend.append('bags', formData.bags);
    formDataToSend.append('baseFare', formData.baseFare);

    // Append existing image if no new image selected
    if (formData.carImg.length === 0) {
      formDataToSend.append('carImg', formData.carImg[0].name);
    } else {
      // Append new image if selected
      formDataToSend.append('carImg', formData.carImg[0]);
    }

    const addRecordEndpoint = `http://193.203.162.218:4200/api/v1/updatecardetail/${formData.id}`;
    const response = await fetch(addRecordEndpoint, {
      method: 'PATCH',
      body: formDataToSend,
    });
    const jsonResponse = await response.json();

    if (jsonResponse.status === 'success') {
      setData(jsonResponse);
      fatchData();
      setEdit(false);
      setFormData(initialValue);
      toast.success('Update Taxi Data Successfully');
      window.location.reload();
      setFormData(initialValue);
      setCityPrint(null);
      setTaxiPrint(null);
    } else {
      toast.error('Error updating taxi data. Please try again.');
    }
  } catch (err) {
   
  }
};



  // form submit.....
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('city_name', selectCity);
      formDataToSend.append('car_name', selectPrint);
      formDataToSend.append('totalKm', formData.totalKm);
      formDataToSend.append('tollTax', formData.tollTax);
      formDataToSend.append('stateTax', formData.stateTax);
      formDataToSend.append('driverAllow', formData.driverAllow);
      formDataToSend.append('amount', formData.amount);
      formDataToSend.append('pessenger', formData.pessenger);
      formDataToSend.append('bags', formData.bags);
      formDataToSend.append('baseFare', formData.baseFare);


      for (let i = 0; i < formData.carImg.length; i++) {
        formDataToSend.append('carImg', formData.carImg[i]);
      }

      const response = await axios.post(`http://193.203.162.218:4200/api/v1/addcardetails`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === "success") {
        // const newData = response.data.result;                    
        // updateProductData((prevData) => [newData, ...prevData]);
        toast.success(response.data.message);
        // proToggleModal();
        fatchData();
        setFormData(initialValue);
        setCityPrint(null);
        setTaxiPrint(null);
        window.location.reload();
      }
      if (response.data.status === "fail") {
        toast.error(response.data.message);
      }

    } catch (err) {
      console.log(err);
    }
  };

  // texi fect------
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
      setTaxiPrint(jsonResponse?.data);
    } catch (err) {
      console.log(err)
    }
    try {
      const api = "http://193.203.162.218:4200/api/v1/allCity";
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      const response = await fetch(api, options);
      const jsonResponse = await response.json();

      setCityPrint(jsonResponse?.data);
    } catch (err) {
      console.log(err)
    }
  }

  /// get all data-----
  const fatchData = async () => {

    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getcardetail";

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      setAllDataTable(jsonResponse?.result.sort((a, b) => a.city_name.localeCompare(b.city_name)));

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fatch();
    fatchData();
  }, []);

  const onOptionChangeHandler = (event) => {
    setSelectPrint(event.target.value);

  };
  const onOptionChangeHandlerCity = (event) => {
    setSelectCity(event.target.value);

  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      carImg: [...files], 
    });

    // To display the first image preview
    if (files.length > 0) {
      setShowImg(URL.createObjectURL(files[0]));
    }
  };

  return <>
    <main className='main-container'>
      <h1 className='text-black text-[20px] py-3 px-8'>Car Details Form</h1>
      <form>
        <div class="w-full max-w-4xl mx-auto py-4 bg-gray-200 my-4 px-4 shadow-xl rounded-xl grid grid-cols-2 space-x-6">
          <div className='pt-2 ml-6'>
            <select onChange={onOptionChangeHandlerCity} value={selectCity} className=' w-full border border-gray-400 p-2.5  focus:outline-none rounded-md text-[#000]'>
              <option className='text-[#000]'>City Name </option>
              {cityPrint?.map((option, index) => {
                return (
                  <option key={index} name="city_name" value={option?.city_name} className='text-[#000]'>
                    {option?.city_name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='pt-2 ml-6'>
            <select onChange={onOptionChangeHandler} value={selectPrint} className=' w-full border border-gray-400 p-2.5  focus:outline-none rounded-md text-[#000]'>
              <option className='text-[#000]'>Taxi Name </option>
              {taxiPrint?.map((option, index) => {
                return (
                  <option key={index} name="car_name" value={option?.taxi_name} className='text-[#000]'>
                    {option?.taxi_name}
                  </option>
                );
              })}
            </select>
          </div>

          <div class="py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="number" placeholder="Total KM" name='totalKm' onChange={handlechange} value={formData.totalKm} />
          </div>
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="number" placeholder="Base Fare" name='baseFare' onChange={handlechange} value={formData.baseFare} />
          </div>
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="number" placeholder="Toll Tax" name='tollTax' onChange={handlechange} value={formData.tollTax} />
          </div>
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="text" placeholder="State Tax" name='stateTax' onChange={handlechange} value={formData.stateTax} />
          </div>
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="text" placeholder="Allow Drive" name='driverAllow' onChange={handlechange} value={formData.driverAllow} />
          </div>

          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="number" placeholder="Pessenger" name='pessenger' onChange={handlechange} value={formData.pessenger} />
          </div>
          <div class=" py-2">
            <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
              type="number" placeholder="Bags" name='bags' onChange={handlechange} value={formData.bags} />
          </div>
          <div class=" py-2">
            <input
              type="file"
              name="carImg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-[#000] focus:border-blue-500"
              placeholder="Enter product image"
              onChange={handleImageChange}
              multiple
              accept="image/*"
            />
            {/* {edit ? <img src={showImg} className='h-24 w-40'/> : ""} */}
            {edit && <img src={showImg} alt="Preview" className='h-24 w-40'/>}
          </div>
          <div className='flex'>
            {edit ? <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff] 
          border border-[#188ae2]  rounded-lg px-4 py-2 mt-4" onClick={handleUpdate}> Update </button>
              : <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff] 
          border border-[#188ae2]  rounded-lg px-4 py-2 mt-4" onClick={handleSubmit}> Submit </button>}

            <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff]
           border border-[#188ae2] rounded-lg px-4 py-2 mt-4" onClick={() => { setData(initialValue) }}>Reset</button>
            <button type='button' className="mx-auto block bg-[#fff] text-[#188ae2] hover:bg-[#188ae2] hover:text-[#fff]
           border border-[#188ae2] rounded-lg px-4 py-2 mt-4" onClick={() => { setData(initialValue) }}>Cancle</button>
          </div>
        </div>
      </form>
      <div className="my-4">
        <lable className="text-[#000]  text-black text-[20px] py-3 px-8">
          Search : 
        </lable>     
        <input
          type="text"
          placeholder="Search by City Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 text-[#000] p-1 rounded-md"
        />
      </div>
      <div class="w-full h-screen ">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
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
                        City Name
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Taxi Name
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Taxi Image
                      </th>

                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Total KM
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Base Fare
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Toll Tax
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        State Tax
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Driver Allowance
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Amount
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Passenger
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                        Bags
                      </th>
                      <th class="px-6 py-3 font-medium bg-gray-200">
                        Edit
                      </th>

                    </tr>
                  </thead>

                  <tbody class="bg-white text-center">

                    { allDataTable.filter((item) =>
                        item.city_name.toLowerCase().includes(searchTerm.toLowerCase())
                      ).map((item, i) => {
                      return <>
                        <tr className='border border-grey-400'>
                          <td className='text-black border-r border-gray-400'>{i + 1}</td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.city_name}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.car_name}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              <img src={`http://193.203.162.218:4200/uploads/${item.carImg}`} className='h-30 w-40' />
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.totalKm}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.baseFare}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.tollTax}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.stateTax}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.driverAllow}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.driverAllow == Number ? (Number(item.baseFare) + Number(item.tollTax) + Number(item.driverAllow))
                               : (Number(item.baseFare) + Number(item.tollTax))}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.pessenger}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                            <div class="text-sm leading-5 text-gray-900">
                              {item.bags}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap bg-white-200 text-center">
                            <div class="text-sm leading-5 text-gray-900 flex space-x-6 justify-center items-center">
                              <RiFileEditFill size={20} fill='green' onClick={() => getUpdateData(item._id)} />

                              <RiDeleteBin6Fill size={20} fill='red' onClick={() => handleDelete(item.id)} />
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