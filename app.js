let weather = ['#fffafa','#ADD8E6','#00008B','#008000','#ff0000'];
let snow = ['#fffafa','#e5e1e1','#ccc8c8','#b2afaf','#999696','#7f7d7d','#666464','#4c4b4b','#333232','#191919'];
let print_val = document.getElementById('main');
let value = 0;
function inc(){
    value += 1;
    document.getElementById('value').innerHTML = value;

    if(value <= 10){
        for(let i=1;i<=10;i++)
        {
            
                console.log(value, i);
                if(value == i)
                {
                    print_val.style.background = snow[i];
                }
            // }
        }
        document.getElementById("value").style.color = "red";  
    }
    
    else{
        // print_val.style.background = "none";
        document.getElementById('value').style.background = "none";
    }

    if(value >= 11 && value <= 20)
    {
        print_val.style.background = weather[1];
    }

    if(value >= 21 && value <= 30)
    {
        print_val.style.background = weather[2];
    }

    if(value >= 31 && value <= 40)
    {
        print_val.style.background = weather[3];
    }

    if(value >= 41)
    {
        print_val.style.background = weather[4];
        document.getElementById("value").style.color = "black"; 
    } 
}

function dec(){
    value -=1;
    document.getElementById('value').innerHTML = value;
    if(value == 1 || value <= 10){
        print_val.style.background = weather[0];
        document.getElementById("value").style.color = "red";  
    }
    
    else{
        // print_val.style.background = "none";
        document.getElementById('value').style.background = "none";
    }

    if(value >= 11 && value <= 20)
    {
        print_val.style.background = weather[1];
    }

    if(value >= 21 && value <= 30)
    {
        print_val.style.background = weather[2];
    }

    if(value >= 31 && value <= 40)
    {
        print_val.style.background = weather[3];
    }

    if(value >= 41)
    {
        print_val.style.background = weather[4];
        document.getElementById("value").style.color = "black"; 
    }
}