import HeaderLine from "@/components/HeaderLine";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Layout>
        <HeaderLine />
        <main className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 px-10 pb-10 relative">
          <Hero />
          <Projects />
          <Work />
          <Contact />
        </main>
      </Layout>
    </>
  );
}
