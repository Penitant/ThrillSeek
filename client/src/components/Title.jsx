import "tailwindcss";
import bgimage_sec1 from '../assets/images/bgimage_sec1.jpg'
import TextPressure from "./TextPressure";

const Title = () => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgimage_sec1})` }}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0) 40%)',
        boxShadow: 'inset 0 0 200px 100px rgba(0, 0, 0, 0.9), inset 0 -100px 100px rgba(0, 0, 0, 0.7)'
      }}></div>
      <div style={{position: 'relative', height: '300px'}}>
        <TextPressure
          text="ThrillSeek"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#FF9D00"
          strokeColor="#ff0000"
          minFontSize={300}
        />
      </div>
    </section>
  )
}

export default Title