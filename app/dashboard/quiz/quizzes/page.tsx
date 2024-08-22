"use client"
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ClockIcon, BookOpenIcon, PersonStanding } from "lucide-react"

export default function Page() {
  const [selectedTest, setSelectedTest] = useState(null)

  const tests = [
    {
        id: 1,
        title: "Worry Busters Quiz",
        description: "A fun quiz to understand how you feel when you're worried",
        long_description: "In this quiz, we'll explore some of the thoughts and feelings you might have when you're worried or nervous. Don't worry—there are no right or wrong answers! This quiz helps you and the grown-ups around you understand what might be making you feel uneasy, so we can find ways to make you feel better.",
        duration: "30 min",
        questions: 25,
        ageGroup: "7-12 years",
        difficulty: "Easy"
      },
      {
        id: 2,
        title: "Focus and Fun Challenge",
        description: "Test your ability to stay focused and finish tasks",
        long_description: "This challenge is all about seeing how well you can pay attention and complete different activities. You'll try some fun tasks that need concentration. It's like a game where you get to show how well you can focus, even when there are distractions. By doing this challenge, you'll learn more about how your brain works best!",
        duration: "45 min",
        questions: 30,
        ageGroup: "8-14 years",
        difficulty: "Medium"
      },
      {
        id: 3,
        title: "Feelings Checker",
        description: "A simple quiz to see how you're feeling inside",
        long_description: "The Feelings Checker is a gentle way to help you think about your emotions. You'll answer some questions that will help you figure out whether you're feeling happy, sad, or anything in between. This quiz is like a tool to help you understand your feelings better, so you can talk about them with people who care about you.",
        duration: "35 min",
        questions: 20,
        ageGroup: "9-15 years",
        difficulty: "Medium"
      },
      {
        id: 4,
        title: "Friendship Skills Game",
        description: "See how good you are at making and keeping friends",
        long_description: "Making friends and being a good friend is super important! In this game, you'll answer questions that show how you interact with others. It's a fun way to learn about the best ways to make new friends and keep the ones you have. You'll also discover ways to deal with tricky situations, like when you and a friend don't agree on something.",
        duration: "40 min",
        questions: 28,
        ageGroup: "6-12 years",
        difficulty: "Easy"
      },
      {
        id: 5,
        title: "Brain Power Test",
        description: "Challenge your brain with puzzles and fun questions",
        long_description: "Get ready to put on your thinking cap! The Brain Power Test is full of cool puzzles and questions that make you think in different ways. It's like a workout for your brain! You'll have fun figuring out the answers and might even learn some new ways to solve problems. This test shows how clever and creative you are!",
        duration: "50 min",
        questions: 40,
        ageGroup: "5-10 years",
        difficulty: "Challenging"
      },
      {
        id: 6,
        title: "Good Behavior Quiz",
        description: "Learn about different behaviors and how they affect others",
        long_description: "The Good Behavior Quiz is all about understanding how our actions can make others feel. You'll answer questions that help you think about what it means to be kind, helpful, and respectful. This quiz helps you learn more about how to make good choices and be a positive influence on those around you, whether at home, school, or with friends.",
        duration: "30 min",
        questions: 25,
        ageGroup: "6-13 years",
        difficulty: "Medium"
      },
      {
        id: 7,
        title: "Feel-Good Quiz",
        description: "Discover ways to stay happy and bounce back from tough times",
        long_description: "Everyone has tough days, but the Feel-Good Quiz helps you find the things that make you feel better and stay positive. You'll learn about different ways to handle challenges, like talking to a friend or taking a deep breath. This quiz shows you that it's okay to feel down sometimes, and it gives you tools to bounce back and feel good again.",
        duration: "45 min",
        questions: 30,
        ageGroup: "8-16 years",
        difficulty: "Challenging"
      }
  ]

  return (
    <div className="flex flex-col sm:flex-row h-full bg-background">
      <div className="w-full sm:w-3/5 lg:w-1/3 border-b sm:border-r sm:border-b-0 flex-shrink-0">
        <h2 className="text-xl sm:text-2xl font-bold p-4 border-b">Available Tests</h2>
        <ScrollArea className="h-50 sm:h-[calc(100vh-8rem)]">
          <div className="p-2 space-y-2">
            {tests.map((test) => (
              <Card 
                key={test.id} 
                className={`w-full cursor-pointer transition-colors ${selectedTest?.id === test.id ? 'bg-muted' : ''}`}
                onClick={() => setSelectedTest(test)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-base sm:text-lg">{test.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{test.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex-grow p-4 sm:p-6 overflow-auto ">
        {selectedTest ? (
          <div className='flex flex-col justify-center h-50 sm:h-[calc(100vh-8rem)]'>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{selectedTest.title}</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">{selectedTest.long_description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card className='flex justify-center'>
                <CardContent className="flex items-center p-4">
                  <ClockIcon className="mr-2 h-4 w-4 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">Duration: {selectedTest.duration}</span>
                </CardContent>
              </Card>
              <Card className='flex justify-center'>
                <CardContent className="flex justify-center items-center p-4">
                  <BookOpenIcon className="mr-2 h-4 w-4 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">Questions: {selectedTest.questions}</span>
                </CardContent>
              </Card>
              <Card className='flex justify-center'>
                <CardContent className="flex justify-center items-center p-4">
                  <PersonStanding className="mr-2 h-6 w-6 opacity-75" />
                  <span className="text-xs sm:text-sm font-medium">Age Group: <br /> {selectedTest.ageGroup}</span>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className='w-fit self-center bg-muted text-black '>Start Test</Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a test to view details
          </div>
        )}
      </div>
    </div>
  )
}