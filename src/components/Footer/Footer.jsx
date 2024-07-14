import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style ={{backgroundImage: "url(./img/Footer.png)"}}>
        <div className="redes">
            <a href="#">
                <img src="./img/facebook.png" alt="facebook" />
            </a>
            <a href="#">
                <img src="./img/twitter.png" alt="twitter" />
            </a>
        </div>
        <img src="./img/org.svg" alt="org" />
        <strong>Desarrollado por A.M.S</strong>
    </footer>
}

export default Footer