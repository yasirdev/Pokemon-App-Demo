import { Alert } from "react-native";
interface onPress {
    (message: string): void;
  }
  let popupRef: any = null;
const Utils = {
  getIdFromUrl(path:string) {
    if(path.includes('pokemon')){
      const match = path.match(/\/(\d+)\/$/);
      if (match) {
          return parseInt(match[1], 10);
      }
      return null;
    }
  },  
  confirmAlert(title: string, msg: string, callback: onPress) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'No', onPress: () => callback('error')},
        {text: 'Yes', onPress: () => callback('success')},
      ],
      {cancelable: false},
    );
  },
  validateEmail(str: string) {
    var pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  }
}

export {Utils};