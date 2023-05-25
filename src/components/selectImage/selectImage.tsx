import { ReactElement } from 'react'
import convertToBase64 from '../../utils/convertToBase64'
import uploadImage from '../../utils/uploadImage'
type params ={
  setIsLoading:React.Dispatch<React.SetStateAction<boolean>>,
  setUpLoaded:React.Dispatch<React.SetStateAction<boolean>>,
  setValue:React.Dispatch<React.SetStateAction<number>>
}
const SelectImage = ({setIsLoading,setUpLoaded,setValue}:params):ReactElement => {
  // getfile
 

  const handleUpload =async (e:React.ChangeEvent<HTMLInputElement>| null,dragE:React.DragEvent<HTMLDivElement>|null)=>{
          // barrier
            const file =  e?.target?.files?.[0] ?? dragE?.dataTransfer.files[0]
            
            const base64String:string =  await convertToBase64(file);
            
            uploadImage(base64String,setIsLoading,setUpLoaded,setValue)
          
  }
 
  return (
    <div className='bg-white rounded-lg shadow-lg shadow-blue-500/50 h- w-80 md:w-96 py-6'>

      <div className='flex flex-col items-center'>
      <h5 className='mb-4 font-semibold text-gray-600 text-lg'>Upload Image</h5>
      <p className='inline-block text-center mb-4 text-gray-400'>File should be .jpeg,.jpg,.png,.svg,...</p>
    <div  
    onDragOver={(e)=>e.preventDefault()} 
    onDrop={(e) => {
      e.preventDefault();
   
     
      handleUpload(null,e);
    }}
    className='border-dashed border-red-600 w-64 h-56 bg-blue-200 rounded-lg flex flex-col  justify-center md:w-80 cursor-pointer relative'>
      <div className='w-full flex items-center justify-center'>
      <img src="/image.svg" alt="cloud image" className='object-center'/>
      </div>
      <div>
        <span className='text-center text-gray-400 flex w-full  justify-center absolute bottom-5'>Drag & Drop your image here</span>
      </div>
    </div>
    <h5 className='text-gray-400 m-3'>Or</h5>

    <div>
      <input type="file" name="" id="file" hidden accept='.png,.svg,.jpeg,.jpg' onChange={(e)=>handleUpload(e,null)} />
      <label htmlFor='file' className='text-white bg-blue-500 rounded-md p-2 cursor-pointer'>Choose a file</label>
    </div>
      </div>

    </div>
  )
}

export default SelectImage