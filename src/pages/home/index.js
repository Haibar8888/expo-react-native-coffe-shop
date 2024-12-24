import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'
import React,{ useRef } from 'react'
import { UserIcon, NotificationIcon, LocationIcon, SearchingIcon, SettingIcon } from '../../assets/images'



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
       {/* title */}
      <View>
        <Text style={{ fontSize: 14,fontWeight: 'bold',marginVertical: 15,marginHorizontal: 30 }}>
          Categories
        </Text>
      </View>
      {/* title end */}
      {/* categories end */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: '24px',
  }
})