// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#000",
  secondary: "white",
  tertiary: "#fce715",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={400} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" bgDarken="0.7" bgImage="http://pop-verse.com/wp-content/uploads/2013/05/The-Great-Gatsby-promo.jpg">
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            The great Gatsby.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            changing the static site generation game
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Image src="https://media.giphy.com/media/aJ51BFDTtnFAI/giphy.gif" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <List>
            <ListItem>
              <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image src="https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png"
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image src="https://d33wubrfki0l68.cloudfront.net/0e10c97634da0242be91bec4f6a198a78dd68f99/b5de5/img/jamstack-full-logo.svg"
                style={{ height: "40px" }}
              />
            </ListItem>
            <ListItem>
              <Image src="https://cdn-images-1.medium.com/max/1000/1*Fz_DTbJptm_S7GccttSFVw.png"
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image src="https://cdn-images-1.medium.com/max/1600/1*P-gXz7UCnyazZQHhy43ApQ.png"
                style={{ height: "60px" }}
              />
            </ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Text>why</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="secondary" caps>Content</Heading>
          <List>
            <ListItem>What is this?</ListItem>
            <ListItem>Why year another ssg</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Headings</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
