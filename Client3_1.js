var victimArr= new Array();
var volunteerArr= new Array();


var victim={};
var volunteer ={};

var victimInfo = function()
    {
 	  var name= prompt("Please Enter the name of Victim:");
	    victim.name=name;
	  var phoneNum = prompt("Please enter Phone Numberof victims:");
	    victim.phone=phoneNum;
	  var street = prompt("Please Enter the street of victims:");
	    victim.street=street;
           victimArr.push(victim);
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

//----------------------Volunteeer Info------------------------------
	var volunteerinfo= function()
	{
	 var name= prompt("Please Enter the name of Volunteer:");
	  volunteer.name=name;
	  var phoneNum = prompt("Please enter Phone Number of volunteer:");
	 volunteer.phoneNum=phoneNum;
	  var street = prompt("Please Enter the street of volunteer:");
	   volunteer.street=street;
	   volunteerArr.push(volunteer);

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

    var namesVictims= new Array();
     var i=0;
   while(i<victimArr.length)
   {  
   	var l=victimArr[i].name;
      namesVictims.push(l);
   	i++;
   }
    var namesVolunteers= new Array();
  var j=0;
   while(j<volunteerArr.length)
   {
   	var m=volunteerArr[j].name;
      namesVolunteers.push(m);
   	j++;
   }

      
   alert("Number of Victims: " + numberVi + "\n"+
       "Number of Volunteers: " + numberVo +  "\n"+
       "Names of Victims: "  + namesVictims  + "\n"+
       "Name of Volunteers: " + namesVolunteers + "\n"
	);
   

// -------------------------- MAtching people who live on the same street-----------------------

var nameOfVictim = prompt("Enter name Of the victim to find a  Volunteer lives on same street");
var nameOfVol = new Array();

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
alert( "Name of Volunteers live on the same street:" + nameOfVol );










