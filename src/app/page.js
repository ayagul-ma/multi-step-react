"use client"
import { ContinueButton } from "./components/ContineButton";
import { Header } from "./components/Header";
import { UserInformationStep } from "./components/UserInformationStep";
import React, { useState } from "react"

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  return (
   <main>
     <div className=" bg-white rounded-md w-[486px] h-[655px] p-8  flex flex-col  ">
      <Header/>
      <form className="flex flex-col flex-grow gap-y-3">
         <UserInformationStep/>
      </form>
      <ContinueButton currentStep={currentStep + 1}/>
    </div>
   </main>
  );
}``
