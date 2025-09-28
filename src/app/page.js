import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Plan from "./components/plans";
import Service from "./components/services";

export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen">
        <Header />
        <Hero />
        <About />
        <Service />
        <Plan />
        <Numbers />
        <Footer />
    </div>
  );
}
