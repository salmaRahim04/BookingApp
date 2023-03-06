import './header.scss';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed,faPlane,faCar,faTaxi,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [openDate,setOpenDate] = useState(false);
  const [openoptions,setOpenoptions] = useState(false);
  const [destination,setDestination] = useState("");

  const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1
  });
  const navigate = useNavigate()
  const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key:'selection'
    }
  ]);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleClick =  () =>{
    navigate('/hotels',{state: {destination,date,options}})
  }

  return (
   <>
    <div className="header">
        <div className='headerContainer'>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span> Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span> Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span> Car rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span> Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport taxis</span>
            </div>
        </div>
       <h1 className="headerTitle typewriter">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Appbooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}  `}</span> 
               {openDate && <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                />}
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={()=>setOpenoptions(!openoptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} . children  ${options.room} room`}</span>
              { openoptions && <div className='options'>
                  <div className='optionItem'>
                    <div className='optionCounter'>
                    <span className='optionText'>Adult</span>
                    <button className='optionCounterButton' disabled={options.adult <= 1}  onClick={()=>handleOption("adult","d")}>-</button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
                    </div>
                  </div>
                  <div className='optionItem'>
                  <div className='optionCounter'>
                   <span className='optionText'>Children</span>
                    <button className='optionCounterButton' disabled={options.children <= 0} onClick={()=>handleOption("children","d")}>-</button>
                    <span className='optionCounterNumber'>{options.children}</span>
                    <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
                  </div>
                  </div>
                  <div className='optionItem'>
                  <div className='optionCounter'>
                    <span className='optionText'>Room</span>
                    <button className='optionCounterButton' disabled={options.room <= 1}   onClick={()=>handleOption("room","d")}>-</button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button className='optionCounterButton'  onClick={()=>handleOption("room","i")}>+</button>
                  </div>
                </div>
                </div>}
                </div>
                <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleClick}>Search</button>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#c9adc6" fill-opacity="1" d="M0,96L24,128C48,160,96,224,144,245.3C192,267,240,245,288,208C336,171,384,117,432,122.7C480,128,528,192,576,229.3C624,267,672,277,720,245.3C768,213,816,139,864,112C912,85,960,107,1008,144C1056,181,1104,235,1152,240C1200,245,1248,203,1296,160C1344,117,1392,75,1416,53.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
            </svg>
   </>
  )
}

export default Header