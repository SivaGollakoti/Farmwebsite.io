document.querySelector("#go").addEventListener("click", function ()
{
    var PH=document.getElementById("ph").value;
    var TEMP=document.getElementById("temp").value;
    var RAIN=document.getElementById("rainfall").value;
    
    
    if((PH>=5.5 && PH<=6.5) && (TEMP>=21 && TEMP<=37) && (RAIN>=175 && RAIN<=300))
    {
    document.write("Rice is suitable crop under these conditions") 
    
    } 
    else if((PH>=6.0 && PH<=6.8) && (TEMP>=20 && TEMP<=25) && (RAIN>=50 && RAIN<=100))
    {
    document.write(" Wheat is suitable crop under these conditions")
    }
    else if((PH>=5.8 && PH<=6.0) && (TEMP>=25 && TEMP<=28) && (RAIN>=50 && RAIN<=110))
    {
    document.write("Maize is suitable crop under these conditions")
    }
    else if((PH>=6.2 && PH<=6.8) && (TEMP>=21 && TEMP<=24) && (RAIN>=60 && RAIN<=150))
    {
    document.write("Tomato is suitable crop under these conditions")
    }
    else if((PH>=5.5 && PH<=6.6) && (TEMP>=13 && TEMP<=21) && (RAIN>=60 && RAIN<=100))
    {
    document.write(" Brinjal is suitable crop under these conditions")
    }
    else if((PH>=5.5 && PH<=7.5) && (TEMP>=24 && TEMP<=27) && (RAIN>=89 && RAIN<=101))
    {
    document.write("Mango is suitable crop under these conditions")
    }
    else if((PH>=6.5 && PH<=7.5) && (TEMP>=26 && TEMP<=28) && (RAIN>=200 && RAIN<=250))
    {
    document.write("Banana is suitable crop under these conditions")
    }
    else if((PH>=6 && PH<=6.5) && (TEMP>=12 && TEMP<=18) && (RAIN>=120 && RAIN<=200))
    {
    document.write("Potato is suitable crop under these conditions")
    }
    else if((PH>=6 && PH<=7) && (TEMP>=13 && TEMP<=24) && (RAIN>=75 && RAIN<=100))
    {
    document.write("Onion is suitable crop under these conditions")
    }
    else if((PH>=6 && PH<=7) && (TEMP>=20 && TEMP<=25) && (RAIN>=75 && RAIN<=100))
    {
    document.write("Chillies is suitable crop under these conditions")
    }
    else
    {
        window.location.href="cropsdata.html";
        
    }
       
    
})