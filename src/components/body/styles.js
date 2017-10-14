import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  bodyStyle:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  hotelRowStyle:{
    flexDirection:'column',
    justifyContent:'flex-start',
    backgroundColor:'white',
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0)'
  },
  containerStyle:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{width:0,height:20},
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'
  },
  titleStyle:{
    fontSize:20,
    color:'white'
  },
  subtitleStyle:{
    fontSize:15,
    color:'white'
  },
  textContainer:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerContainer:{
    backgroundColor:'rgba(223, 104, 0, 1)',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  imgViewStyle:{
    height:50,
    width:50
  },

  nameHotelStyle:{
    fontSize:25,
    marginBottom:8,
    textAlign:'center'
  },
  backgroundImage:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    marginTop:3,
    marginLeft:3,
    marginRight:3,
    height:200
  },
  rowListViewStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  listViewStyle:{
    alignSelf:'stretch',
    paddingTop:10,
    padding:10,
    backgroundColor:'rgba(52,52,52,0.07)'
  },
  detalleHotelStyle:{
    fontSize:15,
    textAlign:'center',
    backgroundColor:'rgba(52,52,52,0)'
  },
  btnStyle:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:'rgba(52,52,52,0)',
    overflow:'hidden'
  },
  textInput:{
    height:30,
    borderWidth:1,
    borderColor:'rgba(255,255,255,0.5)',
    marginTop:10,
    marginBottom:10,
    borderRadius:2

  }
});
module.exports = styles;
