import { Alert } from 'react-native';
//import {contiene} from 'htmlspecialchars.js';

//Classe del motore di calcolo

 class processore{

    isNumeric(n){
        //Se il cast float di n non restituisce "Not a Number" ed è un numero finito, allora è numerico
        return !isNaN(parseFloat(n)) && isFinite(n);
        
    }

    tastopremuto(tasto){
        //Il tasto è stato premuto
        if(this.isNumeric(tasto)){
            //Tasti numerici
            if(global.sovrascrivi == 1){
                //Passaggio dallo zero a un valoer
                global.sovrascrivi=0;
                global.miodisplay=tasto;
            }else{
                //Edit
                global.miodisplay=parseFloat(global.miodisplay+tasto).toString();
            }
        }

        if(tasto=="AC"){
            //Tasto di cancellazione
            global.miodisplay="0";
            global.accumulatore="0";
            global.sovrascrivi=1;
        }

        //Se è una virgola e non ce n'è già un'altra viene cambiata in "." ed accoda 
        if(tasto=="," && global.miodisplay.indexOf(".")==-1){
            global.miodisplay+=".";
        }

        //Verifica operatori aritmetici
        if("x/-+%±=".indexOf(tasto) > -1){

            if(tasto=="x") {tasto="*"}

            if(tasto=="±"){
                //Inverte il segno del numero
                global.miodisplay=(parseFloat(global.miodisplay)*-1).toString();
            }
            
            if(tasto=="%"){
                //Tasto percentuale
                var valori;
                /*
                    /../ -> Gli "slash" racchiudono l'espressione regolare
                    [+-]
                    \d+ vale per tutti i numeri decimali
                    (?:\.\d)?
                    g
                */
                valori = global.accumulatore.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
                global.accumulatore = global.accumulatore + ((parseFloat(valori[valori.length-1])*parseFloat(global.miodisplay))/100).toString();
            }else{
            //Operatore aritmetico 
            if(global.accumulatore != "0"){
                global.accumulatore=global.accumulatore+(parseFloat(global.miodisplay)).toString();
            }else{
                global.accumulatore=(parseFloat(global.miodisplay)).toString();
                }   
            }

            try{
                global.accumulatore=parseFloat(eval(global.accumulatore).toFixed(5)).toString();
                global.miodisplay=global.accumulatore;
            }catch(e) {}

            //Se l'operazione era una macro azzero accumulatore (risultato nel display) e azzerro tasto
            if(tasto=="%" || tasto=="±"){
                global.accumulatore="";
                tasto="";
            }

            // Accodo l'operatore aritmetico
            global.accumulatore+=tasto;
            global.sovrascrivi=1;
        }

    }
}

const Processore= new processore();
export default Processore;