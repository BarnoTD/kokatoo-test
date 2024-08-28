import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
    return <div className="w-full h-full flex flex-row justify-center items-center">
        <Card className="flex w-[36rem] shadow-sm shadow-slate-300 flex-row h-auto">
            <div className="flex flex-col p-5 gap-5 w-3/4">
            <CardTitle>Test Title</CardTitle>
            <Card className="border-none shadow-none">
                <CardTitle>Question 1 / 20</CardTitle>
                <CardDescription>Do you have an imaginary friend that you spend time with?</CardDescription>
            </Card>
            <div className="answers flex flex-col gap-2 *:bg-yellow-500">
            <Button className="w-1/2 h-fit whitespace-break-spaces">Answer 1</Button>
            <Button className="w-1/2">Answer 2</Button>
            <Button className="w-1/2">Answer 3</Button>
            </div>
            </div>
            <div className="flex flex-col p-5 justify-end">
            <Button className="max-w-fit ">Next</Button>
            </div>
        </Card>
    </div>
}