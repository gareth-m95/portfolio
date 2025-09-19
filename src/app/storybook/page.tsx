import { Flex, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex
      direction={"column"}
      p={4}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>
        A Storybook build is triggered by github actions, then deployed to
        github pages, which in turn is embedded in this page using an iframe
      </Text>
      <iframe
        allow="fullscreen; clipboard-write; clipboard-read"
        src="https://gareth-m95.github.io/portfolio"
        style={{ width: "90%", height: "90vh", border: "none" }}
      />
    </Flex>
  );
};

export default Page;
