import { View,Text,StyleSheet,Image,TouchableOpacity,Pressable } from 'react-native';
import { Link } from 'expo-router';

const MovieCard = ({ movie }) => {
  return (
     <Link href={`/movie/${movie.id}`} asChild>
       <Pressable>
        <View style={styles.movieContainer}>
            <Image 
            style={styles.movieImage}
            source={{
                uri:`https://image.tmdb.org/t/p/original${movie.poster_path}`
            }} />
            <View style={styles.movieDescription}>
                <Text style={styles.movieTitle}>{movie.title.length > 18 ? `${movie.title.substring(0,18)}..` : movie.title}</Text>
            </View>
        </View>
     </Pressable>
     </Link>
  )
}

const styles = StyleSheet.create({
    movieContainer: {
        width:200,
    },
    movieImage: {
        width:200,
        height:200,
        borderRadius:8
    },
    movieDescription: {
        paddingTop:12
    },
    movieTitle: {
        fontSize:13.1,
        fontFamily:"Poppins-Semibold"
    },

})

export default MovieCard