
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill, RiFileEditFill } from 'react-icons/ri'
import axios from 'axios';
import { toast, Zoom } from "react-toastify";


const initialValue = {
    luggage: "",
    pessenger: "",
    bus_rate: "",
    carcabImg: [],
    extra: "",
    carcab_name: "",
}

export default function CarCabForm() {

    const [data, setData] = useState(initialValue);
    const [formData, setFormData] = useState(initialValue);
    const [showImg, setShowImg] = useState([]);
    const [allDataTable, setAllDataTable] = useState([]);
    const [edit, setEdit] = useState(false);
    const [taxiPrint, setTaxiPrint] = useState([]);
    // const [cityPrint, setCityPrint] = useState([]);
    const [cityPrint, setCityPrint] = useState([]);


    const [selectPrint, setSelectPrint] = useState();

    const handleChange = (e) => {
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
            carcabImg: [...files],
        });

        // To display the first image preview
        if (files.length > 0) {
            setShowImg(URL.createObjectURL(files[0]));
        }
    };


    //add data
    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('carcab_name', selectPrint);
            formDataToSend.append('luggage', formData.luggage);
            formDataToSend.append('pessenger', formData.pessenger);
            formDataToSend.append('bus_rate', formData.bus_rate);
            formDataToSend.append('extra', formData.extra);
            // formDataToSend.append('carcab_name', formData.carcab_name);


            for (let i = 0; i < formData.carcabImg.length; i++) {
                formDataToSend.append('carcabImg', formData.carcabImg[i]);
            }

            const response = await axios.post(`http://193.203.162.218:4200/api/v1/addcardetailcab`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("response", response)
            if (response.data.status === "success") {
                // const newData = response.data.result;                    
                // updateProductData((prevData) => [newData, ...prevData]);
                toast.success(response.data.message);
                // proToggleModal();
                fatchData();
                // setTaxiPrint(null);
                setFormData(initialValue);

                window.reload();
            }
            if (response.data.status === "fail") {
                toast.error(response.data.message);
            }

        } catch (err) {
            console.log(err);
        }
  
        

    };


    /// get all data-----
    const fatchData = async () => {

        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getCarCabDetail";

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }

            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();
           
            setAllDataTable(jsonResponse?.result);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fatch();
        fatchData();
    }, []);

    // delete products.....
    const handleDelete = id => {
        console.log(id);
        try {
            fetch(`http://193.203.162.218:4200/api/v1/deletecarcab/${id}`, {
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

    // update data.....
    const handleUpdate = async () => {
   
        try {
            const formDataToSend = new FormData();

            formDataToSend.append('luggage', formData.luggage);
            formDataToSend.append('pessenger', formData.pessenger);
            formDataToSend.append('bus_rate', formData.bus_rate);
            formDataToSend.append('extra', formData.extra);
            formDataToSend.append('carcab_name', selectPrint);
            console.log(selectPrint)

            // Append existing image if no new image selected
            if (formData.carcabImg.length === 0) {
                formDataToSend.append('carcabImg', formData.carcabImg[0].name);
            } else {
                // Append new image if selected
                formDataToSend.append('carcabImg', formData.carcabImg[0]);
            }

            const addRecordEndpoint = `http://193.203.162.218:4200/api/v1/updatecarcabdetail/${formData.id}`;
            const response = await fetch(addRecordEndpoint, {
                method: 'PATCH',
                body: formDataToSend,
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)

            if (jsonResponse.status === 'success') {
             
                setData(jsonResponse);
                fatchData();
                setEdit(false);
                setFormData(initialValue);
                toast.success('Update Taxi Data Successfully');
                setFormData(initialValue);
            } else {
                toast.error('Error updating taxi data. Please try again.');
            }
        } catch (err) {

        }
    };

    // update get data form.....
    const getUpdateData = (id) => {
        const user = allDataTable.find((user) => user._id === id);
console.log({user})
        const imageData = user?.carcabImg?.map((image) => (
            {
                name: image,
                preview: `http://193.203.162.218:4200/uploads/${image}`,
            }));
        setFormData({
            ...initialValue,
            luggage: user.luggage,
            pessenger: user.pessenger,
            bus_rate: user.bus_rate,
            extra: user.extra,
            // carcab_name: user.carcab_name,
            carcabImg: imageData[0].name,
            id: user._id
        });
        setShowImg(imageData[0].preview);
        setSelectPrint(user.carcab_name);
        setEdit(true);
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

    const onOptionChangeHandler = (event) => {
        setSelectPrint(event.target.value);
    };

    return (
        <main className='main-container'>
            <h1 className='text-black text-[20px] py-3 px-8'>Car Cab Collection Form</h1>
            <form>
                <div class="w-full max-w-4xl mx-auto py-4 bg-gray-200 my-4 px-4 shadow-xl rounded-xl grid grid-cols-2 space-x-6">
                    <div className='pt-2 ml-6'>
                        <select onChange={onOptionChangeHandler} value={selectPrint} className=' w-full border border-gray-400 p-2.5  focus:outline-none rounded-md text-[#000]'>
                            <option className='text-[#000]'>Cab Name </option>
                            {taxiPrint?.map((option, index) => {
                                return (
                                    <option key={index} name="carcab_name" value={option?.taxi_name} className='text-[#000]'>
                                        {option?.taxi_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div class=" py-2">
                        <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
                            type="text" placeholder="Luggage" name='luggage' onChange={handleChange} value={formData.luggage} />
                    </div>
                    <div class=" py-2">
                        <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
                            type="text" placeholder="Pessenger" name='pessenger' onChange={handleChange} value={formData.pessenger} />
                    </div>
                    <div class=" py-2">
                        <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
                            type="text" placeholder="bus_rate" name='bus_rate' onChange={handleChange} value={formData.bus_rate} />
                    </div>
                    <div class=" py-2">
                        <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
                            type="text" placeholder="Extra" name='extra' onChange={handleChange} value={formData.extra} />
                    </div>
                    {/* <div class=" py-2">
                        <input class="w-full border border-gray-400 p-2 focus:outline-none rounded-md text-black"
                            type="text" placeholder="Cab Name" name='carcab_name' onChange={handleChange} value={formData.carcab_name} />
                    </div> */}

                    <div class=" py-2">
                        <input
                            type="file"
                            name="carcabImg"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter product image"
                            onChange={handleImageChange}
                            multiple
                            accept="image/*"
                        />
                        {edit && <img src={showImg} alt="Preview" className='h-24 w-40' />}

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
                                                Cab Name
                                            </th>
                                            <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                                                Luggage
                                            </th>
                                            <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                                                Pessenger
                                            </th>

                                            <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                                                bus_rate
                                            </th>
                                            <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                                                Img
                                            </th>
                                            <th class="px-6 py-3 font-medium bg-gray-200  border-r border-gray-400">
                                                Extra
                                            </th>

                                            <th class="px-6 py-3 font-medium bg-gray-200">
                                                Edit
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody class="bg-white text-center">


                                        {allDataTable?.map((item, i) => {
                                            
                                            return <>
                                                <tr className='border border-grey-400'>
                                                    <td className='text-black border-r border-gray-400'>{i + 1}</td>
                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">

                                                        <div class="text-sm leading-5 text-gray-900">
                                                            {item.carcab_name}
                                                        </div>


                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                                                        <div class="text-sm leading-5 text-gray-900">
                                                            {item.luggage}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                                                        <div class="text-sm leading-5 text-gray-900">
                                                            {item.pessenger}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                                                        <div class="text-sm leading-5 text-gray-900">
                                                            {item.bus_rate}
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                                                        <div class="text-sm leading-5 text-gray-900">
                                                            <img src={`http://193.203.162.218:4200/uploads/${item.carcabImg}`} className='h-30 w-40' />
                                                        </div>
                                                    </td>

                                                    <td class="px-6 py-4 whitespace-no-wrap  bg-white-200  border-r border-gray-400">
                                                        <div class="text-sm leading-5 text-gray-900">
                                                            {item.extra}
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

    )
}

