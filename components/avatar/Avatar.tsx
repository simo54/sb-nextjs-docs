import * as Avatar from "@radix-ui/react-avatar";

const { Root, Image, Fallback } = Avatar;

interface IAvatar {
  src: string;
  alt: string;
}

export default ({ src, alt }: IAvatar) => (
  <Root>
    <Image src={src} alt={alt} />
    <Fallback delayMs={300}>TEST</Fallback>
  </Root>
);
