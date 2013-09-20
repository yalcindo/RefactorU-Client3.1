var name = '1';
var street = '2';
var phone = '';
var victimArr = new Array();
var volunteerArr = new Array();

$(document).ready(function(){
	
	
     $("#submit_btn").click(function(e){
     	e.preventDefault()
       	
         if($("#buttonRadio").is(':checked'))
         {
         	console.log('victim')
           victimFunction();
         }
         console.log($("#buttonRadio1").val())
          if( $("#buttonRadio1").is(':checked'))
         {
         	
           volunteerFunction();
         }
        
        
      	});   
         
    $("#enter_btn").click(victimMatch);
 
});
  
//  Declaring the function

function victimFunction () {
	name = $("#name").val();
	street = $("#street").val();
	phone = $("#phone").val();
    
     $("#name").val("");
     $("#street").val("");
     $("#phone").val("");
	var person = {
		name: name,
		street: street,
		phone:phone

	};
	victimArr.push(person);
	$('#victims-form').submit();
	return false;
}

function volunteerFunction () {
	name = $("#name").val();
	street = $("#street").val();
	phone = $("#phone").val();
	$("#name").val("");
    $("#street").val("");
    $("#phone").val("");

	var person = {
		name: name,
		street: street,
		phone:phone

	};
	volunteerArr.push(person);
	console.log(volunteerArr)
	$('#victims-form').submit();
	return false;
}


var nameOfVol = new Array();

function victimMatch(e){

  var nameOfVictim = $("#victimText").val();



for(var i=0;i<victimArr.length;i++)

{

	   if (victimArr[i].name=== nameOfVictim)
	   {
	   	
	    var nameOfStreet=victimArr[i].street;
	   }
	  
	   
	  for(var j=0;j<volunteerArr.length;j++)
	  {
		  if(nameOfStreet===volunteerArr[j].street)
		   	{
		   	var k=volunteerArr[j].name;
		       nameOfVol.push(k);
		   	}
	   }
	
}

alert(nameOfVol);

return false;
}


