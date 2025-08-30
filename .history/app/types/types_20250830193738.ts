export interface Choice {
  id: string;
  text: string;
  nextChapterId: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  choices: Choice[];
  isEnding?: boolean;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  coverImage: string;
  firstChapterId: string;
  chapters: { [key: string]: Chapter };
}

export interface UserProgress {
  storyId: string;
  currentChapterId: string;
  choices: { chapterId: string; choiceId: string }[];
  completed: boolean;
}

export interface UserStats {
  storiesRead: number;
  choicesMade: number;
  storiesCompleted: number;
  favoriteGenre: string;
}