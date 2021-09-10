var data = 0;
document.getElementById('counter').innerText = data;

function add()
{
    if( data <= 5){
        data = data + 1;
        document.getElementById('counter').innerText = data;
    }
}


function sub()
{
    do{
        data = data-1;
        document.getElementById('counter').innerText = data;
    }
    while( data < 0 )
}