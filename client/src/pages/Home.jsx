import "tailwindcss";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Info from "../components/Info";

const Home = () => {
  return (
    <section>
        {/* Header */}
        <Navbar />
        <Title />
        {/* Content */}
        <Info />
    </section>
  )
}

export default Home