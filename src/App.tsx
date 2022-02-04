import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CategorySection } from "./components/CategorySection";
import { CategoryTagButton } from "./components/CategoryTagButton";
import { CopyButton } from "./components/CopyButton";
import { EmojiAttribute } from "./components/EmojiAttribute";
import { SearchBar } from "./components/SearchBar";
import { client } from "./services/emojiApi";

export interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

interface GetDataParams {
  category: string;
}

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  async function getData(category?: GetDataParams ) {
    let emojis: Emoji[] = [];
    await client.get("all").then((response) => {
      for (let i = 0; i < 10; i++) {
        emojis.push(response.data[i]);
      }
      setEmojis(emojis);
    });
  }


  useEffect(() => {
    getData();
  });

  const categories = [
    "Smileys and people",
    "Animals and nature",
    "Food and drink",
    "Travel and places",
    "Activites",
    "Objects",
    "Symbols",
    "Flags",
  ];

  return (
    <>
      <Center m={8}>
        <Heading textAlign="center">
          Welcome to your Emoji cheatsheet! 😄
        </Heading>
      </Center>
      <Center flexDirection="column">
        <SearchBar />
        <SimpleGrid m={6} columns={[3,5,8]} spacing={3}>
          {categories.map(category => <CategoryTagButton name={category} />)}
        </SimpleGrid>
      </Center>
      <Center>
        <SimpleGrid w="90%" columns={[1, 3, 3]} spacing={5}>
          {emojis.map((emoji) => (
            <Box
              key={emoji.name}
              h="250px"
              bgColor="gray.800"
              borderRadius="10px"
              _hover={{ border: "2px solid #38B2AC" }}
              m={[1,3,5]}
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
      </Center>
    </>
  );
}

export default App;
