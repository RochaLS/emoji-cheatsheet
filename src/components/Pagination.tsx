import { useBreakpointValue, Button, HStack, SimpleGrid } from "@chakra-ui/react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { totalItems, itemsPerPage, paginate } = props;
  const pageNumbers = [];
  const size = useBreakpointValue({ base: "xs", md: "sm" });

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);

  }

  return (
    <SimpleGrid m={10} spacing={3} columns={[7, 7, 12, pageNumbers.length]}>
      {pageNumbers.map((num) => (
        <Button key={num} onClick={() => paginate(num)} colorScheme="teal" size="sm">
          {num}
        </Button>
      ))}
    </SimpleGrid>
  );
}
