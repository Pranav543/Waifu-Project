import React from "react";
import style from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={style.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Developed by <a href="" target="_blank">Pranav Naik</a> and{" "}
            <a href="https://twitter.com/__salil_naik__" target="_blank">Salil Naik</a>.
          </div>
          <div className="col-md-6">
            <a href="https://github.com/Pranav543/Waifu-Project" target="_blank">
              <div className={style.github}></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
