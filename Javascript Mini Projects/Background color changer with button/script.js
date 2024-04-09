let index = 0;

function ChangeColor(){
let colors = ["red","blue","green","yellow","pink","orange","black","purple"];
document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++]

if (index > colors.length -1)
{
    index=0;
}
}