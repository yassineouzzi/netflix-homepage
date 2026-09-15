import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = ["Shows", "Movies", "Podcasts", "New & Hot"];
const posterImage = require("../../assets/images/contrabandposter.jpg");
const relatedThumbnails = [
  "https://picsum.photos/id/1011/200/300",
  "https://picsum.photos/id/1005/200/300",
  "https://picsum.photos/id/1027/200/300",
  "https://picsum.photos/id/1035/200/300",
];

export default function HomeScreen() {
  const handleAlertPress = () => {
    Alert.alert("Alert", "Alert Button pressed");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Top bar: logo, title, icons */}
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <Text style={styles.netflixN}>N</Text>
            <Text style={styles.homeTitle}>Home</Text>
          </View>
          <View style={styles.topIcons}>
            <Text style={styles.iconText}>📺</Text>
            <Text style={styles.iconText}>⬇️</Text>
            <Text style={styles.iconText}>🔔</Text>
          </View>
        </View>

        {/* Category pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
        >
          {categories.map((category) => (
            <View key={category} style={styles.categoryPill}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Hero poster */}
        <View style={styles.heroContainer}>
          <Image
            source={posterImage}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>CONTRABAND</Text>
            <Text style={styles.heroSubtitle}>#2 in Movies Today</Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>▶ Play Movie</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.myListButton}>
                <Text style={styles.myListButtonText}>+ My List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Row section */}
        <Text style={styles.sectionTitle}>From Page to Screen</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.thumbRow}
        >
          {relatedThumbnails.map((uri) => (
            <Image key={uri} source={{ uri }} style={styles.thumbImage} />
          ))}
        </ScrollView>

        {/* oN PRESS button */}
        <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom tab bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomTab}>
          <Text style={styles.bottomIcon}>🏠</Text>
          <Text style={styles.bottomLabel}>Home</Text>
        </View>
        <View style={styles.bottomTab}>
          <Text style={styles.bottomIcon}>🎬</Text>
          <Text style={styles.bottomLabel}>Clips</Text>
        </View>
        <View style={styles.bottomTab}>
          <Text style={styles.bottomIcon}>🔍</Text>
          <Text style={styles.bottomLabel}>Search</Text>
        </View>
        <View style={styles.bottomTab}>
          <View style={styles.avatarCircle} />
          <Text style={styles.bottomLabel}>My Netflix</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
  },
  netflixN: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 8,
  },
  homeTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  topIcons: {
    flexDirection: "row",
  },
  iconText: {
    fontSize: 18,
    marginLeft: 14,
  },
  categoryRow: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  categoryPill: {
    backgroundColor: "#2b2b2b",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    alignSelf: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  heroContainer: {
    width: "100%",
    height: 480,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 40,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 4,
  },
  heroSubtitle: {
    color: "#eefbea",
    fontSize: 13,
    marginBottom: 12,
  },
  heroButtons: {
    flexDirection: "row",
  },
  playButton: {
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  playButtonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 15,
  },
  myListButton: {
    backgroundColor: "rgba(90,90,90,0.7)",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  myListButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  thumbRow: {
    paddingHorizontal: 12,
  },
  thumbImage: {
    width: 100,
    height: 140,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  alertButton: {
    backgroundColor: "#E50914",
    borderRadius: 6,
    paddingVertical: 14,
    marginHorizontal: 16,
    marginTop: 24,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  bottomBar: {
    position: "absolute",
    bottom: 12,
    left: 16,
    right: 16,
    height: 60,
    backgroundColor: "rgba(30,30,30,0.95)",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomTab: {
    alignItems: "center",
  },
  bottomIcon: {
    fontSize: 18,
  },
  bottomLabel: {
    color: "#ccc",
    fontSize: 10,
    marginTop: 2,
  },
  avatarCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#3b82f6",
  },
});
