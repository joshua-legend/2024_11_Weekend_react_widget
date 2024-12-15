import { Box, Container } from "@radix-ui/themes";

const RootBase = ({ children }) => {
  return (
    <Box style={{ height: "100vh", padding: "150px" }}>
      <Container size={"4"}>{children}</Container>
    </Box>
  );
};

export default RootBase;
