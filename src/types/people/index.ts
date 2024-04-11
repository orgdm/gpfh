import type { ContentImg } from "../layout";

export type ParagraphProps = {
  para: string;
}

export type PeopleParagraph = {
  p1: string;
  p2: string;
  p3: string;
}

export type Person = {
  imgs: ContentImg[];
  text: PeopleParagraph;
}

export type PeopleProps = {
  imgs: ContentImg[];
  text: PeopleParagraph;
}