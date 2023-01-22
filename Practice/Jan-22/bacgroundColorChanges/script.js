console.log("script connect");
// let randomcolor=["red","pink","yellow"];

let btn= document.getElementById("button");

btn.addEventListener("click", color);


const randomcolor= ()=>{
    let val="abcdef0123456789";
    let col="#";
    for (let i = 0; i < 6; i++) {
        col=col+val[Math.floor(Math.random()*16)];  
    }

    return col;

}

function color(){
    
    // console.log(col);
    document.body.style.backgroundColor=randomcolor();
}