"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ClockIcon, BookOpenIcon, PersonStanding } from "lucide-react";
import Link from "next/link";
import { Test, testsData } from "@/data/data";

export default function Page() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
  };

  return (
    <div className="flex flex-col sm:flex-row h-full bg-background">
      <div className="w-full sm:w-3/5 lg:w-1/3 border-b sm:border-r sm:border-b-0 flex-shrink-0">
        <h2 className="text-xl sm:text-2xl font-bold p-4 border-b">
          Available Tests
        </h2>
        <ScrollArea className="h-50 sm:h-[calc(100vh-8rem)]">
          <div className="p-2 space-y-2">
            {testsData.map((test) => (
              <Card
                key={test.id}
                className={`w-full cursor-pointer transition-colors ${
                  selectedTest?.id === test.id ? "bg-muted" : ""
                }`}
                onClick={() => handleTestSelect(test)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-base sm:text-lg">
                    {test.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {test.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex-grow p-4 sm:p-6 overflow-auto ">
        {selectedTest ? (
          <div className="flex flex-col justify-center h-50 sm:h-[calc(100vh-8rem)]">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {selectedTest.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {selectedTest.long_description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card className="flex justify-center">
                <CardContent className="flex items-center p-4">
                  <ClockIcon className="mr-2 h-4 w-4 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">
                    Duration: {selectedTest.duration}
                  </span>
                </CardContent>
              </Card>
              <Card className="flex justify-center">
                <CardContent className="flex justify-center items-center p-4">
                  <BookOpenIcon className="mr-2 h-4 w-4 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">
                    Questions: {selectedTest.questions}
                  </span>
                </CardContent>
              </Card>
              <Card className="flex justify-center">
                <CardContent className="flex justify-center items-center p-4">
                  <PersonStanding className="mr-2 h-6 w-6 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">
                    Age Group: <br /> {selectedTest.ageGroup}
                  </span>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="w-fit self-center bg-muted text-black "
            >
              
              <Link
                href={{
                  pathname: "/dashboard/quiz/quizzes/open",
                  query: { testId: selectedTest.id },
                }}
              >
                Start Test
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a test to view details
          </div>
        )}
      </div>
    </div>
  );
}
