import { StyleSheet,View,TextInput,Button,Modal,Image} from "react-native";
import { useState } from "react";

function goalInput(props){

    const [enteredGoalText,setEnteredGoal]=useState('');

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText)
       }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoal('');
        console.log("Added")
       }

  return(
    <Modal transparent={false} visible={props.visible} animationType="fade">
    <View style={styles.inputCointner}>
      <Image style={styles.image} source={require("../assets/image/favicon.png")}/>
    <TextInput 
    style={styles.textInput} 
    placeholder='Your Course Goal!'   
    onChangeText={goalInputHandler}
    value={enteredGoalText}
    />
    <View style={styles.button}>

      <View style={styles.button_inner}>
      <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
   
      <View style={styles.button_inner}>
      <Button  title='Cancel' onPress={props.onCancel} />
      </View>
    
    </View>
   
  </View>
  </Modal>
  );
}


const styles=StyleSheet.create({
    inputCointner:{

        flex:1,
        
        justifyContent:"center",
        alignItems:'center',
        marginBottom:24,
        padding:8,
        // borderBottomWidth:2,
        backgroundColor:'purple'
        
      },
      
      textInput:{
        width:'100%',
        borderWidth:1,
        borderColor:'grey',
        // marginHorizontal:16,
        padding:8,
        backgroundColor:'white'
       },

       button:{
        marginTop:16,
        flexDirection:'row',
       },

       button_inner:{
        marginHorizontal:8
       },
       image:{
        width:100,
        height:100,
        margin:20,

       }
})

export default goalInput;