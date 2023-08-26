import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MovieRecommendation, MovieByGenre } from "../components";
import { Stack } from "expo-router";
import user from "../assets/images/user.jpg";
import notification from "../assets/images/notification.png";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          statusBarStyle: "dark",
          headerTitle: "",
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Image source={user} style={styles.userAvatar} />
              <Text style={styles.userName}>Maria Samantha</Text>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Image source={notification} style={styles.notificatinImage} />
              <View style={styles.notificationBadge}></View>
            </View>
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieRecommendation />
        <MovieByGenre genre="Action" genreId="28" />
        <MovieByGenre genre="Comedy" genreId="35" />
        <MovieByGenre isBottom={true} genre="Romance" genreId="10749" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 15,
  },
  headerLeft: {
    alignItems: "center",
    columnGap: 13,
    display: "flex",
    flexDirection: "row",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    position: "relative",
  },
  userAvatar: {
    width: 34,
    height: 34,
    borderRadius: 100,
  },
  userName: {
    fontFamily: "Poppins-Bold",
    fontSize: 13,
  },
  notificatinImage: {
    width: 20,
    height: 20,
  },
  notificationBadge: {
    width: 8,
    height: 8,
    backgroundColor: "#ff4757",
    borderRadius: 100,
    position: "absolute",
    top: -2,
    right: 9,
  },
});

export default Home;
