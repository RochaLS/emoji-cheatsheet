import { SimpleGrid, Box, Flex, Center, Text, SkeletonCircle } from "@chakra-ui/react";
import { CategorySection } from "./CategorySection";
import { CopyButton } from "./CopyButton";
import { EmojiAttribute } from "./EmojiAttribute";
import { Emoji } from "../App";

interface EmojisProps {
  emojis: Emoji[];
  isLoading: boolean;
}

export function Emojis(props: EmojisProps) {
  const { emojis, isLoading } = props;
  return (
    <SimpleGrid
      w={["90%", "90%", "90%", "75%"]}
      columns={[1, 1, 2, 2, 3]}
      spacing={5}
    >
      {emojis.map((emoji) => (
        <Box
          key={emoji.name}
          h="250px"
          bgColor="gray.800"
          borderRadius="10px"
          _hover={{ border: "2px solid #38B2AC" }}
          m={[1, 3, 5]}
        >
          <Flex mr={2} mt={2} justify="space-between">
            <CategorySection isLoading={isLoading} category={emoji.category} />
            <CopyButton isLoading={isLoading} emojiString={emoji.htmlCode[0]} />
          </Flex>
          <Center>
            <SkeletonCircle
              startColor="gray.600"
              endColor="gray.700"
              isLoaded={!isLoading}
              h="60px"
              w="60px"
            >
              <Text
                dangerouslySetInnerHTML={{
                  __html: `${emoji.htmlCode}`,
                }}
                fontSize="5xl"
              />
            </SkeletonCircle>
          </Center>
          <Box mb={10}>
            <EmojiAttribute
              isLoading={isLoading}
              attribute={emoji.name}
              attributeType="Name"
            />
            <EmojiAttribute
              isLoading={isLoading}
              attribute={emoji.htmlCode[0]}
              attributeType="HTML code"
            />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
