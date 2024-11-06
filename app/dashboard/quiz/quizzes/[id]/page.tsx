"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Test, testsData, TestType } from "@/data/data";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Page({ params }: { params: { id: string } }) {

    const testId = Number(params.id);
  
    const test : Test = testsData.find(test => test.id === testId)! ;

  const [question, setQuestion] = useState<number>(0);

  const [score, setScore] = useState<number>(0);

  const handleClick = (points : number) => {
    if (question + 1 >= test.content.length) {
      setScore(score + points);
      return null;
    } else {
      setScore(score + points);
      setQuestion(question + 1);
    }
  };

  //This checks the type of the question and calls proper UI function
  const checkTestType = () => {
    switch (test.content[question].type) {
      case (TestType.MCQ):
        return showMCQChoices();
      
      default:
      return showLikert();
    }

  }

  const showMCQChoices = () => {
    return (
      <div className="answers grid grid-cols-1 grid-rows-4 gap-2  *:bg-yellow-500">
            
        {test.content[question].choices?.map((choice, index) => (
          <Button
            className="py-auto whitespace-break-spaces text-xs"
            key={index}
            onClick={() => {handleClick(index+1)}}
          >
            {choice}
          </Button>
        ))}
          </div>
    )
  }

  const showLikert = () => {
    return (
      <RadioGroup defaultValue="likert" className="flex gap-5 justify-center">

      {Array.from({length:10}, (_,i) => (<div className="flex flex-col items-center space-y-2">
        <RadioGroupItem value={i.toString()} id={`r${i}`} onClick={() => {handleClick(i+1)}}/>
        <Label htmlFor={`r${i}`}>{i}</Label>
      </div>))}
    </RadioGroup>
    )
  }

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <Card className="flex w-[36rem] shadow-sm shadow-slate-300 flex-row h-auto">
        <div className="flex flex-col p-5 gap-5 w-3/4">
          <CardTitle>{test.title}</CardTitle>
          <Card className="border-none shadow-none space-y-2">
            <CardTitle>{`Question ${question + 1} / ${test.content.length}`}</CardTitle>
            <CardTitle>{`Score: ${score}`}</CardTitle>
            <CardDescription>{test.content[question].title}</CardDescription>
          </Card>
          {checkTestType()}
        </div>
        <div className="flex flex-col p-5 justify-end">
          {question === 0 ? null : (
            <Button
              className="max-w-fit"
              onClick={() => {
                setQuestion(question - 1);
              }}
            >
              Go Back
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
