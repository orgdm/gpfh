import type { ContentImg } from "../layout";

export type PeopleParagraph = {
  p1: string;
  p2: string;
  p3: string;
}

export type PeopleProps = {
  imgs: ContentImg[];
  text: PeopleParagraph;
}