import { Box, Center, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react";
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

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  async function getData(category: string) {
    category = category === "all" ? "all" : `all/category_${category}`;
    let emojis: Emoji[] = [];
    await client.get(category).then((response) => {
      for (let i = 0; i < 10; i++) {
        emojis.push(response.data[i]);
      }
      setEmojis(emojis);
    });
    console.log("here");
  }

  useEffect(() => {
    getData("all");
    console.log("here");
  }, []);

  const categories = [
    {
      name: "smileys_and_people",
      displayName: "Smileys / People",
    },
    {
      name: "animals_and_nature",
      displayName: "Animals / Nature",
    },
    {
      name: "food_and_drink",
      displayName: "Food and drink",
    },
    {
      name: "travel_and_places",
      displayName: "Travel / Places",
    },
    {
      name: "activities",
      displayName: "Activities",
    },
    {
      name: "objects",
      displayName: "Objects",
    },
    {
      name: "symbols",
      displayName: "Symbols",
    },
    {
      name: "flags",
      displayName: "Flags",
    },
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
        <SimpleGrid m={6} columns={[3, 3, 4, 8]} spacing={3}>
          {categories.map((category) => (
            <CategoryTagButton getData={getData} category={category} />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
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
      </Center>
    </>
  );
}

export default App;
