// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  Appear,
  Fill,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Image,
  Link
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
          <Image src="https://media.giphy.com/media/zP1Gk3m8tukEw/giphy.gif" style={{ height: "350px" }}>what gatsby</Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <List style={{ marginTop: "0" }}>
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
                style={{ height: "50px" }}
              />
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={2} textColor="secondary" style={{ marginBottom: "20px" }} >Why</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text>Modern JS Stack </Text>
              </Appear>
              <Appear>
                <Text>Easy customization</Text>
              </Appear>
              <Appear>
                <Text>Bring your own data </Text>
              </Appear>
              <Appear>
                <Text>Static Progressive Web App</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Image src="https://media.giphy.com/media/6kFI7SEWQP4Hu/giphy.gif" style={{ height: "350px" }}>how gorgeous</Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={2} textColor="secondary" style={{ marginBottom: "20px" }}>Goodies</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text>Community starters</Text>
              </Appear>
              <Appear>
                <Text>Plugins</Text>
              </Appear>
              <Appear>
                <Text>Themes</Text>
              </Appear>
              <Appear>
                <Text>Static Progressive Web App</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={"https://media.giphy.com/media/pBTIw7hzK6n6w/giphy.gif"} style={{ height: "300px" }}/>
          <Heading size={4} textColor="secondary" caps>Demo time</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Requisites</Heading>
          <Text><b>node</b> : v6 and up</Text>
          <Text><b>npm</b> : v3 and up</Text>
          <Layout>
            <Fill>
              <Appear>
                <Text textColor="pink">or use Docker</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          bgColor="tertiary" textColor="primary"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/install")}
          ranges={[
            { loc: [0, 1], title: "Start container" },
            { loc: [1, 2], title: "Install gatsby-cli" },
            { loc: [2, 3], title: "Get blog-starter" },
            { loc: [3, 6], title: "Start developing" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Starters</Heading>
          <Link>https://www.gatsbyjs.org/docs/gatsby-starters</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Plugins</Heading>
          <Link>https://www.gatsbyjs.org/packages</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Themes</Heading>
          <Link>http://kyleamathews.github.io/typography.js</Link>
        </Slide>
        <CodeSlide
          bgColor="tertiary" textColor="primary"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/theme")}
          ranges={[
            { loc: [0, 1], title: "Install theme" },
            { loc: [2, 4], title: "Modify typography.js" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Image src="https://media.giphy.com/media/rY93u9tQbybks/giphy.gif" style={{ height: "350px" }}>thanks</Image>
          <Heading size={4} textColor="secondary" caps>Thanks</Heading>
        </Slide>
      </Deck>
    );
  }
}
