import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLitterBox from "../components/NewsLitterBox"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLitterBox/>
    </div>
  )
}

export default Home