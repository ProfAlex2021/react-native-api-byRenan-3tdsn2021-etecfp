import React from 'react';
import {View, FlatList, Text} from 'react-native'
import api from './services/api'


const Item = ({texto, numero}) => (
    <View>
        <Text>{texto}</Text>
        <Text>{numero}</Text>
    </View>
)

const userList = () => {
    const [dados, setDados] = useState('')

    function carregarDados() {
        api.get('/api/pessoa/')
            .then((response)=>{
                setDados(response)
            })
            .catch((error)=> alert(error))
    }

    carregarDados();

    const exibirItem = ({pessoa}) => (
        <Item texto={pessoa.nome} numero={pessoa.idade} />
    )
    return (
        <View>
            <FlatList
                data={dados}
                renderItem={exibirItem}
                keyExtractor={pessoa => pessoa.id}
            />
        </View>
    )
}

export default userList;