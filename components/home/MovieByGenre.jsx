import { View,Text, StyleSheet,ActivityIndicator,FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import { fetchMovies } from '../../services/fetchMovies';
import MovieCardAlt from './MovieCardAlt';

const MovieByGenre = ({
    genre,
    genreId,
    isBottom
}) => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchMovieByGenreHandler = async () => {
        const moviesData = await fetchMovies(`discover/movie?with_genres=${genreId}`);

        if(moviesData) {
            setMovies(moviesData);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieByGenreHandler();
    } ,[])

    if(loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={{
             paddingTop:16,
             paddingBottom:isBottom ? 20 : 0
        }}>
            <Text style={styles.title}>{genre}</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MovieCardAlt movie={item} />}
                style={styles.movieList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    columnGap:10
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
    },
     title : {
        fontSize:14,
        fontFamily:"Poppins-Bold"
    },
    movieList: {
        marginTop:13
    }
})

export default MovieByGenre;