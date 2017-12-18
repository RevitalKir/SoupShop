// DOM ready
$(document).ready(function (){
	var login = document.getElementById("login");
	login.addEventListener("click", getLogin);
	var register = document.getElementById("register");
	register.addEventListener("click", getRegister);
	var cart =  document.getElementById("cart");
	cart.addEventListener("click", getCart);
	
	function getLogin (){
		"use strict";
		document.getElementById('id01').style.display='block';
	}
	
	function getRegister (){
		"use strict";
		document.getElementById('id02').style.display='block';
	}
	
	function getCart (){
		"use strict";
		document.getElementById('id03').style.display='block';
	}
	
	//function to activate the accordion
	$( function() {
    $( "#accordion" ).accordion({
      	collapsible: true,
		heightStyle: "content"
    });
 
    $( "#accordion-resizer" ).resizable({
      //minHeight: 100,
      minWidth: 240,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
    });
  } );
	
	//aimates title Chef's Page

	$("h1.chef").on("mouseover", function(){
			$("h1.chef").addClass("chef-pro");
		});
	   $("h1.chef").on("mouseout", function () {
		    $("h1.chef").removeClass("chef-pro");
	   });	
	
	
	var openSide = document.getElementById("cookbook");
	openSide.addEventListener("click", openNav);

	
});

	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	function openNav() {
		if (window.outerWidth ==768){
			document.getElementById("mySidenav").style.width = "220px";
			document.getElementById("main").style.marginLeft = "210px";
		}
		else if (window.outerWidth >480){
			document.getElementById("mySidenav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		}
    else{
		    document.getElementById("mySidenav").style.width = "100%";
			document.getElementById("main").style.marginLeft = "100%";
		}
    
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}
		

	 $(function() {
	   "use strict";
      // Create the dropdown base
      $("<select />").appendTo("nav");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
          "text"    : " Menu 🍽"
      }).appendTo("nav select");
      
      // Populate dropdown with menu items
      $("nav a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("nav select");
      });
      
	   // To make dropdown actually work
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
	 
	 });