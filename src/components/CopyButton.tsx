import { CopyIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

export function CopyButton() {
  return (
      <Button m={2} size="sm" colorScheme="teal" leftIcon={<CopyIcon/>}>Copy</Button>
  )
}
