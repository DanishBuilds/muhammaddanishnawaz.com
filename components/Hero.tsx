import Image from "next/image";
import mypic from "../public/gokurun.gif";

const Hero = () => (
  <>
    <h1 className="text-4xl font-bold flex">
      {" "}
      <Image
        src={mypic}
        alt="Picture of the author"
        width="20"
        height="20"
      />{" "}
        &nbsp;Muhammad Danish Nawaz
    </h1>
    <p>
        I currently hold the position of Team Lead at {" "}
      <a href="//www.paysky.io/" target={"_blank"}>Paysky.io</a>, where I lead and coordinate teams for project success.
    </p>
    <p>
        Previously, I had the privilege of spearheading the development of <a href="https://momomarket.africa/" target={"_blank"}>Momo Marketplace</a>, a dynamic platform catering to diverse product offerings within the African market. My accomplishments include the creation of a custom payment method plugin for Paysky.io.
    </p>
    <p>
        My educational background is anchored in Computer Science, with a degree from the esteemed International Islamic University, Islamabad.
    </p>
      <p>I am currently situated in Islamabad, Pakistan, and my professional interests revolve around cutting-edge technologies such as Angular, Node.js, React, Kubernetes, Docker, and various CI/CD tools, as I continually seek to enhance my skills and drive innovation in the field.</p>

  </>
);

export default Hero;
