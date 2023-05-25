import { useState } from 'react'
import SelectImage from './components/selectImage/selectImage'
import Progress from './components/Progress/Progress.tsx/Progress'
import ShowImage from './components/showImage/ShowImage'

const App = () => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [isUploaded,setUploaded] = useState<boolean>(false)
  const [value,setValue] = useState<number>(0)

  return (
      <div className="bg-gray-200 h-screen grid justify-center items-center relative">
      {
        (!isLoading && !isUploaded) && <SelectImage setIsLoading={setIsLoading} setUpLoaded={setUploaded} setValue={setValue}/>
      }
      {
        (isLoading && !isUploaded )&& <Progress value={value}/>
      }
      {
        isUploaded && <ShowImage />
      }
      {
        (isUploaded  )&& <button onClick={()=>{
          setIsLoading(false)
          setUploaded(false)
          setValue(0)
        }} className='absolute top-[10%] left-[10%] bg-white rounded-full flex items-center justify-center  h-10 w-10 shadow-lg shadow-blue-500/50'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
      </button>
      }
    </div>
  )
}

export default App