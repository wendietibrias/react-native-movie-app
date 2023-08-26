import { View,Image,StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

const MovieCardAlt = ({ movie }) => {
   return (
      <Link href={`/movie/${movie.id}`} asChild>
         <Pressable>
            <View style={styles.movieContainer}>
              <Image 
                style={styles.movieImage}
                source={{
                 uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
               }} />
           </View>
         </Pressable>
      </Link>
   )
}

const styles = StyleSheet.create({
    movieContainer: {
        width:130,
    
    },
    movieImage: {
        width:130,
        height:180,
        borderRadius:8
    }
});

export default MovieCardAlt;