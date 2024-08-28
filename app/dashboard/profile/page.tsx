'use client'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';

interface Question {
  id: string;
  text: string;
  quizId: string;
}

interface Quiz {
  id: string;
  title: string;
  questions : Question[]
}

const MyComponent = () => {
  const [data, setData] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Quiz> = await axios.get('http://localhost:3010/quizzes/12');
        setData(response.data);
      } catch (err) {
        setError('Error fetching quizzes');
        console.log(err)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-7">
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {data ? (<div className="flex flex-col items-center space-y-5">
            <div>{data.title}</div>
            <div>
            <button className="bg-slate-500 p-4 mr-5 rounded-2xl  hover:bg-red-500">{data.questions[0].text}</button>
            <button className="bg-slate-500 p-4 rounded-2xl hover:bg-red-500 ">{data.questions[1].text}</button>
            </div>
            
          </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyComponent;