let num = '33721';
let end = 0;

for (let i = 0; i < num.length ; i++ )
{    
    if ( i == 0 ) {
        end = num[0];        
    } else {
        end *= num[i];
    }
    console.log(end);

}

console.log(Math.pow(end, 3));
