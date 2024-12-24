import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import React,{ useRef } from 'react'
import { UserIcon, NotificationIcon, LocationIcon, SearchingIcon, SettingIcon,CoffeeIcon,CoffeeIconGreen } from '../../assets/images'

const CategoriesProduct = ({children,isActive}) => {
  if (isActive) {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 105, height: 33, backgroundColor: '#00582F', paddingHorizontal: 13, paddingVertical: 6, borderRadius: 30, marginHorizontal: 1, }}>
        <Image source={CoffeeIcon} style={{ width: 14, height: 14, marginRight: 3 }} />
        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold ' }}>{children}</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 105, height: 33, backgroundColor: '#FFFFFF', paddingHorizontal: 13, paddingVertical: 6, borderRadius: 30, marginHorizontal: 1,  shadowColor: '#000', // Color of the shadow
      shadowOffset: {
          width: 2, // Horizontal offset
          height: 5, // Vertical offset
        },
      shadowOpacity: 0.3, // Increased opacity for a more pronounced shadow
      shadowRadius: 6,    // Increased blur radius for a softer shadow
      // Shadow property for Android
      elevation: 8,}}>
        <Image source={CoffeeIconGreen} style={{ width: 14, height: 14, marginRight: 3,color: '#00582F' }} />
        <Text style={{ fontSize: 10, color: '#00582F', fontWeight: 'bold ' }}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const Home = () => {
  const searchInputRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{ marginTop: 45,marginHorizontal: 30,flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
        <TouchableOpacity onPress={() => console.log('open profile')}>
          <Image source={UserIcon} style={{width: 35, height: 35}}/>
        </TouchableOpacity>  
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
          <Image source={LocationIcon} style={{width: 12, height: 12}}/>
          <Text style={{ fontSize: 12,fontWeight: 'medium' }}>
            Jakarta, Indonesia
          </Text>
        </View>  
        <TouchableOpacity onPress={() => console.log('open notification')}>
          <Image source={NotificationIcon} style={{width: 20, height: 20}} />
        </TouchableOpacity>  
      </View>
      {/* header end */}

      {/* title */}
      <View>
        <Text style={{ fontSize: 14,fontWeight: 'bold',marginVertical: 15,marginHorizontal: 30 }}>
          Good morning, Yudi
        </Text>
      </View>
      {/* title end */}

      {/* searching */}
      <View style={{ flexDirection: 'row',width: '352px',height:'51',backgroundColor:'#F4F4F4',justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 30,borderRadius: 30,paddingHorizontal: 19}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <TouchableOpacity onPress={() => searchInputRef.current.focus()}>
             <Image source={SearchingIcon} style={{width: 19, height: 19}}/>    
          </TouchableOpacity>      
          <TextInput ref={searchInputRef}  placeholder="Search Coffee ..."/>
        </View>
        <TouchableOpacity onPress={() => console.log('open setting')}>
            <Image source={SettingIcon} style={{width: 19, height: 19}}/>
        </TouchableOpacity>
      </View>
      {/* searching end */}

      {/* categories */}
      <View>
        <Text style={{ fontSize: 14,fontWeight: 'bold',marginVertical: 15,marginHorizontal: 30 }}>
          Categories
        </Text>
      </View>
      {/* categories end */}

      {/* categories product */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <CategoriesProduct isActive={true}>Coffee</CategoriesProduct>
          <CategoriesProduct>Cappucino</CategoriesProduct>
          <CategoriesProduct>Hot Tea</CategoriesProduct>
          <CategoriesProduct>Ice Tea</CategoriesProduct>
      </ScrollView>
      {/* categories product end */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: '24px',
  },
  scrollView: {
    marginLeft: 30
  }
})