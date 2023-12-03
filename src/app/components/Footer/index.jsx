import Section1 from "./-componenet/Section1";
import Section2 from "./-componenet/Section2";
import Section3 from "./-componenet/Section3";
import Section4 from "./-componenet/Section4";
import Section5 from "./-componenet/Section5";

import styles from "./index.module.css"

function Footer() {
    return(
         <div className={` ${styles.footer} `}>
            <div className={`d-flex container justify-content-around ${styles.footerDiv}`}>
             <Section1/>
             <Section2/>
             <Section3/>
             <Section4/>
             <Section5/>
        </div>
        </div>
        
       
    )
}

export default Footer;
