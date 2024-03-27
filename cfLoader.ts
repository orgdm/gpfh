type CfLoaderProps = {
  src: string;
  width: number;
  quality?: number;
}

const cloudfrontLoader = ({ src, width, quality }: CfLoaderProps) => {
  const url = new URL(`https://d2f8t3wl02pa4y.cloudfront.net${src}`);
  url.searchParams.set('format', 'auto');
  url.searchParams.set('width', width.toString());
  url.searchParams.set('quality', (quality || 75).toString());
  return url.href;
};

export default cloudfrontLoader;
