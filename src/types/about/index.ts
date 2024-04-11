import type { ContentImg } from "../layout"

export type Section = {
  title: string;
  img: ContentImg;
  text: string;
}

export type AboutProps = {
  origin: Section;
  mission: Section;
}