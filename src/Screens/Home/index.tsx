import { Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles } from './style';
import { FlatList} from 'react-native-gesture-handler';
import { Participant } from '../../Components/Participant';
import { useState } from 'react';


export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]); //useState é um hook do React que permite adicionar estado a um componente funcional.
  //  O useState retorna um array com dois elementos: o valor atual do estado e uma função para atualizar esse valor.
  //  O useState recebe como parâmetro o valor inicial do estado, que pode ser de qualquer tipo.
  const [participantName, setParticipantName] = useState(''); //useState é um hook do React que permite adicionar estado a um componente funcional.
  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante já existe", "Já existe um participante na lista com esse nome.")
    }

    setParticipants( prevState => [ ...prevState, participantName])
    setParticipantName(''); //setParticipantName é uma função que atualiza o valor do estado participantName, que é o nome do participante que será adicionado à lista.
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          );
          Alert.alert("Participante removido");
        },
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento
      </Text>
      <Text key="1" style={styles.eventDate}>Segunda Feira, 24 de Março de 2022</Text>

      <View style={styles.formParticipant}>
        <TextInput style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName} //onChangeText é uma propriedade que recebe uma função que será chamada quando o texto do input mudar
        />
        <TouchableOpacity style={styles.button_plus} onPress={handleParticipantAdd}>
          <Text style={styles.text_button}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList  //FlatList é um componente que renderiza uma lista de itens de forma eficiente, ou seja, ele só renderiza os itens que estão visíveis na tela, o que melhora a performance do aplicativo

        data={participants} //data é uma propriedade que recebe um array de dados que serão renderizados na lista
        keyExtractor={item => item} //keyExtractor é uma função que retorna uma string única para cada item da lista
        renderItem={ ({item}) => ( //renderItem é uma função que retorna o componente que será renderizado para cada item da lista
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />)
        }
        contentContainerStyle={{ paddingBottom: 200 }} //contentContainerStyle é uma propriedade que permite estilizar o conteúdo da lista
        showsVerticalScrollIndicator={false} //showsVerticalScrollIndicator é uma propriedade que permite esconder o indicador de rolagem vertical da lista
        ListEmptyComponent={() =>(
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
        />
  
   </View>

  )
}
