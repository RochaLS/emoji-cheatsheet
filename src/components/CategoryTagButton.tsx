import { Button, useBreakpointValue } from "@chakra-ui/react";
import { Emoji } from "../App";

interface CategoryTagButtonProps {
  name: string;
  // getData: (arg0?: string) => Promise<void>;
}



export function CategoryTagButton(props: CategoryTagButtonProps) {

  const size = useBreakpointValue({ base: "xs", md: "md" });
  return (
    <Button size={size} colorScheme="teal" variant="outline">{props.name}</Button>
  )
}
