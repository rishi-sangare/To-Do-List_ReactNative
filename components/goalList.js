import { StyleSheet,View,Text,Pressable} from "react-native";

function GoalList(props){
    return(
        <Pressable android_ripple={{color:'#210644'}} 
        onPress={props.ondeleteItemGoal.bind(this,props.id)}
        style={({pressed})=>pressed && styles.pressdItem}>
        <View  style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
        </View>
       </Pressable>
    );
};

const styles=StyleSheet.create({

    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'purple',
       
        
       },
       pressdItem:{
        opacity:0.5
       },
      
       goalText:{
        color:'white',
        padding:8,
       }
})

export default GoalList;