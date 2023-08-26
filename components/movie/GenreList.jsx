import { FlatList, Pressable, View,Text,StyleSheet } from 'react-native';

const GenreList = ({ genres }) => {
    return (
       <View style={styles.container}>
            <FlatList 
            data={genres}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                columnGap:10
            }}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <Pressable>
                    <View style={styles.genreContainer}>
                        <Text style={styles.genreTitle}>{item.name}</Text>
                    </View>
                </Pressable>
            )}
            />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:6,

    },
    genreContainer: {
        backgroundColor:"#ddd",
        paddingVertical:5,
        paddingHorizontal:6,
        borderRadius:4
    },
    genreTitle: {
        fontSize:12,
        fontFamily:"Poppins-Medium"
    }
})

export default GenreList;