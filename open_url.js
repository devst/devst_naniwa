var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.onreadystatechange = function(){
if(xmlhttp.readyState == 4){
WScript.Echo(xmlhttp.status);
}
};
xmlhttp.open("GET",WScript.Arguments(0), false);
xmlhttp.send();
