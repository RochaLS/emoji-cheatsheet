import { SimpleGrid, Box, Flex, Center, Text } from "@chakra-ui/react";
import { CategorySection } from "./CategorySection";
import { CopyButton } from "./CopyButton";
import { EmojiAttribute } from "./EmojiAttribute";
import { Emoji } from "../App";

interface EmojisProps {
  emojis: Emoji[];
}

export function Emojis(props: EmojisProps) {
  const { emojis } = props;

  return (
    <SimpleGrid w="90%" columns={[1, 1, 2, 4]} spacing={5}>
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
            <CategorySection category={emoji.category} />
            <CopyButton />
          </Flex>

          <Center>
            <Text
              dangerouslySetInnerHTML={{
                __html: `${emoji.htmlCode}`,
              }}
              fontSize="5xl"
            />
          </Center>
          <Box mb={10}>
            <EmojiAttribute attribute={emoji.name} attributeType="Name" />
            <EmojiAttribute
              attribute={emoji.htmlCode[0]}
              attributeType="HTML code"
            />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
