import { HStack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  getSearchBarValueAndFilter: (value: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const { getSearchBarValueAndFilter } = props;

  useEffect(() => {
    getSearchBarValueAndFilter(searchValue);
    console.log(searchValue);
  }, [searchValue]);

  return (
    <HStack w={["90%", "70%", "60%"]}>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        size="lg"
        mr={5}
        placeholder="Search for emoji..."
      />
      <Button colorScheme="teal" size="lg">
        Search
      </Button>
    </HStack>
  );
}
