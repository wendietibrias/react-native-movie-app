import { View,Text,StyleSheet } from 'react-native';

const MovieDetailDesc = ({ movie }) => {
    return (
        <View style={styles.container}>
             <Text style={styles.movieDescItem}>Release date : {movie.release_date}</Text>
             <Text style={styles.movieDescItem}>Runtime : {movie.runtime} Minutes</Text>

             <Text style={styles.movieOverview}>{movie.overview}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        marginTop:16 
    },
    movieDescItem: {
        color:"#555",
        fontSize:13,
        fontFamily:"Poppins-Regular",
        marginTop:2
    },
    movieOverview: {
        color:"#555",
        fontSize:13,
        fontFamily:"Poppins-Regular",
        marginTop:7
    }
});

export default MovieDetailDesc;