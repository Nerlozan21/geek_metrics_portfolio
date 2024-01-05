import Services from '../Components/Services';
import HomeCarousel from './../Components/HomeCarousel';
import HomeAboutUs from './../Components/HomeAboutUs';

const HomePage = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <HomeAboutUs/>
      <Services/>
    </div>
  )
}

export default HomePage
