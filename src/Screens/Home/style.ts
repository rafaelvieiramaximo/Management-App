import { Button, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {  
      backgroundColor: '#121015',
      padding: 32,
      marginTop: 32,
    },

    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: "bold",
    },

    eventDate: {
        color: '#FFF',
        fontSize: 16,
        padding: 12
    },

    input:{
      flex: 1, //Faz o input ocupar todo o espaço disponível
      height: 56,
      borderRadius: 5,
      padding: 16,
      backgroundColor: '#1F1E25',
      color: '#fff',
      fontSize: 16,
      marginRight: 12,
    },
    
    text_button:{
      color: '#fff',
      fontSize: 16,
    },

    button_plus:{
      alignItems: 'center', //alinha o conteúdo no centro do botão, diferente do textAlign
      //que alinha o texto no centro do botão
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67', 
    },

    formParticipant:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 36,
      marginBottom: 42,
    },

    listEmpty:{
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },


});