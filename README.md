# Reddit Posts React Native App (Jay Liu)

## Prerequsites for React Native
```bash
brew install node
brew install yarn
brew install watchman
npm install -g react-native-cli
```
- For more details refer to https://facebook.github.io/react-native/docs/getting-started

## Considerations ##
In order to avoid any potential build errors, please upgrade your node, yarn and npm to the latest versions.

Node: 11.10.1  
NPM: 6.10.0  
Yarn: 1.16.0

## Installation
```bash
yarn install
npm i jetifier
npx jetify
```

## Prerequisites for iOS
You need you have the latest XCode installed on your machine. Also, in order to run the app on simulators, please install at least one (`iPhone X`) simulator.

```bash
gem install cocoapods

cd ios
pod setup
```
Make sure that you have `Pods` directory created after this step

## Prerequisites for Android

* [Install JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
* `cd android && chmod +x gradlew`


## Run in release mode
(Standalone apps will be installed so that you could run them without connecting to your dev machine and metro bundler)

### iOS simulator
`react-native run-ios --configuration Release`

### iOS device
`react-native run-ios --configuration Release --device <your device name>`

### Android device
`react-native run-android --variant=release`


## Run in dev mode
### iOS simulator
`react-native run-ios`

### iOS device
`react-native run-ios --device <your device name>`

### Android device
`react-native start`

On a different terminal window
`react-native run-android`

In case of red error screen, try running `adb reverse tcp:8081 tcp:8081` in terminal, and restart the app from the device.


## Reference
[How to run React Native app on devices](https://facebook.github.io/react-native/docs/running-on-device)
