import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Plan from "./components/plans";
import Service from "./components/services";
import NoticeBar from "./components/notice";

export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen">
        <NoticeBar />
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <About />
        <Service />
        <Plan />
        <Numbers />
        <Footer />
    </div>
  );
}
