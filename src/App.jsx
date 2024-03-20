import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import * as Sentry from "@sentry/react"
import Features from "./components/Features";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";



 function App() {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero /> 
      <Highlights />
      <Model />
      <Features />
      <Howitworks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);