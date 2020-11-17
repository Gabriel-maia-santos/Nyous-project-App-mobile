import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemEvento from '../../components/itemEvento';


const Home = () => {
    
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listadeEventos();
    },[])

    const listadeEventos = () => {
        fetch(`http://192.168.0.21:5000/api/eventos`)
        .then(response => response.json())
        .then(dados => {
            setEventos(dados.data);
            console.log(dados.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = (evento) => {
        return (
            <ItemEvento 
                nome={evento.item.nome} 
                imagem={evento.item.urlImagem}
                link={evento.item.link} />
        )
    }   

    return(
        <View>
            <Text>Home</Text>
            <FlatList 
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home;