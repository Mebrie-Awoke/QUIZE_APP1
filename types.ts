export interface Note {
  id: string;
  topic: string;
  content: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}
