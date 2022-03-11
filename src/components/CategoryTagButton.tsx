import { Button, useBreakpointValue } from "@chakra-ui/react";

interface CategoryTagButtonProps {
  category: { name: string; displayName: string };
  getData: (category: string) => Promise<void>;
  resetPage: () => void;
}

export function CategoryTagButton(props: CategoryTagButtonProps) {
  const { category, getData, resetPage } = props;
  const size = useBreakpointValue({ base: "xs", md: "md" });

  return (
    <Button
      size={size}
      colorScheme="teal"
      variant="outline"
      onClick={() => {
        resetPage();
        getData(category.name);
      }}
    >
      {category.displayName}
    </Button>
  );
}
