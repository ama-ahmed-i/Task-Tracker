import { Plus, Search } from "lucide-react"


const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
  
       
        <div className="flex flex-col h-48 w-[30%] justify-center items-center bg-white shadow-2xl gap-4 p-2">
          <div>
          <h1 className="text-center text-gray-600 text-4xl font-bold">Task Tracker</h1>
          </div>
        <div className="flex gap-4">
        <input type="text"  placeholder="Write a task"
           className="border-2 border-gray-400 w-[70%] px-3 py-1 bg-gray-300 
           focus:bg-white outline-none transition-all p-3 rounded-sm"/>
          <button 
          className="bg-blue-700 w-[30%] p-1 text-white text-2xl
           hover:bg-blue-800 transition-all font-serif flex items-center rounded-sm gap-2">
            <Plus size={20} color="white" />
            Add
            </button>
        </div>

        {/*  */}



  
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-10 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

    </div>





        </div>

      </div>
  )
}

export default Home