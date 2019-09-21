# React Native Space Navigation

The design belongs to a designer from Dribbble. [Navigation Menu Interactions 🚀](https://dribbble.com/shots/7114609-Navigation-Menu-Interactions)

## Images

<img src="https://github.com/ugurdalkiran/react-native-space-navigation/blob/master/image.gif" width="300">

## Dependencies

1. [react-native-svg](https://github.com/react-native-community/react-native-svg)
2. [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Installation

```js
npm install --save react-native-space-navigation
```

## Import

```js
import SpaceNavigation from 'react-native-space-navigation';
```

## Parameters

Name | Value | Description
--- | --- | ---
changeNavigation | `callback(page)` | The function to call when the page changes.
navigation | `Array` | Set of menus to create.
firstPage | `Number` | Start page order.

## Usage

```js
navigation(page){
  console.warn(page);
}

<SpaceNavigation
  changeNavigation={this.navigation}
  navigation={[
    { packet: 'Foundation', icon: 'home' },
    { packet: 'Feather', icon: 'bookmark' },
    { packet: 'Feather', icon: 'plus-circle' },
    { packet: 'AntDesign', icon: 'user' },
    { packet: 'Entypo', icon: 'cog' }
  ]}
  firstPage={0}
/>
```

## License

[MIT](https://github.com/ugurdalkiran/react-native-space-navigation/blob/master/LICENSE)