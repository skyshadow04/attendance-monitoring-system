import Image from "next/image";
import Navbar from "./components/navigation-bar";
import HomepageContent from "./homepage-content/page";
import Footer from "./homepage-content/footer";
import MainHomeContent from "./homepage-content/main-home-content"

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomepageContent/>
      <MainHomeContent/>
      <Footer />
    </>
  );
}
