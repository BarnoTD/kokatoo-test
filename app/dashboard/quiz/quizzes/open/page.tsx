'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testsData } from "@/data/data";
import { useState } from "react";

const Test = testsData[0].test;

export default function Page() {

    const [question, setQuestion] = useState<number>(0);

    const handleChoice = () =>{
        if (question + 1 >= Test.length) {return null}
        else {setQuestion(question+1)}
    }

    return <div className="w-full h-full flex flex-row justify-center items-center">
        <Card className="flex w-[36rem] shadow-sm shadow-slate-300 flex-row h-auto">
            <div className="flex flex-col p-5 gap-5 w-3/4">
            <CardTitle>{testsData[0].title}</CardTitle>
            <Card className="border-none shadow-none space-y-2">
                <CardTitle>{`Question ${question + 1} / ${Test.length}`}</CardTitle>
                <CardDescription>{Test[question].title}</CardDescription>
            </Card>
            <div className="answers grid grid-cols-2 grid-rows-2 w-1/2 gap-2 *:bg-yellow-500">
            {
                Test[question].choices.map((choice,index) => (<Button className=" h-fit whitespace-break-spaces" key={index} onClick={handleChoice}>{choice}</Button>))
            }
            </div>
            </div>
            <div className="flex flex-col p-5 justify-end">
            {(question === 0)? null : <Button className="max-w-fit" onClick={()=>{setQuestion(question-1)}}>Go Back</Button>}
            </div>
        </Card>
    </div>
}