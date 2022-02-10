  var sl1 = document.getElementById("sl1");
  var sl2 = document.getElementById("sl2");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var txt1 = document.getElementById("tx1");
  var txt2 = document.getElementById("tx2");
  var a = 0;
  window.onload = function() {
      sl1.value = "m";
      sl2.value = "m";
  }
  btn1.onclick = function() {
      switch (sl1.value) {
          case "km":
              a = txt1.value * Math.pow(10, 3)
              break;
          case "hm":
              a = txt1.value * Math.pow(10, 2)
              break;
          case "dam":
              a = txt1.value * Math.pow(10, 1)
              break;
          case "m":
              a = txt1.value
              break;
          case "dm":
              a = txt1.value * Math.pow(10, -1)
              break;
          case "cm":
              a = txt1.value * Math.pow(10, -2)
              break;
          case "mm":
              a = txt1.value * Math.pow(10, -3)
              break;
      }
      /* PARTIE 2  */
      switch (sl2.value) {
          case "km":
              txt2.value = a * Math.pow(10, -3)
              break;
          case "hm":
              txt2.value = a * Math.pow(10, -2)
              break;
          case "dam":
              txt2.value = a * Math.pow(10, -1)
              break;
          case "m":
              txt2.value = txt1.value
              break;
          case "dm":
              txt2.value = a * Math.pow(10, 1)
              break;
          case "cm":
              txt2.value = a * Math.pow(10, 2)
              break;
          case "mm":
              txt2.value = a * Math.pow(10, 3)
              break;
      }
  }
  btn2.onclick = function() {
      txt1.value = "";
      txt2.value = "";
      sl1.value = "m";
      sl2.value = "m";
  }