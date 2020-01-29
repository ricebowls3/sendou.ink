import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Image, Heading, Flex } from "@chakra-ui/core"
import { posterGirl } from "../../assets/imageImports"
import { useContext } from "react"
import MyThemeContext from "../../themeContext"
import "./HomePage.css"
import { Helmet } from "react-helmet-async"

const HomePage: React.FC<RouteComponentProps> = ({}) => {
  const { colorMode, grayWithShade } = useContext(MyThemeContext)
  return (
    <>
      <Helmet>
        <title>sendou.ink | Competitive Splatoon Hub</title>
      </Helmet>
      <Flex
        flexDirection="column"
        alignItems="center"
        title="Picture by borzoic (@borzoic_ on Twitter)"
      >
        <Image className="rgb" src={posterGirl[colorMode]} w="400px" h="auto" />
        <Heading
          size="2xl"
          letterSpacing="1px"
          fontFamily="'Pacifico', cursive"
          fontWeight="light"
        >
          Sendou.ink
        </Heading>
        <Heading
          size="md"
          letterSpacing="1px"
          fontWeight="light"
          color={grayWithShade}
        >
          Competitive Splatoon Hub
        </Heading>
      </Flex>
    </>
  )
}

export default HomePage
