import './contactme.css'

export default function Contactme () {
    return (
        <div className="contactme-container width-md">
            <div className="star">
                <img src="/icons/star2.png" alt="star" />
            </div>
            <h3>Oh, así que <br /> vas en serio.</h3>
            <p>Si llegaste hasta acá deberíamos hablar, <br /> estoy aquí cuando gustes.</p>
            <div className="contact-buttons">
                <a href="#" >
                    Whatsapp
                </a>
                <a href="#" >
                    Email
                </a>
            </div>
        </div>
    )
}