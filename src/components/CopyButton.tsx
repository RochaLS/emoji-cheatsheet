import { CopyIcon } from "@chakra-ui/icons";
import { Button, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

interface CopyButtonProps {
  emojiString: string;
  isLoading: boolean;
}

export function CopyButton(props: CopyButtonProps) {
  const { emojiString, isLoading} = props;

  const [isActive, setIsActive] = useState(false);
  console.log(isActive)


  function copyAndDisplayCopyConfirmation() {
    setIsActive(true);
    navigator.clipboard.writeText(emojiString)
    setTimeout(() => {
      setIsActive(false);
    }, 2000)
  }
  return (
    <Skeleton startColor="gray.600" endColor="gray.700" isLoaded={!isLoading}>
      {isActive === false ? (
        <Button
          m={2}
          size="sm"
          colorScheme="teal"
          leftIcon={<CopyIcon />}
          onClick={() => copyAndDisplayCopyConfirmation()}
          isActive={isActive}
        >
          Copy
        </Button>
      ) : (
        <Button
          m={2}
          size="sm"
          colorScheme="teal"
          leftIcon={<CopyIcon />}
          onClick={() => copyAndDisplayCopyConfirmation()}
          isActive={isActive}
        >
          Copied!
        </Button>
      )}
    </Skeleton>
  );
}
