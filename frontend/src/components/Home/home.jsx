import React from "react";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import "./home.css";
import * as THREE from "three";
import { useEffect } from "react";
import moonImage from "../photos/moon.jpg";
import venusImage from "../photos/venus.jpg";
import spaceImage from "../photos/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/timeLine";
import d1 from "../photos/c++.png";
import d2 from "../photos/javascript.png";
import d3 from "../photos/python.png";
import d4 from "../photos/react.png";
import d5 from "../photos/nodejs.jpg";
import d6 from "../photos/mongodb.jpg";
import d7 from "../photos/leetcode.png";
import d8 from "../photos/codestudio.png";
import d9 from "../photos/gfg3.png";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../../youtubeCard/youtubeCard";
// import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);
    // const lightHelper = new THREE.PointLightHelper(pointLight)

    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const speed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        venus.rotation.x -= speed;
        venus.rotation.y += speed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        venus.rotation.x -= speed;
        venus.rotation.y -= speed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        venus.rotation.x -= speed;
        venus.rotation.y += speed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        venus.rotation.x -= speed;
        venus.rotation.y -= speed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.003;
      venus.rotation.y += 0.003;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.y = window.scrollY * 0.003;
      camera.rotation.z = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");
      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p> D</p>
          <p> E</p>
          <p> O</p>
          <p> R</p>
          <p> A</p>
          <p> J</p>
        </Typography>

        <div className="homeCanavasBox">
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">PROBLEM SOLVER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
          <Typography variant="h2">TEACHER</Typography>
        </div>
        {/* <Link to="/projects">VIEW MORE</Link> */}
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={d1} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={d2} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={d3} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={d4} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={d5} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={d6} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">Competitive Programing</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard image={d7} title="Click Me" />
          <YoutubeCard
            image={d8}
            title="Click Me"
            url="https://www.codingninjas.com/codestudio/profile/b5619d4c-6e8a-4cee-9996-fe832e1080a7"
          />
          <YoutubeCard
            image={d9}
            title="Click Me"
            url="https://auth.geeksforgeeks.org/user/aakash8100180276"
          />
          {/* <YoutubeCard image={d6} title="Sample Video"/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
