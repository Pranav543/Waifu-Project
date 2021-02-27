import React from "react";
import style from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={style.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Developed by <a href="">Pranav Naik</a> and{" "}
            <a href="">Salil Naik</a>.
          </div>
          <div className="col-md-6">
            <a href="">
              <div className={style.github}></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
