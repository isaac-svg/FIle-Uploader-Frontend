import axios from "axios"
import { ReactElement, useEffect, useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShowImage = ():ReactElement => {
  const [data,setData] = useState<string>("")
  useEffect(()=>{
    axios.get(`https://file-uploader-api.vercel.app/upload`).then(res=>{
      const {0:{imageURL}} = res.data
      setData(imageURL)
      console.log(imageURL)
    })
  },[])
  return (
    <div className='bg-white rounded-lg shadow-lg shadow-blue-500/50 h- w-80 md:w-96 py-6'>
      
      <div className='flex flex-col items-center'>
      <div className='mb-4 w-10 h-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
  <path className="text-green-500 w-full" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
</div>
      <p className='inline-block text-center mb-4 text-black font-medium text-lg'>uploaded successfully</p>
    <div className='border-dashed border-red-600 w-64 h-56 bg-blue-200 rounded-lg  md:w-80 cursor-pointer '>
      <div className='w-full h-full'>
      <img src={data} alt="cloud image" className='object-fill overflow-hidden w-full h-full'/>
      </div>
      
    </div>


    <div className="relative w-64 md:w-80 mt-4">
      <input type="text" value={data} readOnly  id="url" className=" py-2 pl-1 bg-gray-100 text-green-400 mx-auto w-full relative rounded-lg outline-none"/>
      
      <CopyToClipboard text={data}
          onCopy={() => {}}>
          <button  className='text-white bg-blue-500 rounded-md py-2 px-3 cursor-pointer absolute right-0 bottom-0'>Copy Link</button>
        </CopyToClipboard>
    </div>
      </div>

    </div>
  )
}

export default ShowImage