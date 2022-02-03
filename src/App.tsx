import { Box, Button, Center, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { EmojiAttribute } from "./components/EmojiAttribute";
import { client } from "./services/emojiApi";

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

function App() {

  const [emojis, setEmojis] = useState<Emoji[]>([]);

  async function getData() {
    let emojis: Emoji[]  = [];
    await client.get('all').then(response => {
      for (let i = 0; i < 10; i++) {
        emojis.push(response.data[i]);
      }
      setEmojis(emojis);
    })
  }

  useEffect(() => {
    getData();
  })

  return (
    <>
      <Center m={10}>
        <Heading>Welcome to your Emoji cheatsheet! 😄</Heading>
      </Center>
      <Center>
        <SimpleGrid w="90%" columns={3} spacing={10}>
          {emojis.map((emoji) => (
            <Box
              key={emoji.name}
              h="250px"
              bgColor="gray.800"
              borderRadius="10px"
            >
              <Center>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: `${emoji.htmlCode}`,
                  }}
                  fontSize="5xl"
                  mt={5}
                />
              </Center>
              <EmojiAttribute attribute={emoji.name} attributeType="Name" />
              <EmojiAttribute attribute={emoji.category} attributeType="Category" />
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default App
