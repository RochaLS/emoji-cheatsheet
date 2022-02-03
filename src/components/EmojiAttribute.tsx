import { Container, Text } from "@chakra-ui/react";

interface EmojiAttribute {
  attribute: string;
  attributeType: string;
}

export function EmojiAttribute(props: EmojiAttribute) {
  return (
      <Text
        borderRadius="10px"
        m={3}
        p={2}
        bgColor="gray.900"
        fontSize="lg"
        textAlign="center"
        maxHeight="65px"
        isTruncated
      >
        <span style={{ fontWeight: "bold" }}>{props.attributeType}: </span>
        {props.attribute}
      </Text>
  );
}
