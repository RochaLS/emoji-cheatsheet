import { Skeleton, Text } from "@chakra-ui/react";

interface EmojiAttribute {
  attribute: string;
  attributeType: string;
  isLoading: boolean;
}

export function EmojiAttribute(props: EmojiAttribute) {
  return (
    <Skeleton startColor="gray.600" endColor="gray.700" m={5} isLoaded={!props.isLoading}>
      <Text
        borderRadius="10px"
        p={1}
        bgColor="gray.900"
        fontSize="lg"
        textAlign="center"
        maxHeight="65px"
        isTruncated
      >
        <span style={{ fontWeight: "bold" }}>{props.attributeType}: </span>
        {props.attribute}
      </Text>
    </Skeleton>
  );
}
