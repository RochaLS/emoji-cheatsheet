import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

interface CategoryTagButtonProps {
  category: { name: string; displayName: string };
  getData: (category: string) => Promise<void>;
}

export function CategoryTagButton(props: CategoryTagButtonProps) {
  const { category, getData } = props;
  const size = useBreakpointValue({ base: "xs", md: "md" });

  return (
    <Button
      size={size}
      colorScheme="teal"
      variant="outline"
      onClick={() => getData(category.name)}
    >
      {category.displayName}
    </Button>
  );
}
