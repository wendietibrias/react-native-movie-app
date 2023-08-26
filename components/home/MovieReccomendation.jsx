import { View,Text,StyleSheet,FlatList,ActivityIndicator } from "react-native";
import { useState,useEffect } from 'react';
import { fetchMovies } from "../../services/fetchMovies";
import MovieCard from "./MovieCard";


const MovieRecommendation = () => {
    const [loading,setLoading] = useState(false);
    const [movies,setMovies] = useState([]);

    const fetchMoviesHandler = async () => {
        setLoading(true);
        const moviesData = await fetchMovies('movie/top_rated?language=en-US&page=1');

        if(moviesData) {     
            setLoading(false);
            return setMovies(moviesData.slice(0,7));
        }
 
    }

    useEffect(() => {
        fetchMoviesHandler();
    },[]);

    if(loading) {
        return (
            <View style={{ justifyContent:"center",alignItems:"center" }}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.title}>Reccomendation</Text>
            <FlatList 
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.movieList}
                contentContainerStyle={{
                    columnGap:10
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize:14,
        fontFamily:"Poppins-Bold"
    },
    movieList: {
        marginTop:13
    }
})

export default MovieRecommendation;