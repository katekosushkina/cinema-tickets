import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <nav className="navbar navbar-expand-lg navbar-light align-items-start">
          <div>
            <address className="align-items-stretch mb-0">ул.Какая-то 80-30,<br/> Минск 220028</address>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="mailto:kate.kosushkuna@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab far fa-envelope"></i></a>
            <small className="d-block">&copy;2018</small>
          </div>
          <div className="ml-auto d-flex  align-items-start">
            <div className="partners"><img src="./static/img/partners/mcdonalds.png" alt="mcdonalds"/></div>
            <div className="partners"><img src="./static/img/partners/kfc.png" alt="kfc"/></div>
            <div className="partners"><img src="./static/img/partners/burgerKing.png" alt="burgerKing"/></div>
            <div className="partners"><img src="./static/img/partners/dominos.png" alt="dominos"/></div>
            <div className="partners"><img src="./static/img/partners/mcdonalds.png" alt="mcdonalds"/></div>
            <div className="partners"><img src="./static/img/partners/kfc.png" alt="kfc"/></div>
            <div className="partners"><img src="./static/img/partners/burgerKing.png" alt="burgerKing"/></div>
            <div className="partners"><img src="./static/img/partners/dominos.png" alt="dominos"/></div>
          </div>
        </nav>
      </footer>
    )
  }
}
export default Footer;
