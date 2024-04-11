import { Dispatch, SetStateAction } from 'react';
import type { ContentImg } from '../layout';

export type IntroCarouselProps = {
  imgs: ContentImg[];
}

export type WhoProps = {
  text: string;
  imgs: ContentImg[];
}

export type ServiceProps = {
  img: ContentImg; 
};

export type ServiceCarouselProps = {
  services: ServiceProps[];
}

export type GreenApproachProps = {
  img: ContentImg;
  text: string;
}

export type HomeProps = {
  IntroCarousel: IntroCarouselProps;
  WhoWeAre: WhoProps;
  ServiceCarousel: ServiceCarouselProps;
  GreenApproach: GreenApproachProps;
}


export type FullScreenNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}