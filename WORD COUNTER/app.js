let tb = document.getElementById("tb");

tb.addEventListener('input',function(){
    let char = this.value;
    document.getElementById("char").innerHTML=char.length;

    char = char.trim();
    let word = char.split(" ");
    let text= word.filter(function(ele){
        return ele != "";
    });
    document.getElementById("word").innerHTML=text.length;
});