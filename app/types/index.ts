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
  genre: string;
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

export type RootStackParamList = {
  Tabs: undefined;
  StoryReader: { storyId: string };
  EndPage: { storyId: string };
};

export type TabParamList = {
  index: undefined;
  explore: undefined;
  stories: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const TemporaryComponent = () => null;

export default TemporaryComponent;
