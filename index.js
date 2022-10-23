
let possible =['paper','scissor','stone']
let score=0;
let getRand=(list)=>
{
    let low=0;
    let high=list.length;

    let index= Math.floor(Math.random()*(high-low)+low);
    return list[index];
}

// console.log( getRand(possible));





document.getElementById("paper").onclick=()=>{
    
    console.log("paper was clicked");
    compute("paper");
}
document.getElementById("scissor").onclick=()=>{
    console.log("scissor was clicked");
    compute("scissor");
}

document.getElementById("stone").onclick=()=>{
    console.log("stone was clicked");
    compute("stone")
}

let compute=(human)=>{



    versus(human,getRand(possible));

}

let versus=(human,computer)=>{

    if(human==computer){
        console.log("try again here its same output")
        draw();
    }
    else if(human=='paper' && computer=='stone')
    {
        win(human,computer);
        console.log("human wins with a paper");
    }
    else if(human=='scissor' && computer=='paper')
    {
        win(human,computer);
        console.log("human wins with a scissor");
    }

    else if(human=='stone' && computer=='scissor')
    {
        win(human,computer);
        console.log("human wins with a stone");
    }
    else{
        lose(human,computer);
        console.log("humans is lost");
    }
}

let draw = ()=>{
    document.getElementById("youWL").innerHTML="Oops ! you both have the same choice";
}
let win=(human, computer)=>{
    score+=1;
    document.getElementById("score").innerHTML=score;
    console.log(score);
    let res="👤  "+ human.toUpperCase()+" VS "+ " 🤖 "+computer.toUpperCase();
    document.getElementById("hVsC").innerHTML=res;
    document.getElementById("youWL").innerHTML="YOU WIN 👏 ";

}
let lose=(human,computer)=>{
    score-=1;
    if(score<=0)score=-1;
    document.getElementById("score").innerHTML=score;
    console.log(score);
    let res="👤  "+ human.toUpperCase()+" VS "+ " 🤖 "+computer.toUpperCase();
    document.getElementById("hVsC").innerHTML=res;
    document.getElementById("youWL").innerHTML="YOU LOSE  🙁 ";
}
document.getElementById("clear").onclick=()=>{
    score=0;
    document.getElementById("score").innerHTML=score;
    document.getElementById("hVsC").innerHTML="Lets Play Rock Paper Scissor 😃";
    document.getElementById("youWL").innerHTML="Start with clicking  your choice from above";
    

}