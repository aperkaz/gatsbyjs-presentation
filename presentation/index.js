import React from "react";
import CodeSlide from "spectacle-code-slide";
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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const images = {
  dancingLeo: require("../assets/dancingLeo.gif"),
  gatsbyMovie: require("../assets/gatsbyMovie.jpg"),
  graphql: require("../assets/graphql.png"),
  howGorgeous: require("../assets/howGorgeous.gif"),
  pwa: require("../assets/pwa.png"),
  react: require("../assets/react.png"),
  thanks: require("../assets/thanks.gif"),
  webpack: require("../assets/webpack.png"),
  whoIsGatsby: require("../assets/whoIsGatsby.gif")
};

preloader(images);

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
        <Slide transition={["zoom"]} bgColor="primary" bgDarken="0.7" bgImage={images.gatsbyMovie.replace("/", "")}>
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            The great Gatsby.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            changing the static-site generation game
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Image src={images.whoIsGatsby.replace("/", "")} style={{ height: "350px" }}>what gatsby</Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <List style={{ marginTop: "0" }}>
            <ListItem>
              <Image src={images.react.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image src={images.webpack.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem style={{ textAlign: "center" }}>
              <Text>JAM Stack</Text>
            </ListItem>
            <ListItem>
              <Image src={images.graphql.replace("/", "")}
                style={{ height: "70px" }}
              />
            </ListItem>
            <ListItem>
              <Image src={images.pwa.replace("/", "")}
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
          <Image src={images.howGorgeous.replace("/", "")} style={{ height: "350px" }}>how gorgeous</Image>
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
          <Image src={images.dancingLeo.replace("/", "")} style={{ height: "300px" }}/>
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
          <Image src={"https://media.giphy.com/media/eNCZy1yl5ViZa/giphy.gif"} style={{ height: "300px" }}>GoGo</Image>
          <Heading size={4} textColor="secondary" caps>Go-Go GraphQL</Heading>
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
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Ref CMS integration</Heading>
          <Link>https://using-contentful.netlify.com/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Image src={images.thanks.replace("/", "")} style={{ height: "350px" }}>thanks</Image>
          <Heading size={4} textColor="secondary" caps>Thanks</Heading>
        </Slide>
      </Deck>
    );
  }
}
