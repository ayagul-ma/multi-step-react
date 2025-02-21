"use client"
import { ContinueButton } from "./components/ContineButton";
import { Header } from "./components/Header";
import { UserInformationStep } from "./components/UserInformationStep";
import React, { useState } from "react"
import { ContactStep } from "./components/ContactStep";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "", 
    userName: "", 
    email: "",
    phoneNUmber: "",
    password: "",
  })

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1) 
  }
 
  return (
   <main>
     <div className=" bg-white rounded-md w-[486px] h-[655px] p-8  flex flex-col  ">
      <Header/>
      <form className="flex flex-col flex-grow gap-y-3">
         {currentStep == 0 && <UserInformationStep formValues=
         {formValues} setFormValues={setFormValues}/>}
         {currentStep == 1 && <ContactStep formValues={formValues}
         setFormValues={setFormValues}/>}
      </form>
      <ContinueButton currentStep={currentStep + 1} nextStep={nextStep}/>
    </div>
   </main>
  );
}``
