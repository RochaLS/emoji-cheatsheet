import { CopyIcon } from "@chakra-ui/icons";
import { Button, Flex, Skeleton } from "@chakra-ui/react";

interface CopyButtonProps {
  emojiString: string;
  isLoading: boolean;
}

export function CopyButton(props: CopyButtonProps) {
  const { emojiString, isLoading } = props;
  return (
    <Skeleton startColor="gray.600" endColor="gray.700" isLoaded={!isLoading}>
      <Button
        m={2}
        size="sm"
        colorScheme="teal"
        leftIcon={<CopyIcon />}
        onClick={() => navigator.clipboard.writeText(emojiString)}
      >
        Copy
      </Button>
    </Skeleton>
  );
}
