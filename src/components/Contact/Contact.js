import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import classes from './Contact.module.css'
import bit from './../../img/Adobe_20210825_001441.png'
const handleURL = (url) =>{
    return event => window.open(url,"_blank:")
}
const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contactme">
            <div className={classes.ContactIcons}>
            <img className={classes.Pic} src={bit} alt='bitmoji'onClick={handleURL('mailto:brandongamblethompson@gmail.com')}></img>
            <FaGithub color='black' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/Zashjin')} />
            <FaLinkedinIn color='black' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.linkedin.com/in/brandon-gamble-thompson/')} />
            <FaInstagram color='black' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.instagram.com/brandon__gamble')} />
            </div>
        </div>
     );
}
 
export default Contact;