import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
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
    </div>
  );
}
