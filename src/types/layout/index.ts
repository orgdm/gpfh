export type HeadingProps = {
  title: string;
  size?: string;
}

export type ContentImg = {
  title: string;
  url: string;
  desc?: string;
  alt: string;
}

export type TextImageLinkProps = {
  link: string;
  linkText: string;
  img: ContentImg;
  title: string;
  text: string;
  rtl: boolean;
}

export type TextImageProps = {
  img: ContentImg;
  title: string;
  text: string;
  rtl: boolean;
}