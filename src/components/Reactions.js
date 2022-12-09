import React , { useState } from 'react'
import { Text , ScrollView } from 'react-native';
import {
  useAddReactionMutation,
  useGetReactionMutation,
} from "../redux/reducers/reactionsAPI";
export default function Reactions(props) {
  let {itineraryId} = props    
  let [reactions, setReactions] = useState();
  let [addReactionRedux] = useAddReactionMutation();
  let [getReactionRedux] = useGetReactionMutation();
  let [token, setToken] = useState();
  let [idUser, setIdUser] = useState();
  let [change, setChange] = useState(false);


  function addDelReaction(reaction) {    
    let { userId } = reaction;
    let id = reaction._id;
    let findUser = userId.some((e) => e._id === idUser);

    if (findUser) {
      console.log("Coincide");
      addReactionRedux({ id, token }).then((e) => {setChange(!change) });
    } else {
      console.log("No coincide");
      addReactionRedux({ id, token }).then((e) => {setChange(!change) });
    }
  }




  return (


    <ScrollView>
      <Text>Reactions</Text>

    </ScrollView>
  )
}
