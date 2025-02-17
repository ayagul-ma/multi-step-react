import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white rounded-md w-[486px] h-[655px] p-8  flex flex-col justify-center items-center  ">
      <div className="">
      <img className="p-0 left-0 b-0 " src="Main.png"/>
      <h1 className=" text-2xl text-[#202124;] ">Join Us! 😎 </h1>
      <p className=" text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accuartely.</p>
      </div>
      <div className="flex flex-col flex-grow gap-y-2"> 
       <div>
        <label for="firstName">First name
        <span>*</span>
        </label>
      </div>
      <input className="border-black-500 w-[393px] h-[40px] " placeholder="Your first name"/>
      <div>
        <label for="lasttName">Lastt name
        <span>*</span>
        </label>
      </div>
      <input className="border-black-500 w-[393px] h-[40px] " placeholder="Your first name"/>
      <div>
        <label for="userName"> Username
        <span>*</span>
        </label>
      </div>
      <input className="border-black-500 w-[393px] h-[40px] " placeholder="Your user name"/>
      </div>
    </div>

    

    
  );
}
