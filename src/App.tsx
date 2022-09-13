import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Features from "./pages/Features"
import Comments from "./pages/Comments"
import ArticleList from "./pages/ArticleList"
import Contact from "./pages/Contact"
import Team from "./pages/Team"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Box paddingTop={10}>
      <Features />
      <Comments />
      <ArticleList />
      <Contact />
      <Team/>
    </Box>
    <Footer />
  </ChakraProvider>
)
