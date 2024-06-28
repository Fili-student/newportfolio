function Hero(){

    return(<>
    <header id="totop">
       
        <div className="grid-container-header">
        <div className="linie-links"></div>
        <div className="linie-rechts"></div>

            {/* <div className="icon-oben"> */}
             <a className="icon-oben icon1" href=""><i className="fa-brands fa-instagram"></i></a>
            <a className="icon-oben icon2" href="https://github.com/Fili-student"><i className="fa-brands fa-github"></i></a>
            <a className="icon-oben icon3" href="#kontakte"><i className="fa-solid fa-envelope"></i></a>
            {/* </div> */}
                 {/* icons */}
                 <h1 className="ueberschrift">Portfolio</h1>
                 <button className="button-header-arrow"><a href="#about">Find out more</a></button>
                 <i class="fa-solid fa-lightbulb"></i>
        </div>
    </header>
    </>);
}
export default Hero

// was soll drin sein:


// -ein button für dark und light theme :) // glühbirne : <i class="fa-solid fa-lightbulb"></i>

