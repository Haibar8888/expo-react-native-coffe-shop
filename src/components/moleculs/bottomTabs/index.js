import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const Icons = ({ label, focus }) => {
  console.log(focus)
  switch (label) {
    case "Home":
      return focus ? <Ionicons name="home" size={24} color="#00512C" /> : <Ionicons name="home-outline" size={24} color="black" /> 
    case "Favorit":
        return focus ?  <MaterialIcons name="favorite" size={24} color="#00512C" /> : <MaterialIcons name="favorite-border" size={24} color="black" />
    case "Cart":
      return focus ? <MaterialIcons name="shopping-cart" size={24} color="#00512C" /> : <AntDesign name="shoppingcart" size={24} color="black" />
    case "Profile":
      return focus ? <FontAwesome name="user" size={24} color="#00512C" /> : <AntDesign name="user" size={24} color="black" />
    default:
      break;
  }
  return <MaterialIcons name={label} size={24} color="#00512C" />
}

const BottomTabs = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icons label={label} focus={isFocused} size={24} color="#00512C" />
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default BottomTabs

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    overflow: 'hidden',
    paddingVertical:32,
    flexDirection: 'row',
  
    backgroundColor: '#FFFFFF',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    shadowColor: '#000', // Color of the shadow
    shadowOffset: {
        width: 0, // Horizontal offset
        height: 2, // Vertical offset
    },
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.5, // Blur radius of the shadow
    elevation: 5,
  }
})