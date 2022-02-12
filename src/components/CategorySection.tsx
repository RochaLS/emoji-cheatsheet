import { Box, Skeleton, Text} from "@chakra-ui/react";

interface CategorySectionProps {
  category: string;
  isLoading: boolean;
}

export function CategorySection(props: CategorySectionProps) {
  return (
    <Box
      m={3}
      w="50%"
      bgColor="gray.800"
      color="#319795"
      border="1px solid #319795"
      borderRadius="5px"
    >
      <Skeleton
        startColor="gray.600"
        endColor="gray.700"
        isLoaded={!props.isLoading}
      >
        <Text textAlign="center">{props.category}</Text>
      </Skeleton>
    </Box>
  );
}
