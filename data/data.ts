interface Question {
  type: TestType;
  title: string;
  choices: string[]|null;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  long_description: string;
  duration: string;
  questions: number;
  ageGroup: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Challenging";
  content: Question[];
}


export enum TestType {
  MCQ,
  Likert,
  Writing
}

export const testsData: Test[] = [
  {
    id: 1,
    title: "The Enchanted Mermaid Adventure",
    description: "A fun quiz to understand how you feel when you're worried",
    long_description: `In a vibrant coastal village, a group of adventurous children often 
    gathered by the shimmering sea, sharing tales of the legendary 
    mermaid who was said to possess magical powers. One sunny afternoon,
    they decided to embark on a quest to find her. The air was filled with 
    excitement as they set sail on a colorful boat, the waves dancing beneath them.
    As they ventured further into the deep blue, they noticed the water sparkling in the sunlight,
    and suddenly, a beautiful figure emerged from the depths. It was the mermaid, her long hair 
    flowing like seaweed, and her smile bright as the sun. The children gasped in awe, but as they approached, 
    the waves began to swell, and dark clouds gathered above. Suddenly, a loud clap of thunder echoed across 
    the sky! The children felt a mix of excitement and fear. What would they do next? Would they be 
    brave enough to approach the mermaid, or would they turn back to safety?
`,
    duration: "30 min",
    questions: 25,
    ageGroup: "7-12 years",
    difficulty: "Easy",
    content: [
      {
        type : TestType.MCQ,
        title: "When you first saw the mermaid, what did you do?",
        choices: [
          " A. I jumped into the water to swim closer.",
          "B. I froze in place, unsure of what to do.",
          "C. I called my friends to come and see her with me.",
        ],
      },
      {
        type : TestType.MCQ,
        title: "As the waves started to rise, how did you react?",
        choices: [" A. I laughed and said it was just part of the adventure!", "B. I felt scared and wanted to go back to the shore.", "C. I held onto the boat tightly and watched the waves."],
      },
      {
        type : TestType.MCQ,
        title: "When the thunder roared, what was your first action?",
        choices: [" A. I covered my ears and tried to ignore it.", "B. I shouted for everyone to stay calm.", "C. I panicked and wanted to hide under the boat."],
      },
      { type : TestType.MCQ, title: "If the mermaid smiled at you, what would you do?", choices: ["A. I would swim closer to talk to her!", "B. I would feel too shy and stay back.", "C. I would wave and smile back at her."] },
      { type : TestType.MCQ, title: "If you realized you were far from your friends, how would you respond?", choices: ["A. I would call out to them to come closer.", "B. I would feel scared and try to swim back quickly.", "C. I would wait where I was and hope they find me."] },
      { type : TestType.MCQ, title: "When you think about returning to the sea tomorrow, how do you feel?", choices: ["A. I can’t wait to go back and see the mermaid!", "B. I’m worried about what might happen.", "C. I’m excited but also a little nervous."] },
      { type : TestType.MCQ, title: "If you heard a strange noise in the water, what would you do?", choices: ["A. I would dive under to see what it is!", "B. I would feel scared and want to leave immediately.", "C. I would try to listen carefully to figure it out."] },
      { type : TestType.Writing, title: "How would you describe your adventure to your friends later?", choices:null },
    ],
  },
];
