import * as Avatar from "@radix-ui/react-avatar";

const { Root, Image, Fallback } = Avatar;

export interface IAvatar {
  src: string;
  alt: string;
  rounded?: boolean;
}

export default ({ src, alt, rounded }: IAvatar) => (
  <Root>
    <Image
      src={src}
      alt={alt}
      /**
       * 👇 Implemented for demo only
       */
      style={rounded ? { borderRadius: "100%" } : {}}
    />
    <Fallback delayMs={300}>TEST</Fallback>
  </Root>
);
