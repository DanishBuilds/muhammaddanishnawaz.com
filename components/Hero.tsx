import Image from "next/image";
import mypic from "../public/gokurun.gif";

const Hero = () => (
  <>
    <h1 className="text-4xl font-bold flex">
      {" "}
      <Image
        src={mypic}
        alt="Picture of the author"
        width="45"
        height="45"
      />{" "}
        &nbsp;Muhammad Danish Nawaz
    </h1>
    <p>
      I Work as Team Lead at{" "}
      <a href="//www.paysky.io/" target={"_blank"}>Paysky.io</a>.
    </p>
    <p>
      I previously created <a href="https://momomarket.africa/" target={"_blank"}>Momo Marketplace</a>, a platform
      which is used for selling various products in Africa&apos;s market. I was also created a payment method plugin for Paysky. I graduated from International Islamic University,Islamabad with
      degree in Computer Science. I&#x27;m currently based in
      Islamabad,Pakistan.
    </p>
    <p>
      I&#x27;m interested in Angular, Nodejs, React, Kubernetes, Dockers more CI/CD
      technologies as well.
    </p>
  </>
);

export default Hero;
