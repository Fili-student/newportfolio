function Hero(){
    return(<>
    <header>
       
        <div className="grid-container-header">
        <div className="linie-links"></div>
        <div className="linie-rechts"></div>

            {/* <div className="icon-oben"> */}
             <a className="icon-oben icon1" href=""><i className="fa-brands fa-instagram"></i></a>
            <a className="icon-oben icon2" href="https://github.com/Fili-student"><i className="fa-brands fa-github"></i></a>
            <a className="icon-oben icon3" href=""><i className="fa-solid fa-envelope"></i></a>
            {/* </div> */}
                 {/* icons */}
                 <h1>Portfolio</h1>
                 <button className="button-header-arrow"><a href="">Find out more</a></button>
                 <i class="fa-solid fa-lightbulb"></i>
        </div>
    </header>
    </>);
}
export default Hero

// was soll drin sein:

// -h1 = portfolio 
// -ein div dadrunter mit pfeil link button 
// -3 icons für socials :email ,insta , github
// -ein button für dark und light theme :) // glühbirne : <i class="fa-solid fa-lightbulb"></i>
// die zwei striche links und oben

