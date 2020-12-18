import * as React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,FlatList,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

//home------------
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Manage Products </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Employees')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Manage Employees</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>    Manage Orders    </Text>
        </View>
        </TouchableOpacity>
    </View>
  );
}
//product-------------------
const productScreen=({navigation})=>{
  const [list,setList]=useState([
    {key:0,name:"Casual Shirt",price:" Rs.1200",image:"https://source.unsplash.com/1600x900/?dressing,shirt"},
    {key:1,name:"Socks",price:" Rs.1000",image:"https://source.unsplash.com/1600x900/?dressing,socks"},
    {key:2,name:"Branded Coat",price:" Rs.1000",image:"https://source.unsplash.com/1600x900/?dressing,coat"}
  ])
  const ViewItemDetails=(item)=>{
    navigation.navigate('ProductDetails',{item:item})
  }
  return(
    <View>
      <FlatList
        keyExtractor={(item) => item.key.toString()}
        data={list}
        renderItem = {({item})=>(
          <View>
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>ViewItemDetails(item)}>
            <View style={{flexDirection:"row",padding:25}}>
              <View>
              <Text style={{fontSize:19,fontWeight:"bold"}}>{item.name}</Text>
              <View style={{flexDirection:"row",marginTop:7}}>
              <Text style={{fontWeight:"bold"}}>Price:</Text><Text>{item.price}</Text>
              </View>
              </View>
              <Image source={{uri: item.image}}
              style={styles.imgStyle} />
            </View> 
            </TouchableOpacity>
          </View>
        )}>
      </FlatList>
    </View>
  );
}

const productDetailScreen=({route})=>{
  const product=route.params.item
  return(
    <View style={{margin:20}}>
      <Text style={{fontSize:19,fontWeight:"bold"}}>{product.name}</Text>
      <Text>This is a geniuine product delivered with in two days with free delivery and price
         of product inclusive tax is {product.price}</Text>
    </View>
  );
}
//employee-----------------
const employeeScreen=({navigation})=>{
  const [list,setList]=useState([
    {key:0,name:"Muhammad Ameen",Designation:"Senior Manager"},
    {key:1,name:"Asad riaz",Designation:"HOD"},
    {key:2,name:"Mubeen",Designation:"Daily Wage Worker"}
  ])
  const ViewItemDetails=(item)=>{
    navigation.navigate('EmployeeDetails',{item:item})
  }
  return(
    <View>
      <FlatList
        keyExtractor={(item) => item.key.toString()}
        data={list}
        renderItem = {({item})=>(
          <View>
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>ViewItemDetails(item)}>       
              <Text style={{fontSize:19,fontWeight:"bold"}}>{item.name}</Text>            
              <View style={{flexDirection:"row",marginTop:7}}>
              <Text style={{fontWeight:"bold",color:'grey'}}>Designation: </Text><Text>{item.Designation}</Text>
              </View>
           </TouchableOpacity>
          </View>
        )}>
      </FlatList>
    </View>
  );
}

const employeeDetailScreen=({route})=>{
  const employee=route.params.item
  return(
    <View style={{margin:20}}>
      <Text style={{fontSize:19,fontWeight:"bold"}}>{employee.name}</Text>
      <Text>Age: 12</Text>
      <Text>Designation: {employee.Designation}</Text>
      <Text>Hiring date: 12 Dec,2012</Text>
      <Text>Salary: 30,000</Text>
    </View>
  );
}
//orders-----------------
const orderScreen=({navigation})=>{
  const [list,setList]=useState([
    {key:0,OrderNumber:"A1284",name:"Casual Shirt",price:"Rs.1200"},
    {key:1,OrderNumber:"A6759",name:"Warm Socks",price:"Rs.900"},
    {key:2,OrderNumber:"A8976",name:"Branded Coat",price:"Rs.10000"}
  ])
  const ViewItemDetails=(item)=>{
    navigation.navigate('OrderDetails',{item:item})
  }
  return(
    <View>
      <FlatList
        keyExtractor={(item) => item.key.toString()}
        data={list}
        renderItem = {({item})=>(
          <View>
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>ViewItemDetails(item)}>
              <Text style={{fontSize:19,fontWeight:"bold"}}>{item.name}</Text>
              <View style={{flexDirection:"row",marginTop:7}}>
              <Text style={{fontWeight:"bold"}}>Order Number: </Text><Text style={{color:"green"}}>{item.OrderNumber}</Text>
              </View>
              
              <View style={{flexDirection:"row",marginTop:7}}>
              <Text style={{fontWeight:"bold"}}>Price:</Text><Text>{item.price}</Text>
              </View> 
            </TouchableOpacity>
          </View>
        )}>
      </FlatList>
    </View>
  );
}

const orderDetailScreen=({route})=>{
  const product=route.params.item
  return(
    <View style={{margin:20}}>
      <Text style={{fontSize:19,fontWeight:"bold"}}>{product.name}</Text>
      <Text>This is a geniuine product delivered with in two days with free delivery and price
         of product inclusive tax is {product.price}</Text>
      <Text>To track your order you can search order number {product.OrderNumber}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}
      screenOptions={{
        headerTitleAlign:"center",
         headerTintColor:"#00203fff",
         headerTitleStyle:"bold",
        
         headerStyle:{
          backgroundColor:'#adefd1ff'
         }
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
           headerShown:false  
        }}/>
        <Stack.Screen name="Products" component={productScreen} 
        />
        <Stack.Screen name="ProductDetails"
         component={productDetailScreen}
         options={{title:'Product Details'}}
         
         />
         <Stack.Screen name="Employees" component={employeeScreen} />
         <Stack.Screen name="EmployeeDetails" component={employeeDetailScreen}
         options={{title:'Employee Details'}} 
         />
         <Stack.Screen name="Orders" component={orderScreen} 
         />
         <Stack.Screen name="OrderDetails" component={orderDetailScreen} 
         options={{title:'Order Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  container:{ 
    flex: 1, alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:"#adefd1ff"
     },
     button:{
      borderRadius:8,
      paddingVertical:16,
      paddingHorizontal:18,
      backgroundColor:'#00203fff',
      margin:15,
      marginLeft:60,
      marginRight:60
    },
    listItemContainer:{
      margin:5,
      marginHorizontal:13,
      backgroundColor:'white',
      borderRadius:10,
      
      borderColor:'grey',
      padding:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 5,  
      elevation: 5
    },
    buttonText:{
      color:'#adefd1ff',
      fontWeight:'bold',
      textTransform:'uppercase',
      fontSize:16,
      textAlign:'center'
    },
    imgStyle:
    {width: 100,
       height: 100,
       position:"absolute",
       right:0,
       borderRadius:5
    }
})
export default App;