import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [mynumber, setMynumber] = useState("");
  const [errormsg, setErrorMsg] = useState("");


  function dosomeplus() {
    const innumb = Number(mynumber);

    if(isNaN(innumb)) {
      // Inte en siffra
      setErrorMsg("Detta är inte ett tal.");
    } else {
      setErrorMsg("");
      setCounter(counter + innumb);

      if (counter > 10) { setCounter(0); }
    }
  }

  function dosomeminus() {
    const innumb = Number(mynumber);

    if(isNaN(innumb)) { setErrorMsg("Detta är inte ett tal.");
    } else {
      setErrorMsg("");
      setCounter(counter - innumb);

      if (counter < 0) { setCounter(0); }
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center",
    alignItems: "center" }}>

      <Text style={{ fontSize: 100 }}>{counter}</Text>

      { errormsg != "" &&
        <Text style={{ borderWidth: 0.5, width: 130, height: 80 }}>{ errormsg }</Text>
      }
      

      <TextInput 
        onChangeText={ setMynumber }
        value={ mynumber } 
        style={{ borderWidth: 1, width: 100 }}
      />
      <View style={{ flexDirection: 'row'}}>
        { counter > 1 && <Button onPress={dosomeminus}  title="-" /> }
        { counter < 9 && <Button onPress={dosomeplus}  title="+" /> }
      </View>
      <Button onPress={ () => { setCounter(0); } } title="Återställ" />



    </View>
  );
}