import React from "react";
const curryear = new Date().getFullYear;
function Footer() {
  return (
    <footer>
      <p>Copyright @ Anutosh Gautam {curryear}(2022) </p>
    </footer>
  );
}

export default Footer;
