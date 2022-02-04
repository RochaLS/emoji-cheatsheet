import { Button, useBreakpointValue } from "@chakra-ui/react";

interface CategoryTagButtonProps {
  name: string;
}



export function CategoryTagButton(props: CategoryTagButtonProps) {

  const size = useBreakpointValue({ base: "xs", md: "md" });
  return (
    <Button size={size} colorScheme="teal" variant="outline">{props.name}</Button>
  )
}
