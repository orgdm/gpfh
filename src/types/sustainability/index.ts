import { ContentImg } from "../layout";

export type TwoLineHeading = {
  upper: string;
  lower: string;
}

export type CommitmentProps = {
  title: TwoLineHeading;
  text: string;
  img: ContentImg;
}

export type GreenPracticesProps = {
  text: string;
}

export type EcoFriendlyProps = {
  text: string;
  img: ContentImg;
}

export type IntroProps = {
  img: ContentImg;
  text: string;
}

export type SustainabilityProps ={
  intro: IntroProps;
  commitment: CommitmentProps;
  greenPractices: GreenPracticesProps;
  ecoFriendly: EcoFriendlyProps;
}