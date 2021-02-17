import "./Footer.css";

//FIXME: footer not responsive

const Footer = () => {
  return(
    <div className="fixed-bottom">
      <hr />
      <p className='footer'> Voor bezichtiging van kunstwerken bel: 06-5492 2247 of mail: els.enschede@xs4all.nl </p>
      <p>
        <span className="copyright1"> © 2021 Els Enschede</span>
        <span className="copyright2">Webdesign & Development door Liliane Top</span>
      </p>
    </div>
);


}

export default Footer;
