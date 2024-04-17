import { Dispatch, SetStateAction } from 'react';
import type { ContentImg, TextImageProps } from '../layout';

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


export type GreenApproachText = {
  p1: string;
  p2: string;
}

export type GreenApproachProps = {
  title: string;
  imgs: ContentImg[];
  text: GreenApproachText;
}

export type OurStandardsProps = {
  text: string;
  img: ContentImg
}

export type EnvironmentProps = {
  items: TextImageProps[];
}

export type HomeProps = {
  IntroCarousel: IntroCarouselProps;
  WhoWeAre: WhoProps;
  ServiceCarousel: ServiceCarouselProps;
  OurStandards: OurStandardsProps;
  Environment: EnvironmentProps;
}


export type FullScreenNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}