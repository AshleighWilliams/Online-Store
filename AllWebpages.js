//The below allows for the functionality through jQuery and Javascript of certain elements seen on each webpage.

$(document).ready(function() {
    $("#hide").click(function() {
        $(".container").hide();
    });
    $("#show").click(function() {
        $(".container").show();
    });
});
//The above "hide()" and "show()" function allows the user to click on the respective buttons to hide/show the testimonials(container) on the homepage.

$(document).ready(function() {
    $("h1").css("display", "none");
    $("h1").css("color", "burlywood").slideUp(2000).slideDown(2000);
});
// The above creates a chained effect by changing the color using "css()" and using the "slideUp()" and "slideDown()" function that lets the h1 element on each page to load on page load.

$(document).ready(function() {
    let div = $(".parent");
    div.slideUp(3000).slideDown(3000);
});
//The above creates an effect using the "slideUp()" and "slideDown()" function on page load.

let myOptions = {
    val1 : "XS",
    val2 : "S",
    val3 : "M",
    val4 : "L",
    val5 : "XL"
};
let mySelect = $("#sizes");
$.each(myOptions, function() {
    mySelect.append(
        $("<option></option>").val(val).html(text)
    );
});
//The above code creates a dropdown of sizes for each catalogue item.

//The below creates the functionality for the search button.
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } 
    else {
      a[i].style.display = "none";
    }
  };
}
//When the user clicks on the button, a toggle is created between hiding and showing the dropdown content of the search button.

function myfunctions() {
alert("You have successfully subscribed to our newsletter!");
}
//The above creates an alert once the signup button is clicked on on the homepage newsletter form.