import logoWhite from '../img/logo-white.png';
import './Footer.css';

function Footer() {
    return  (
        <footer className="container bg-main">
        <div className="row">
            <div className="socials">
                <a className=" fa fa-facebook"href="/">Facebook</a>
                <a className=" fa fa-twitter"href="/">Twitter</a>
                <a className=" fa fa-dribbble"href="/">Dribbble</a>
                <a className=" fa fa-tumblr"href="/">Tumblr</a>
                <a className=" fa fa-linkedin"href="/">Linkedin</a>
                <a className=" fa fa-instagram"href="/">Instagram</a>
                <a className=" fa fa-rss"href="/">Rss</a>
            </div>
            <a className="btn btn-circle fa fa-angle-up" href="/">Back to top</a>
        </div>
        <div className="row-short"> 
            <img className="footer-logo" src={logoWhite} alt="Logo"/>
            <div className="text-trio">
                <p>Copyright &copy; 2023 <a href="/">Matrox</a></p>
                <p>All rights reserved</p>
                <p>Designed by <a href="/" targer="_blank">TrendyTheme</a> </p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,  repellendus ipsam maiores <a href="#">Matrox</a> omnis ullam, laudantium quasi deleniti  laboriosam. Soluta, quibusdam magni est praesentium <a href="#">Matrox</a> iure a illum!</p>
        </div>
    </footer>
    );
}

export { Footer };