import React, {useEffect, useState,useRef} from 'react';
import {StyleSheet, Text,View,SafeAreaView,TouchableOpacity, Keyboard,TextInput,StatusBar} from "react-native";
import {
  CodeFiled,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  import RNOtpVerify from 'react-native-otp-verify';
import reactNativeMultiSelectbox from 'react-native-multi-selectbox';

   const CELL_COUNT = 4;

//   const Otpinput = ({
    
//   }) => {
//     const firstInput = useRef();
//     const secondInput = useRef();
//     const thirdInput = useRef();
//     const fourthInput = useRef();
//     const [otp, setOtp] = useState({1:" ",2:" ",3:" ",4:" "});
   
//   useEffect(()=>{
//     otpHandler = (message) => {
//       const otp = /(\d{4})/g.exec(message)[1];
//      this.setOtp({ otp });
//       RNOtpVerify.removeListener();
//       Keyboard.dismiss();
//   };

//     getHash = () =>
//     RNOtpVerify.getHash()
//     .then(console.log)
//     .catch(console.log);

//     startListeningForOtp = () =>
//     RNOtpVerify.getOtp()
//     .then(p => RNOtpVerify.addListener(this.otpHandler))
//     .catch(p => console.log(p));

//   },[]);
//     return (
//       <View style={styles.container}>
//         <StatusBar
//           barStyle="dark-content"
         
//           translucent
//         />
      
//         <View style={styles.headerContainer}>
         
//           <Text style={styles.headerTitle}>OTP Verification</Text>
//         </View>
//         <Text style={styles.title}>OTP Verification</Text>
//         <Text style={styles.content}>
//           Enter the OTP number just sent you at{' '}
//           <Text style={styles.phoneNumberText}>SFG</Text>
//         </Text>
//         <View style={styles.otpContainer}>
//           <View style={styles.otpBox}>
//             <TextInput
//               style={styles.otpText}
//               keyboardType="number-pad"
//               maxLength={1}
//               ref={firstInput}
//               onChangeText={text => {
//                 setOtp({...otp, 1: text});
//                 text && secondInput.current.focus();
//               }}
//             />
//           </View>
//           <View style={styles.otpBox}>
//             <TextInput
//               style={styles.otpText}
//               keyboardType="number-pad"
//               maxLength={1}
//               ref={secondInput}
//               onChangeText={text => {
//                 setOtp({...otp, 2: text});
//                 text ? thirdInput.current.focus() : firstInput.current.focus();
//               }}
//             />
//           </View>
//           <View style={styles.otpBox}>
//             <TextInput
//               style={styles.otpText}
//               keyboardType="number-pad"
//               maxLength={1}
//               ref={thirdInput}
//               onChangeText={text => {
//                 setOtp({...otp, 3: text});
//                 text ? fourthInput.current.focus() : secondInput.current.focus();
//               }}
//             />
//           </View>
//           <View style={styles.otpBox}>
//             <TextInput
//               style={styles.otpText}
//               keyboardType="number-pad"
//               maxLength={1}
//               ref={fourthInput}
//               onChangeText={text => {
//                 setOtp({...otp, 4: text});
//                 !text && thirdInput.current.focus();
//               }}
//             />
//           </View>
//         </View>
//         <TouchableOpacity
//           style={styles.signinButton}
//           onPress={() => console.log(otp)}>
//           <Text style={styles.signinButtonText}>Verify</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };



  
const Otpinput = ()=> {
 const [value, setValue] = useState('');
//  React.useEffect(()=>{
//   RNOtpVerify.getHash()
//   .then(console.log)
//   .catch(console.log);
//  })
  useEffect(()=>{
    otpHandler = (message) => {
      const value = /(\d{4})/g.exec(message)[1];
     this.setValue({ value });
      RNOtpVerify.removeListener();
      Keyboard.dismiss();
  };

  RNOtpVerify.getHash = () =>
    RNOtpVerify.getHash()
    .then(console.log)
    .catch(console.log);

    startListeningForOtp = () =>
    RNOtpVerify.getOtp()
    .then(p => RNOtpVerify.addListener(this.otpHandler))
    .catch(p => console.log(p));

  },[]);

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
      <>
<View>
  <Text style={{fontSize:38,textAlign:"center"}}>otp</Text>
  <Text>{value}</Text>

</View>


        {/* <SafeAreaView style={styles.root}>
         
            <Text style={styles.title}>OTP</Text>
          
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )} />
        </SafeAreaView> */}
        </>
    );
}

const styles = StyleSheet.create({
// root: {padding: 20, minHeight: 300},
//   title: {textAlign: 'center', fontSize: 30,top:300},
//   codeFieldRoot: {
//     marginTop: 320,
//     width: 280,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   cellRoot: {
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },
//   cellText: {
//     color: '#000',
//     fontSize: 36,
//     textAlign: 'center',
//   },
//   focusCell: {
//     borderBottomColor: '#007AFF',
//     borderBottomWidth: 2,
//   },


container: {
  flex: 1,
  
},
headerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 20,
},
headerTitle: {
  fontSize: 20,
  
  lineHeight: 20 * 1.4,
 
  textAlign: 'center',
},
title: {
  fontSize: 20,
  lineHeight: 20 * 1.4,
  marginTop: 50,
  marginBottom: 10,
  marginHorizontal: 20,
},
content: {
  fontSize: 20,
 
  marginTop: 10,
  marginBottom: 20,
  marginHorizontal: 20,
},
phoneNumberText: {
  fontSize: 18,

  lineHeight: 18 * 1.4,
  
},
otpContainer: {
  marginHorizontal: 20,
  marginBottom: 20,
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
},
otpBox: {
  borderRadius: 5,

  borderWidth: 0.5,
},
otpText: {
  fontSize: 25,
  
  padding: 0,
  textAlign: 'center',
  paddingHorizontal: 18,
  paddingVertical: 10,
},
signinButton: {
  backgroundColor:"white",
  borderRadius: 8,
  marginHorizontal: 20,
 
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
},
signinButtonText: {
  fontSize: 18,
  lineHeight: 18 * 1.4,
 
},
root: {padding: 20, minHeight: 300},
title: {textAlign: 'center', fontSize: 30},
codeFiledRoot: {marginTop: 20},
cell: {
  width: 40,
  height: 40,
  lineHeight: 38,
  fontSize: 24,
  borderWidth: 2,
  borderColor: '#00000030',
  textAlign: 'center',
},
focusCell: {
  borderColor: '#000',
},
});


export default Otpinput;
