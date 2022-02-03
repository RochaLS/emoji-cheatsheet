import { HStack, Input, Button } from "@chakra-ui/react";

export function SearchBar() {
  return (
    <HStack m={10} w="60%">
      <Input size="lg" mr={5} placeholder="Search for emoji..." />
      <Button colorScheme="teal" size="lg" >Search</Button>
    </HStack>
  )
}
