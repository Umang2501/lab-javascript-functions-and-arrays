const foods=["wheat","rice","pulses","tomatoes","gram","blueberries"]
const numberarray=[1,2,3,4,5,6,7,11,12,13]
document.getElementById("id3").innerHTML=numberarray.filter(e=>e%2==0)
document.getElementById("id4").innerHTML=numberarray.filter(e=>{
    var f=0,i=0;
    for(i=2;i<e;i++)
        if(e%i==0){
            console.log("hello");
            f=1;
            break;
        }
        if(f==0){
            console.log("hello2")
            return e;
        }
    }  
)
document.getElementById("id5").innerHTML=numberarray.map(e=>e*e)
document.getElementById("id6").innerHTML=numberarray.reduce((e,m)=>m*e,1)
document.getElementById("id1").innerHTML=foods.slice(1,5)
foods.splice(4,0,"lemons","peas")
document.getElementById("id2").innerHTML=foods