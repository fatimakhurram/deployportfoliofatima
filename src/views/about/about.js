import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CgCommunity  } from "react-icons/cg";
import { FcReadingEbook } from "react-icons/fc";
import { MdSportsMartialArts  } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import azure from "../../assets/icons/icons8-azure.svg";
import aws from "../../assets/icons/icons8-aws.svg";
import linux from "../../assets/icons/icons8-linux-48.png";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import docker from "../../assets/icons/icons8-docker.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import devops from "../../assets/icons/icons8-devops-60.png";
import terraform from "../../assets/icons/icons8-terraform.svg";
import kubernetes from "../../assets/icons/icons8-kubernetes.svg";
import myphoto from "../../assets/aboutMePhotos.jpg";

export default function About() {
    const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
            <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
                <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organization"
                    value="National College of Business Administration and Economics"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Devops Engineer"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Lahore, Pakistan"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="National College of Business Administration and Economics"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bachelor"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Urdu"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={azure} />
          <TechStackCard imagepath={aws} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={devops} />
          <TechStackCard imagepath={docker} />
          <TechStackCard imagepath={terraform} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={linux} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={kubernetes} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
        </SimpleGrid>
        
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/fatimakhurram" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={CgCommunity}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Volunteering </Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Volunteering is a deeply rewarding way to give back to the community while developing new skills and connections. It involves offering your time and talents to help others, whether through local charities, community events, or global causes. Volunteering fosters a sense of purpose, empathy, and social responsibility, allowing you to make a positive impact on the lives of others. It also provides opportunities for personal growth, networking, and gaining new experiences, making it a fulfilling and meaningful pursuit that enriches both the volunteer and the community.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FcReadingEbook}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Reading</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Reading is a gateway to endless knowledge, imagination, and relaxation. It enhances vocabulary, comprehension, and critical thinking skills while allowing you to explore different worlds, cultures, and ideas. Whether through fiction, non-fiction, or poetry, reading stimulates the mind, offers new perspectives, and provides a mental escape from daily life. It's a versatile activity that can be enjoyed anywhere, at any time, and it nurtures a lifelong love of learning and discovery.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdSportsMartialArts }
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Martial Arts</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Martial arts as a hobby offers a powerful combination of physical fitness, mental discipline, and self-defense skills. Engaging in practices like Karate, Taekwondo, or Judo enhances strength, flexibility, and coordination while teaching focus, perseverance, and confidence. It provides valuable self-defense techniques and fosters a sense of community and respect through shared practice. Additionally, martial arts often involve cultural and philosophical learning, making it a holistic activity that benefits both the body and mind. Whether for stress relief, personal growth, or physical conditioning, martial arts is a rewarding and enriching pursuit.!
            </Text>
          </Box>
        </SimpleGrid>
        </Box>
    </Box>
    
  );
}