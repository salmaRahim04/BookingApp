import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./featuredProperties.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'
import useFetch from '../../hooks/userFetch';

const FeaturedProperties = () => {
 // const {data,loading,error} = useFetch("/hotels?featured=true&limit=4")

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [slideNumber, setSlideNumber] = useState(0);
 const fp =[
  {
    img:"https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg",
    fpname:"Aparthotel Stare Miasto",
    fpPrice:"120$",
    city:'Madrid',
    fpRating:"8.9"
  },
  {
    img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
    fpname:"Comfort Suites Airport",
    city:'Austin',
    fpPrice:"140$",
    fpRating:"9.3"
  },
  {
    img:"https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
    fpname:"Hilton Garden Inn",
    city:'Berlin',
    fpPrice:"105$",
    fpRating:"8.9"
  }
]
const handleMove = (direction) => {
  let newSlideNumber;

  if (direction === "l") {
    newSlideNumber = slideNumber === 0 ? 2 : slideNumber - 1;
  } else {
    newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
  }

  setSlideNumber(newSlideNumber)
};
  return (
    <div className="slide-container" >
            <div className="sliderWrapper">
              <img src={fp[slideNumber].img} alt="" data-aos="fade-right"  className="fpImg" />
              <div className='fpItem' data-aos="fade-left" >
                <h2>{fp[slideNumber].fpname}</h2>
                <span className='fpCity'>City: {fp[slideNumber].city}</span>
                <span className='fpPrice'>Price: {fp[slideNumber].fpPrice}</span>
                <span className='fpRating'>Rating: {fp[slideNumber].fpRating}</span>
              </div>
            </div>
           <div className='icons'>
           <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
           </div>
  </div>
     
   
  );
};

export default FeaturedProperties;