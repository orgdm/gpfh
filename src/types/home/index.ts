import { Dispatch, SetStateAction } from 'react';

export type ServiceProps = {
  img: string;
  title: string;
  desc?: string;
  id: number;
};

export type FullScreenNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}