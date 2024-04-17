import { ContentImg } from "../layout";

export type CommitmentProps = {
  title: string;
  text: string;
}

export type GreenPracticesProps = {
  text: string;
}

export type EcoFriendlyProps = {
  text: string;
  img: ContentImg;
}

export type SustainabilityProps ={
  commitment: CommitmentProps;
  greenPractices: GreenPracticesProps;
  ecoFriendly: EcoFriendlyProps;
}