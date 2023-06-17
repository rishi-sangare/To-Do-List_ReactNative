import { useState } from 'react';
import { StyleSheet, View ,Button,TextInput,FlatList,Image} from 'react-native';
import GoalList from './components/goalList';
import GoalInput from './components/goalInput';


export default function App() {

  const [modalVisible,setModalIsVisible]=useState(false);
  const [courseGoals,setCourseGoals]=useState([]);


  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
 

   function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoal=>[...currentCourseGoal,
      
      {text:enteredGoalText,id:Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

    function deleteGoal(id){
      setCourseGoals((currentCourseGoal)=>{
        return currentCourseGoal.filter((goal)=>goal.id !== id);
      })
    }
  

  return (
    <View style={styles.appContiner}>
      <Button
      title='Add New Goal'
      color="purple"
      onPress={startAddGoalHandler}
      />
     <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemdata)=>{
          return <GoalList text={itemdata.item.text} 
          id={itemdata.item.id} 
          ondeleteItemGoal={deleteGoal}/>
        }}
        keyExtractor={(item,index)=>{
          return  item.id
        }}
        alwaysBounceVertical={false}
      />
        
      
      </View>
    </View>

   
  );
}
 
const styles = StyleSheet.create({
 appContiner:{
  padding: 20,
  flex:1,
  marginTop:50,
 },
 goalContainer:{
  flex:4,
 },
});
