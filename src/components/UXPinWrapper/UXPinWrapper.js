// eslint-disable-next-line no-unused-vars
import React from "react";
export default function UXPinWrapper({ children }) {
  //Appending font
  //This solution will likely be discontinued in the future. Merge prefers direct imports of all the files handled with Webpack.
  let notoSans = document.createElement("link");
  notoSans.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
  );
  notoSans.setAttribute("rel", "stylesheet");
  document.head.appendChild(notoSans);

  return children;
}
