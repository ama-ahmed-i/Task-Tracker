import { useParams } from "react-router-dom"



const EditTask = () => {
  
  const id = useParams().id;
 
  return (

    <div>
      
        <h1 className="text-yellow-800 font-bold flex items-center justify-center text-6xl h-screen  "> EditTask : Task Tracker {id} </h1>
        
         </div>
  )
}

export default EditTask