import { DeviceEventEmitter } from 'react-native';
import { SensorManager } from 'react-native-sensors';

export default class MotionDetector {
  constructor(updateInterval) {
    this.updateInterval = updateInterval;
    this.pitch = 0;
    this.roll = 0;
    this.zAcceleration = 0;
    this.currentOrientation = 'landscapeLeft';
    this.notification = 'orientationDidChange';
    this.orientationSubscription = null;
    this.motionSubscription = null;
  }

  start() {
    this.orientationSubscription = DeviceEventEmitter.addListener(
      this.notification,
      orientation => {
        if (orientation !== 'faceUp' && orientation !== 'faceDown' && orientation !== 'unknown') {
          this.currentOrientation = orientation;
        }
      }
    );

    this.motionSubscription = SensorManager.startAccelerometer(this.updateInterval);
    this.motionSubscription.then(({ x, y, z }) => {
      this.updateMotionData(x, y, z);
    });
  }

  updateMotionData(x, y, z) {
    const rollPitch = this.adjustedRollAndPitch(x, y);
    this.roll = rollPitch.roll;
    this.pitch = rollPitch.pitch;
    this.zAcceleration = z;
  }

  stop() {
    this.orientationSubscription.remove();
    SensorManager.stopAccelerometer();
  }

  adjustedRollAndPitch(x, y) {
    switch (this.currentOrientation) {
      case 'unknown':
      case 'faceUp':
      case 'faceDown':
        return { roll: y, pitch: -x };
      case 'landscapeLeft':
        return { roll: x, pitch: -y };
      case 'portrait':
        return { roll: y, pitch: x };
      case 'portraitUpsideDown':
        return { roll: -y, pitch: -x };
      case 'landscapeRight':
        return { roll: -x, pitch: y };
      default:
        return { roll: y, pitch: x };
    }
  }
}