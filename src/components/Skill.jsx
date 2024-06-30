import { animate, motion } from "framer-motion";
import useSectionInView from "./view.jsx";


function Skill(){

    
  const [htmlRef, htmlInView] = useSectionInView({ threshold: 0.5 , rootMargin: '0px'});
  const [cssRef, cssInView] = useSectionInView({ threshold: 0.5, rootMargin: '0px' });
  const [jsRef, jsInView] = useSectionInView({ threshold: 0.5, rootMargin: '0px'});
  const [reactRef, reactInView] = useSectionInView({ threshold: 0.5 ,rootMargin: '0px' });


    return(<>
    <section className="sec-skill">
        <div className="skill-container">

        <div className="skill-h3"><h3>Skills</h3></div>

            <div className="linie-skill"></div>
            <div className="linie-oben-skill"></div>
            <div className="linie-oben-skill-rechts"></div>

            <i class="fa-brands fa-html5 skill-brand brand1"></i>
        
            <div className="html-con">
          <motion.div
            className={`html-bar ${htmlInView ? 'animate-html' : ''}`}
            ref={htmlRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: htmlInView ? 1 : 0 }}
            transition={{ duration: 2 }}
          />
        </div>

            <i class="fa-brands fa-css3-alt skill-brand brand2"></i>
        <div className="css-con">
            {/* <div className="css-bar"></div> */}
            <motion.div className={`css-bar ${cssInView ? 'animate-css' : ''}`}
             ref={cssRef} 
             initial={{opacity:0}}             
            animate={{ opacity: cssInView ? 1 : 0 }}
            transition={{duration:2}}
             />
        </div>

        
        <i class="fa-brands fa-js skill-brand brand3"></i>
        <div className="js-con">
                        {/* <div className="js-bar"></div> */}
                        <motion.div className={`js-bar ${jsInView ? 'animate-js' : ''}`}
             ref={jsRef} 
             initial={{opacity:0}}             
            animate={{ opacity: jsInView ? 1 : 0 }}
            transition={{duration:2}}
             />

        </div>


        <i class="fa-brands skill-brand fa-react brand4"></i>
        <div className="react-con">
        {/* <div className="react-bar" ></div> */}
        <motion.div className={`react-bar ${reactInView ? 'animate-react' : ''}`}
             ref={reactRef} 
             initial={{opacity:0}}             
            animate={{ opacity: reactInView ? 1 : 0 }}
            transition={{duration:2}}
             />

            </div>
        </div>

    </section>

    </>);

}
export default Skill