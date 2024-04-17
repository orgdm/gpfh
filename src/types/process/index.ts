import type { ContentImg } from "../layout";

export type ProcessParagraph = {
  p1: string;
  p2: string;
  p3: string;
}

export type ProcessProps = {
  imgs: ContentImg[];
  text: ProcessParagraph;
}
