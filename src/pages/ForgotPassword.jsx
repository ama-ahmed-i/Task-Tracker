import Input from "../components/Input"
import Button from "../components/Button"
import { ArrowLeft} from 'lucide-react';







const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="flex rounded-xl shadow-2xl bg-white w-[50%]">
        
      <div className="h-80 w-[55%] p-5 text-left mt-20 transition-all">
        <h1 className="text-2xl text-gray-800 ">Forgot Password</h1>
        <h1 className="mt-4 mb-4 text-sm">No worries, we will send you rest Password</h1>
        <form  className="flex flex-col items-center justify-center gap-4 ">
            <Input styles={'w-[100%] bg-gray-300 rounded-lg font-thin text-gray-400 hover:bg-none'} type={'text'} placeholder={'Type your email'} />
            <Button styles={'bg-blue-800 w-[100%] text-white text-lg rounde-lg h-10'} btnText={'Submit'}/>
            <h1 className="flex justify-center gray-400 gap-x-4"> 
            <ArrowLeft size={30} className="text-gray-600 hover:text-gray-700" strokeWidth={1} />
            
            back to log in
            </h1>
        </form>

      </div>
      <div className="w-[45%]"> 
      <img src="/src/assets/bgs.jpg" alt="Description of image" className="h-[100%] opacity-80 rounded-r-lg" />
      <div className="inset-0 items-center justify-center text-xl font-bold text-black ">
        Your Text Here
      </div>

      </div>
      
      {/*  */}
        {/* <div className="relative h-64 bg-[url('/src/assets/bgs.jpg')] bg-cover bg-center bg-no-repeat">
              <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                Welcome to My Website
              </p>
         </div> */}

    </div>
    </div>
  )
}

export default ForgotPassword