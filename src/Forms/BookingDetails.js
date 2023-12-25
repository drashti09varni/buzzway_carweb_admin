import React, { useEffect, useState } from 'react';

const BookingForm = () => {
  const [printData, setPrintData] = useState([]);

  const fetchContactData = async () => {
    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/allBooking";

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      setPrintData(jsonResponse?.data);
      console.log(jsonResponse)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <main className='main-container'>
      <h1 className='text-black text-[20px] py-3 px-8'> Bookings Details</h1>
      <div class="w-full h-screen ">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="flex flex-col">

            <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 my-10">
              <div class="align-middle inline-block w-full  shadow-xl overflow-x-auto sm:rounded-lg border border-gray-400 ">
                <table class="min-w-full text-center">

                  <thead className='text-center'>
                    <tr className="bg-gray-50 text-xs leading-4 text-gray-500 uppercase tracking-wider border-b border-gray-400">
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        ID
                      </th>
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        Name
                      </th>
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        Phone No
                      </th>
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        Date
                      </th>
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        Email
                      </th>
                      <th className="px-6 py-3 font-medium bg-gray-200 border-r border-gray-400">
                        Message
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white text-center">
                    {printData?.map((item, i) => (
                      <tr key={i} className='border border-grey-400'>
                        <td className='text-black border-r border-gray-400'>{i + 1}</td>
                        <td className="px-6 py-4 whitespace-no-wrap bg-white-200 border-r border-gray-400">
                          <div className="text-sm leading-5 text-gray-900">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap bg-white-200 border-r border-gray-400">
                          <div className="text-sm leading-5 text-gray-900">
                            {item.mobileno}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap bg-white-200 border-r border-gray-400">
                          <div className="text-sm leading-5 text-gray-900">
                            {item.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap bg-white-200 border-r border-gray-400">
                          <div className="text-sm leading-5 text-gray-900">
                            {item.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap bg-white-200 border-r border-gray-400">
                          <div className="text-sm leading-5 text-gray-900">
                            {item.message}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default BookingForm;
