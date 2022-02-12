import { CopyIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

interface CopyButtonProps {
  emojiString: string;
}

export function CopyButton(props: CopyButtonProps) {
  const { emojiString } = props;
  return (
      <Button m={2} size="sm" colorScheme="teal" leftIcon={<CopyIcon/>} onClick={() => navigator.clipboard.writeText(emojiString)}>Copy</Button>
  )
}
