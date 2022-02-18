
let screen=document.getElementById('screen'); 

 let buttons=document.querySelectorAll('button');
 let buttonText='';
 let valueReserved='';
 
 let screenvalue='';
for(item of buttons)
{
	item.addEventListener('click',(e)=>{
		buttonText=e.target.innerText;
		if(valueReserved!=='')
		{
			
			if(buttonText=='X'||buttonText=='%'||buttonText=='-'||buttonText=='+')
			{
				screenvalue=valueReserved+buttonText;
				screen.value=screenvalue;
				
				
			}
			else if(buttonText=='('||buttonText==')'||buttonText=='.'||buttonText=='0'||buttonText=='1'||buttonText=='2'||buttonText=='3'||
			buttonText=='4'||buttonText=='5'||buttonText=='6'||buttonText=='7'||buttonText=='8'||buttonText=='9')
			{
				alert("wrong input expression");
			}
			valueReserved='';			/*
			else if(buttonText=='c')
			{
			screenvalue="";
			screen.value=screenvalue;	
			}
			
			else
			{
			screenvalue+=buttonText;
			screen.value=screenvalue;	
			}*/
		}
		else
		{
		 if(buttonText=='c')
			{
			screenvalue="";
			screen.value=screenvalue;
			}
		else if(buttonText=='=')
			{
			screen.value=eval(screenvalue);
			valueReserved=screen.value;
		
			}
		else
			{
			screenvalue+=buttonText;
			screen.value=screenvalue;
			}
		}
	})
	
}

