function Footer() {
const date = new Date();
const year = date.getFullYear();
  return (
    <footer>
      <p className="footer-text">Copyright © {year}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;