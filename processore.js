import { Alert } from 'react-native';

//Classe del motore di calcolo

 class processore{
    tastopremuto(tasto){
        //IL tasto è stato premuto
        Alert.alert("tasto "+tasto+" premuto");
    }
}

const Processore= new processore();
export default Processore;