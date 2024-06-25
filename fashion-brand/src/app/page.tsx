import Image from "next/image";
import Banner from "./components/banner/Banner";
import InfoServices from "./components/infoServices/InfoServices";
import NavbarNav from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <NavbarNav />
      <div className="min-h-screen">
        <Banner />
        <InfoServices />
      </div>
    </>
  );
}
