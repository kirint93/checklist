myFunction =() => {
 const checkBox = document.getElementsByClassName("no");
 const textBox = document.getElementsByClassName("textArea");
 for ( i=0;i<checkBox.length; i++) {
    if (checkBox[i].checked == true){
    textBox[i].style.display = "block";
  } else {
    textBox[i].style.display = "none";
  }
}
  }

