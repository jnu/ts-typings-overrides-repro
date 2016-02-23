/// <reference path="./typings/tsd.d.ts" />

let element = jQuery("body");
element.on("click", (e: MouseEvent): void => {
  console.log("type sadness");
});
