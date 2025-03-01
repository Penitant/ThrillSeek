import "tailwindcss";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const Home = () => {
  return (
    <section>
        {/* Header */}
        <Navbar />
        <Title />
        {/* Content */}
    </section>
  )
}

export default Home