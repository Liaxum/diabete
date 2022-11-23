import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';



export default function ButtonGroup({selectColor, defaultColor, selectTextColor, defaultTextColor, borderColor, borderRadius, globalStyles, btnStyle, textStyle, btns}) {
  const [selection, setSelection] = useState(btns[0]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      ...globalStyles,
    },
    btn: {
      flex: 1,
      borderWidth:0.25,
      borderColor: borderColor? borderColor : defaultColor,
      backgroundColor: defaultColor,
      ...btnStyle,
    },
    btnText: {
      textAlign: 'center',
      color: defaultTextColor,
      ...textStyle,
    }
  });

  const displayButtons = [];
  for (let i = 0; i < btns.length; i++) {
    if (i === 0) {
      displayButtons.push((
        <TouchableOpacity key={i} style={[styles.btn, selection === btns[i] ? {backgroundColor: selectColor}: null, {borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius}]} onPress={() => setSelection(btns[i])}>
          <View style={{justifyContent: 'center', height: '100%'}}>
            <Text style={[styles.btnText, selection === btns[i] ? {color: selectTextColor} : null]}>{btns[i]}</Text>
          </View>
        </TouchableOpacity>
      ));
    } else if (i === btns.length - 1) {
      displayButtons.push((
        <TouchableOpacity key={i} style={[styles.btn, selection === btns[i] ? {backgroundColor: selectColor}: null, {borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius}]} onPress={() => setSelection(btns[i])}>
          <View style={{justifyContent: 'center', height: '100%'}}>
            <Text style={[styles.btnText, selection === btns[i] ? {color: selectTextColor} : null]}>{btns[i]}</Text>
          </View>
        </TouchableOpacity>
      ));
    } else {
      displayButtons.push((
        <TouchableOpacity key={i} style={[styles.btn, selection === btns[i] ? {backgroundColor: selectColor}: null]} onPress={() => setSelection(btns[i])}>
          <View style={{justifyContent: 'center', height: '100%'}}>
            <Text style={[styles.btnText, selection === btns[i] ? {color: selectTextColor} : null]}>{btns[i]}</Text>
          </View>
        </TouchableOpacity>
      ));
    }
  }


  return (
    <View style={styles.container}>
      {displayButtons}
    </View>
  );
}