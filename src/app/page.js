"use client";

import { useState } from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Plan from "./components/plans";
import Service from "./components/services";
import NoticeBar from "./components/notice";
import FormModal from "./components/formModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans items-center min-h-screen">
      <NoticeBar />
      <div className="relative">
        <Header />
        <Hero openModal={openModal} />
      </div>
      <About />
      <Plan />
      <Service />
      <Numbers />
      <Footer />
      <FormModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
