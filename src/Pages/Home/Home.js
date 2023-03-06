import { useEffect } from 'react';
import './home.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/header/Header';
import Featured from '../../Components/featured/Featured';
import PropretyList from '../../Components/propretyList/PropretyList';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer' data-aos="fade-up" >
          <Featured/>       
          <h1 className='homeTitle'>Browse by property type</h1>  
          <PropretyList/>
          <h1 className='homeTitle'>Homes guests love</h1>  
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
    </div>
    </div>
  )
}
