
import './mailList.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const MailList = () => {

    AOS.init();
    AOS.refresh();

  return (
    <>
   
    <div className='mail' >
    <span className='mailDesc'>Drop us your message and I'll get back to you as soon as possible.</span>
    <form>
        <div className='mailInputContainer' data-aos="fade-up" >
           <input type="text" placeholder="Your Fullname"/>
            <input type="text" placeholder="Your number"/>
            <input type="email"  placeholder="Your email"/>
            <input type="password" width='100%'  placeholder="Your password"/>
            <button type='submit' className='button'>Let's talk 😄</button>
        </div>
        </form>
    </div>
    
    </>
  )
}

export default MailList