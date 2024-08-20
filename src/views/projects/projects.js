import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import encryption from "../../assets/projects/encryption.jpg";
import Terraform from "../../assets/projects/Terraform .jpg";
import DevEnv from "../../assets/projects/DevEnv Deployment Automation.png";
import inventory from "../../assets/projects/Inventory.jpeg";
import web from "../../assets/projects/Deploy Web.jpeg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={encryption}
            projectName={"Password Security System"}
            aboutProject={"Based On CISCO Packet Tracer"}
            techStack={"Cisco Packet Tracer, Routers, Switches, VLANs"}
          />
          <ProjectCard
            projectImage={inventory}
            projectName={"Inventory Managment System"}
            aboutProject={"A Realtime Chatting Application"}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
          />
          <ProjectCard
            projectImage={Terraform}
            projectName={"Automate CloudBuild Triggers using Terraform"}
            aboutProject={
              "automatically triggers the build jobs and links the terraform plan reports to these pull requests."
            }
          />
          <ProjectCard
            projectImage={web}
            projectName={"Automation of WebServer"}
            aboutProject={"Scraping content from a web page"}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
          />
          <ProjectCard
            projectImage={DevEnv}
            projectName={"DevEnv/ProductionEnv Automation"}
            aboutProject={
              "Automated System for deployment of application in Docker Container"
            
            }
            
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
