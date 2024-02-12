import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MotionDetector from '../components/MotionDetector';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.motionDetector = new MotionDetector(1000); // Update interval in milliseconds
    this.state = {
      pitch: 0,
      roll: 0,
      zAcceleration: 0
    };
  }

  componentDidMount() {
    this.motionDetector.start();
    this.motionDetector.onUpdate = () => {
      this.setState({
        pitch: this.motionDetector.pitch,
        roll: this.motionDetector.roll,
        zAcceleration: this.motionDetector.zAcceleration
      });
    };
  }

  componentWillUnmount() {
    this.motionDetector.stop();
  }

  render() {
    const { pitch, roll, zAcceleration } = this.state;
    return (
      <View>
        <Text>Pitch: {pitch}</Text>
        <Text>Roll: {roll}</Text>
        <Text>Z Acceleration: {zAcceleration}</Text>
      </View>
    );
  }
}