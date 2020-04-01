function calculate_tips()
{
    var x=document.getElementById("usluga").selectedIndex;
    var choosen=document.getElementById("usluga").options;
    var izborbaksis=choosen[x].value;
    var smetka=document.getElementById("smetka").value;

    var tips=smetka*izborbaksis/100;       //baksis presmetan za celata smetka i zadovolstvoto na uslugata

    var vraboteni=document.getElementById("vraboteni").value;

    var final_tip_for_employed=tips/vraboteni;
    
    document.getElementById("tip_calculated").innerHTML="BAKSIZ<br>";
    document.getElementById("tip_calculated").innerHTML+="<span>&#36;</span>";
    document.getElementById("tip_calculated").innerHTML+=final_tip_for_employed;
    document.getElementById("tip_calculated").innerHTML+="<br>za sekoj vraboten";
}
calculate_tips();