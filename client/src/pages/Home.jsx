import "tailwindcss";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
        {/* Header */}
        <Navbar />
        <Title />
        {/* Content */}
        <Info />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default Home