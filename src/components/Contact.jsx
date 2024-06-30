function Contact(){
    return(<>
    <section className="contact-section" id="kontakte">
        <div className="contact-container">
        <div className="linke-linie-contact"></div>
        <div className="linie-1"></div>
        <div className="linie-2"></div>
        <div className="linie-3"></div>

        <div className="contact-formular">
            <div className="myform">
                <h3 className="h3contact">Contact</h3>
            <form action="https://formspree.io/f/mkgwwapo" method="POST" className="forms">
                
                <div className="yourname">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Name" required />
                </div>

               <div className="youremail">
               <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Email"  required/>                
              </div>
               
                <textarea name="yourtext" id="" cols="30" rows="10" placeholder="Write your text here" required></textarea>
                <button  type="submit" className="button-contact">Send</button>
            </form>
            </div>
        </div>

        </div>
    </section>
    </>)
}

export default Contact