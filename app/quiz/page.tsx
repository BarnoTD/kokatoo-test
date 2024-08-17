"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export default function CardWithForm() {
  const [age, setAge] = useState<number>(18);

  // Handle changes from the Slider
  const handleSliderChange = (value: number[]) => {
    setAge(value[0]);
  };

  // Handle changes from the Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newAge = parseInt(e.target.value);
    if (newAge > 30) newAge = 30;
    setAge(newAge);
  };

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <Card className="w-[26rem] shadow-lg shadow-slate-300 ">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Please specify some information for the quiz to be accurate. We
            won&apos;t record anything!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="gender">Please select your gender:</Label>
                <RadioGroup required className="flex space-x-1.5">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="r1" />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="r2" />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col space-y-3">
                <Label htmlFor="age">Please enter your age:</Label>
                <div className="flex space-x-10">
                  <Slider
                    value={[age]}
                    max={30}
                    step={1}
                    onValueChange={handleSliderChange} 
                    className="color-muted"
                  />
                  <Input
                    className="w-20"
                    type="number"
                    value={age}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email <span className="text-gray-500">(optional)</span></Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-muted text-black">Take Quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
