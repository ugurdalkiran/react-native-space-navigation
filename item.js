import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles, iconColor, iconSize, iconActiveColor } from './styles';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class SpaceNavigationSingle extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: this.props.icon,
			size: iconSize,
			color: this.props.active ? iconActiveColor : iconColor
		};
	}

	static getDerivedStateFromProps(nextProps, prevState){
		return {
			color: nextProps.active ? iconActiveColor : iconColor
		};
	}

	render(){
		return (
			<TouchableOpacity activeOpacity={0.72} onPress={() => this.props.clickFunction(this.props.id)} style={[styles.singleIcon, { width: this.props.singleWidth }]}>
				{ this.props.packet === 'AntDesign' && <AntDesign {...this.state} /> }
				{ this.props.packet === 'Entypo' && <Entypo {...this.state} /> }
				{ this.props.packet === 'EvilIcons' && <EvilIcons {...this.state} /> }
				{ this.props.packet === 'Feather' && <Feather {...this.state} /> }
				{ this.props.packet === 'FontAwesome' && <FontAwesome {...this.state} /> }
				{ this.props.packet === 'FontAwesome5' && <FontAwesome5 {...this.state} /> }
				{ this.props.packet === 'Fontisto' && <Fontisto {...this.state} /> }
				{ this.props.packet === 'Foundation' && <Foundation {...this.state} /> }
				{ this.props.packet === 'Ionicons' && <Ionicons {...this.state} /> }
				{ this.props.packet === 'MaterialCommunityIcons' && <MaterialCommunityIcons {...this.state} /> }
				{ this.props.packet === 'MaterialIcons' && <MaterialIcons {...this.state} /> }
				{ this.props.packet === 'SimpleLineIcons' && <SimpleLineIcons {...this.state} /> }
				{ this.props.packet === 'Octicons' && <Octicons {...this.state} /> }
				{ this.props.packet === 'Zocial' && <Zocial {...this.state} /> }
			</TouchableOpacity>
		);
	}

}