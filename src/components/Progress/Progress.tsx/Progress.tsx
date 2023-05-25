
type Props ={
    value:number
}
const Progress = ({value}:Props) => {
  return (
    
<div className="bg-white w-60 md:w-80 py-8 px-4 rounded-lg">
<div className="flex justify-between mb-1">
  <span className="text-base font-medium text-blue-700">loading...</span>
  <span className="text-sm font-medium text-blue-700">{value}%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5">
  <div className="bg-blue-600 h-2.5 rounded-full" style={{width:`calc(${value * 100})`}}></div>
</div></div>

  )
}

export default Progress