// the application do not use the objects and can do 
// whatever


//----------------VictimInfo-----------------

var nameArr= new Array();
var phoneArr= new Array();
var streetArr= new Array();


var victimInfo = function()
    {
 	  var name= prompt("Please Enter the name of Victim:");
	  nameArr.push(name);
	  var phoneNum = prompt("Please enter Phone Numberof victims:");
	  phoneArr.push(phoneNum);
	  var street = prompt("Please Enter the street of victims:");
	   streetArr.push(street);

    };

var i=0;
var numberVi=1;
while(i<numberVi)
	{
	  victimInfo();
	   var inputVal=confirm("Would you like to add more victims");

	   if(inputVal===true)
	   {
	   	numberVi++;
	   }else{
	   	break;
	   }

	}


//-------------------------------------VolueenterInfo----------------------


	var nameArrVo= new Array();
	var phoneArrVo= new Array();
	var streetArrVo= new Array();

	var volunteerinfo= function()
	{
	 var name= prompt("Please Enter the name of Volunteer:");
	  nameArrVo.push(name);
	  var phoneNum = prompt("Please enter Phone Numberof volunteer:");
	  phoneArrVo.push(phoneNum);
	  var street = prompt("Please Enter the street of volunteer:");
	   streetArrVo.push(street);

	}

	var j=0;
	var numberVo=1;
	while(j<numberVo)
	{
	 volunteerinfo();

       var inputVal=confirm("Would you like to add more victims");

	   if(inputVal===true)
	   {
	   	numberVo++;
	   }else{
	   	break;
	   }


		}
alert("Number of Victims:"+ numberVi+ "\n"+
       "Number of Volunteers:"+ numberVo+ "\n"+
       "Names of Victims:"+ nameArr + "\n"+
       "Name of Volunteers:"+ nameArrVo + "\n"
	);
// -------------------------- MAtching people who live on same street-----------------------
   
     
var nameOfVictim = prompt("Enter name Of victim to match with Volunteer's street");

var nameOfVol=new Array();
	
		var nameOfStreet="pearl";

for(var i=0;i<nameArr.length;i++)

{

   if (nameOfVictim===nameArr[i])
   {
   	
    nameOfStreet=streetArr[i];
 
   }

  if(nameOfStreet===streetArrVo[i])
   	{
   		var k=nameArrVo[i]
       nameOfVol.push(k);
   	}

}
alert(nameOfVol);





















