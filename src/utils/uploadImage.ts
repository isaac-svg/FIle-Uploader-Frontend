import axios from "axios"




const uploadImage = (base64String:string,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>,setUpLoaded:React.Dispatch<React.SetStateAction<boolean>>,setValue:React.Dispatch<React.SetStateAction<number>>) => {
    
    axios.post("http://localhost:3000/upload",{image:base64String},{
       onUploadProgress(progress) {


        
            
        if(progress?.total ){
            setIsLoading(true);
            setUpLoaded(false)
            console.log(Math.round(progress?.loaded /progress?.total!))
            setValue(Math.round(progress?.loaded /progress?.total!)*100)
        }
        if(Math.round(progress?.loaded/progress?.total!)*100 ==100){
           setTimeout(()=>{ setIsLoading(false)
            setUpLoaded(true)},2500)
        }
       },
    }).then(res=>{()=>{}}).catch(err=>console.log(err.message))
}

export default uploadImage