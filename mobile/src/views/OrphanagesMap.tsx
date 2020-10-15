import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from "@expo/vector-icons"
import MapMarker from '../images/mapMarker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
  const navigation = useNavigation();
  function hadleNavigateToOrphanageDetails() {
    navigation.navigate("OrphanageDetails");
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.3211063,
          longitude: -51.2358035,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        <Marker
          icon={MapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -23.3211063,
            longitude: -51.2358035
          }}
        >
          <Callout
            tooltip
            onPress={hadleNavigateToOrphanageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar das meninas
            </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => { }}
        >
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    elevation: 3

  },
  calloutText: {
    color: "#0089a5",
    fontSize: 14,
    fontFamily: "Nunito_700Bold"
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3
  },
  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold"
  },
  footerButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});