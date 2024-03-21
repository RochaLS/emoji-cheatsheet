import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
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
  const [filteredEmojis, setFilteredEmojis] = useState<Emoji[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(81);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getData(category: string) {
    category = category === "all" ? "all" : `all/category/${category}`;
    let emojis: Emoji[] = [];
    setIsLoading(true);
    await client.get(category).then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        if (!response.data[i].name.includes("type")) {
          emojis.push(response.data[i]);
        }
      }
      console.log(emojis);
      setEmojis(emojis);
    });
    setIsLoading(false);
  }

  function getSearchBarValueAndFilter(value: string) {
    if (value !== "") {
      console.log(emojis.length);
      const filteredEmojis = emojis.filter((emoji) =>
        emoji.name.includes(value)
      );
      setFilteredEmojis(filteredEmojis);
    } else {
      setFilteredEmojis([]); // Resseting filtered emojis
    }
  }

  // Change page
  const paginate = (page: number) => setCurrentPage(page);

  const resetPage = () => setCurrentPage(1);

  useEffect(() => {
    getData("all");
  }, []);

  // Get current emojis
  const indexOfLastEmoji = currentPage * itemsPerPage;
  const indexOfFirstEmoji = indexOfLastEmoji - itemsPerPage;

  // Checking if the search bar has a value, if yes assign the filtered emojis array so we render the right results.
  // A Copy of emojis is necessary because when filtering the array we are setting the emojis state as well.
  const currentEmojis =
    filteredEmojis.length != 0
      ? filteredEmojis.slice(indexOfFirstEmoji, indexOfLastEmoji)
      : emojis.slice(indexOfFirstEmoji, indexOfLastEmoji);

  const totalItems =
    filteredEmojis.length != 0 ? filteredEmojis.length : emojis.length;

  const categories = [
    {
      name: "all",
      displayName: "All",
    },
    {
      name: "smileys-and-people",
      displayName: "Smileys / People",
    },
    {
      name: "animals-and-nature",
      displayName: "Animals / Nature",
    },
    {
      name: "food-and-drink",
      displayName: "Food and drink",
    },
    {
      name: "travel-and-places",
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
      <Center
        flexDirection="column"
        pos="sticky"
        top="0"
        bgColor="gray.900"
        zIndex="overlay"
        paddingTop="10px"
      >
        <SearchBar
          isLoading={isLoading}
          getSearchBarValueAndFilter={getSearchBarValueAndFilter}
        />
        <SimpleGrid m={6} columns={[3, 3, 4, 9]} spacing={3}>
          {categories.map((category) => (
            <CategoryTagButton
              key={category.name}
              getData={getData}
              category={category}
              resetPage={resetPage}
            />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Emojis isLoading={isLoading} emojis={currentEmojis} />
      </Center>
      <Center>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
        />
      </Center>
    </>
  );
}

export default App;
