import { View,FlatList,Image,StyleSheet,Text,ActivityIndicator } from "react-native";

const MovieCast = ({ casts }) => {
   if(!casts) {
      return (
         <View>
             <ActivityIndicator size="large" />
         </View>
      )
   }

   return (
      <View style={styles.container}>
         <Text style={styles.castTitle}>Cast</Text>
         <FlatList
            data={casts}
            style={styles.castContainer}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                columnGap:5
            }}
            renderItem={({ item }) => (
                <View style={styles.castItemContainer}>
                    <Image
                       style={styles.castImage} 
                       source={{
                          uri:`https://image.tmdb.org/t/p/original${item.profile_path}`,
                       }}
                    />
                    <Text style={styles.castName}>{item.name}</Text>
                </View>
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
    container: {
        marginTop:12
    },
    castContainer: {
        marginTop:10
    },
    castTitle: {
        fontSize:17,
        fontFamily:"Poppins-Bold"
    },
    castItemContainer: {
        width:120,
    },
    castImage: {
        width:120,
        height:110,
        borderRadius:8
    },
    castName: {
        marginTop:6,
        fontSize:12,
        fontFamily:"Poppins-Semibold"
    }
})

export default MovieCast;