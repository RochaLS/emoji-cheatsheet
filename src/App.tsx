import { Center, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CategoryTagButton } from "./components/CategoryTagButton";
import { Emojis } from "./components/Emojis";
import { Pagination } from "./components/Pagination";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);


  async function getData(category: string) {
    category = category === "all" ? "all" : `all/category_${category}`;
    let emojis: Emoji[] = [];
    await client.get(category).then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        emojis.push(response.data[i]);
      }
      setEmojis(emojis);
    });
    console.log("here");
  }

  // Change page
  const paginate = (page: number) => setCurrentPage(page)

  useEffect(() => {
    getData("all");
    console.log("here");
  }, []);

  // Get current emojis
  const indexOfLastEmoji = currentPage * itemsPerPage;
  const indexOfFirstEmoji = indexOfLastEmoji - itemsPerPage;
  const currentEmojis = emojis.slice(indexOfFirstEmoji, indexOfLastEmoji)

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
            <CategoryTagButton key={category.name} getData={getData} category={category} />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
       <Emojis emojis={currentEmojis}/>
      </Center>
      <Center>
        <Pagination itemsPerPage={itemsPerPage} totalItems={emojis.length} paginate={paginate}/>
      </Center>
    </>
  );
}

export default App;
