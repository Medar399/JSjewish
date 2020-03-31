//define una funcion que dado un string te regrese la primer letra que se repite
//Google exercise interview


const word = 'ANITAI';
const wsp = word.split('');
for(x=0; x<= wsp.length - 1; x++){
    let ac = 0;
    for (i=0; i<= wsp.length -1 ; i++){
        if (wsp[x] === wsp[i]){
            ac = ac + 1;
        }
    }
    if (ac >=2) {
        console.log(`la letra ${wsp[x]} se repite`)
        break
    }
    //console.log(`numero de letras ${wsp[x]} es: ${ac}`);
}



