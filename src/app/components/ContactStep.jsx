export const ContactStep = () => {
    return (
      <>
       <div className="space-y-2 flex flex-col">
             <label>
               Email<span className="text-red-500">*</span>
             </label>
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your wmail.."/>
            </div>
            <div className="space-y-2 flex flex-col">
             <label>
               Phone number<span className="text-red-500">*</span>
             </label>
            
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your phone number..."/>
            </div>
            <div className="space-y-2 flex flex-col">
             <label>
               Password<span className="text-red-500">*</span>
             </label>
            
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your password.."/>
            </div>
            <div className="space-y-2 flex flex-col"> 
             <label>
               Confirm password<span className="text-red-500">*</span>
             </label>
             <input className="w-full p-3 text-base rounded-md outline-[#cbd5e1] border" placeholder="Your password..."/>
            </div>
      </>
    )
  }