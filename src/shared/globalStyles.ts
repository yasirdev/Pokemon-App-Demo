import { StyleSheet } from "react-native";
import { Colors } from "./colors";
import { hp, wp } from "./responsive";
const GlobalStyles = StyleSheet.create({
    transparentBg:{
        backgroundColor:Colors.transparent
    },
    buttonTitle:{
        fontSize: wp(4),
        color: Colors.white,
    },
    paddingTopHPThr:{
        paddingTop:hp(3)
    },
    paddingTopHPOne:{
        paddingTop:hp(1)
    },
    paddingTopHPTwo:{
        paddingTop:hp(2)
    },
    paddingH7:{
        paddingHorizontal:wp(7)
    },
    flex:{
        flex:1
    },
    noMargin:{
        margin:0
    },
    alignRow:{
        flexDirection:'row'
    },
    justifySelfCenter:{
        alignSelf:'center'
    },
    alignCenterRow:{
        alignItems: 'center',
    },
    alignCenter:{
        textAlign:'center'
    },
    pvTopTwo:{
        paddingTop:hp(2)
    },
    pvOne:{
        paddingVertical:hp(1)
    },
    pvTwo:{
        paddingVertical:hp(2)
    },
    pvThr:{
        paddingVertical:hp(3)
    },
    mvOne:{
        marginVertical:hp(1)
    },
    mvTwo:{
        marginVertical:hp(2)
    },
    mvThr:{
        marginVertical:hp(3)
    },
    phOne:{
        paddingHorizontal:hp(1)
    },
    phTwo:{
        paddingHorizontal:hp(2)
    },
    phThr:{
        paddingHorizontal:hp(3)
    },
    mhOne:{
        marginHorizontal:hp(1)
    },
    mhTwo:{
        marginHorizontal:hp(2)
    },
    mhThr:{
        marginHorizontal:hp(3)
    },
    mtOne:{
        marginTop:hp(1)  
    },
    textBlack:{
        color:Colors.black
    },
    textWhite:{
        color:Colors.white
    },
    container:{
        flex:1
    },
    text: {
        color: Colors.lightText,
        fontSize: wp(3.5),
    },
    heading: {
        color: Colors.heading,
        fontSize: wp(7),
    },
    });

export {GlobalStyles}