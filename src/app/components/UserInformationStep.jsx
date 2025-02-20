export const UserInformationStep = () => {
    return (
      <>
       <div className="space-y-2 flex flex-col">
             <label>
               first name<span className="text-red-500">*</span>
             </label>
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your first name"/>
            </div>
            <div className="space-y-2 flex flex-col">
             <label>
               last name<span className="text-red-500">*</span>
             </label>
            
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your last name"/>
            </div>
            <div className="space-y-2 flex flex-col"> 
             <label>
               username<span className="text-red-500">*</span>
             </label>
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your user name"/>
            </div>
      </>
    )
  }