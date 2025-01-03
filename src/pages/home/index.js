import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import React,{ useRef,useState } from 'react'
import { UserIcon, NotificationIcon, LocationIcon, SearchingIcon, SettingIcon, CoffeeIcon, CoffeeIconGreen, CoffeeImg, AddIcon } from '../../assets/images'
import Entypo from '@expo/vector-icons/Entypo';

const CategoriesProduct = ({children,isActive}) => {
  if (isActive) {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 105, height: 33, backgroundColor: '#00582F', paddingHorizontal: 13, paddingVertical: 6, borderRadius: 30, marginHorizontal: 1, }}>
        <Image source={CoffeeIcon} style={{ width: 14, height: 14, marginRight: 3 }} />
        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold'}}>{children}</Text>
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

const ProductCard = ({ title, subtitle, price, image, onAdd }) => {
  
  const [isToggled, setIsToggled] = useState(false);
  
   const handlePress = () => {
    setIsToggled(!isToggled);
  };// Initial icon color

  const iconName = isToggled ? 'heart' : 'heart-outlined'; // Filled heart when toggled
  const iconColor = isToggled ? '#FF0000' : '#FF4848'; 
  
  return (
    <TouchableOpacity style={styles.containerCard} onPress={onAdd}>
      <View style={styles.imageContainer}>
        <Image source={CoffeeImg} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
          <Text style={styles.title}>Cappuccino</Text>
          <TouchableOpacity onPress={handlePress}>
         <Entypo name={iconName} size={24} color={iconColor} />
          </TouchableOpacity>
         
        </View>
        <Text style={styles.subtitle}>With Sugar</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>Rp.50.000</Text>
        <TouchableOpacity onPress={onAdd}>
          <Image source={AddIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

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
      <View>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <CategoriesProduct isActive={true}>Coffee</CategoriesProduct>
          <CategoriesProduct>Cappucino</CategoriesProduct>
          <CategoriesProduct>Hot Tea</CategoriesProduct>
          <CategoriesProduct>Ice Tea</CategoriesProduct>
      </ScrollView>
      </View>
   
      {/* categories product end */}

      {/* product */}
      <View style={styles.product}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ScrollView>
     </View>
      {/* product end */}
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
  },
  product:{
    marginHorizontal: 30,
    marginTop: 30,
  },
   containerCard: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 5,
    backgroundColor: 'white', // Ensure the background is set for elevation to work
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 144,
    height: 105,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal', // Use 'normal' instead of 'regular'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, // Add some spacing above the footer
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addIcon: {
    width: 30,
    height: 30,
  },
})