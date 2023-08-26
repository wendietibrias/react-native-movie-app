import { View,Text,Image,SafeAreaView,ActivityIndicator,StyleSheet,ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import { GenreList,MovieCast,MovieDetailDesc } from '../../components';
import { useState,useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import { fetchMovie } from '../../services/fetchMovie';
import { Link } from 'expo-router';
import arrow from "../../assets/images/arrow-white.png";

const MovieDetail = () => {
    const { id } = useLocalSearchParams();

    const [movie,setMovie] = useState(null);
    const [loading,setLoading] = useState(false);

    const fetchMovieDetail = async () => {
        setLoading(true);
        const movieData = await fetchMovie(`/movie/${id}?language=en-US&append_to_response=credits`);

        if(movieData) {
            setLoading(false);
            setMovie(movieData);
        }
    }

    useEffect(() => {
        fetchMovieDetail();
    },[]);

    if(loading) {
        return (
            <View>
                 <ActivityIndicator size="large" />
            </View>
        )
    }

    if(!movie) {
        return (
            <View style={styles.container}>
                <Stack.Screen options={{
                headerShadowVisible:false,
                statusBarStyle:"dark",
                headerTitle:"",
                headerLeft: () => (
                   <Link href="/" asChild>
                        <TouchableOpacity>
                            <View style={styles.headerContainer}>
                                <Image source={arrow} style={styles.arrowBack} />
                                <Text style={styles.headerTitle}>Back</Text>
                            </View>
                        </TouchableOpacity>
                   </Link>
                )
                
            }}/>
                <Text>No movies detail founds</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerShadowVisible:false,
                statusBarStyle:"dark",
                headerTransparent:true,
                headerTitle:"",
                headerLeft: () => (
                   <Link href="/" asChild>
                        <TouchableOpacity>
                            <View style={styles.headerContainer}>
                                <Image source={arrow} style={styles.arrowBack} />
                                <Text style={styles.headerTitle}>Back</Text>
                            </View>
                        </TouchableOpacity>
                   </Link>
                )
                
            }}/>

          <ImageBackground 
            source={{
               uri:`https://image.tmdb.org/t/p/original${movie.poster_path}`
             }} 
            style={styles.bannerImage}>
             <View style={{ width:"100%",height:"100%",backgroundColor:"#101010",opacity:0.4 }}></View>
          </ImageBackground> 
          <ScrollView showsVerticalScrollIndicator={false} style={styles.movieDescContainer}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <GenreList genres={movie.genres} />
              <MovieDetailDesc movie={movie} />
              <MovieCast casts={movie.credits.cast} />
         </ScrollView>     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:10,
        backgroundColor:"#fff"
    },
    headerContainer: {
        flexDirection:"row",
        alignItems:"center",
        columnGap:8
    },
    headerTitle: {
        fontSize:14,
        fontFamily:"Poppins-Bold",
        color:"#fff"
    },
    arrowBack: {
        width:22,
        height:22
    },
    bannerImage: {
        width:'100%',
        height:350,
        objectFit:"cover",
        position:"relative"
    },
    movieDescContainer: {
        paddingHorizontal:14,
        paddingVertical:16,
        backgroundColor:"#fff"
    },
    movieTitleContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    movieTitle: {
        fontSize:18,
        fontFamily:"Poppins-Bold"
    },
    movieReleaseDate: {
        color:"#555",
        fontFamily:"Poppins-Medium",
        fontSize:13,
    },
    movieOverview: {
        color:"#555",
        marginTop:16,
        fontSize:13,
        fontFamily:"Poppins-Regular"
    }
});

export default MovieDetail;