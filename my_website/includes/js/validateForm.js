 function validateForm(){
 	var x=document.forms["myform"]["Name"].value;
 	var y=document.forms["myform"]["pwd"].value;
 	var z=document.forms["myform"]["email"].value; 
 	var atposition=z.indexOf("@");  
 	var dotposition=z.lastIndexOf("."); 

 	if (x==null || x==""){  
 		alert("Name can't be blank");  
 		
 	}
 	
 	
 	else if(y.length<6){  
 		alert("Password must be at least 6 characters long.");  
 		
 	} 
 	else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=z.length) {
 		alert("Please enter a valid e-mail address ");  
 		
 	} 
 	else{
 		alert("login successful");
 	}
 }