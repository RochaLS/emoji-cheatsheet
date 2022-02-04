import { HStack, Input, Button } from "@chakra-ui/react";

export function SearchBar() {
  return (
    <HStack w={["90%","70%","60%"]}>
      <Input size="lg" mr={5} placeholder="Search for emoji..." />
      <Button colorScheme="teal" size="lg" >Search</Button>
    </HStack>
  )
}
