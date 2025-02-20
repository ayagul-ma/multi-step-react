export const ContinueButton = (props) => {
    return(
      <div className=" flex w-full gap-x-2 mt-auto justify-center items-center ">
        {props.currentStep != 1 && <button className="flex w-[150px] h-[44px] justify-center items-center gap-1 rounded-md  border">
            back 
            </button>}
          
          <button className="flex  w-[150px] justify-center items-center h-[44px] gap-1 rounded-md border bg-[#121316] text-white">
            Continue <span>{props.currentStep}/3</span> 
          </button>
          
          
        </div>
    )
  }