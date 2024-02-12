import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Level Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});





// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import MotionDetector from '../components/MotionDetector';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.motionDetector = new MotionDetector(1000); // Update interval in milliseconds
//     this.state = {
//       pitch: 0,
//       roll: 0,
//       zAcceleration: 0
//     };
//   }

//   componentDidMount() {
//     this.motionDetector.start();
//     this.motionDetector.onUpdate = () => {
//       this.setState({
//         pitch: this.motionDetector.pitch,
//         roll: this.motionDetector.roll,
//         zAcceleration: this.motionDetector.zAcceleration
//       });
//     };
//   }

//   componentWillUnmount() {
//     this.motionDetector.stop();
//   }

//   render() {
//     const { pitch, roll, zAcceleration } = this.state;
//     return (
//       <View>
//         <Text>Pitch: {pitch}</Text>
//         <Text>Roll: {roll}</Text>
//         <Text>Z Acceleration: {zAcceleration}</Text>
//       </View>
//     );
//   }
// }