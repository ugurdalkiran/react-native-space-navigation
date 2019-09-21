import React, { Component } from 'react';
import { View, Animated, Easing, Dimensions } from 'react-native';
import { styles, backgroundColor, spaceNavigationHeight, iconSize } from './styles';
import SpaceNavigationItem from './item';

import Svg, { Polygon, Defs, Stop, LinearGradient } from 'react-native-svg';

export default class SpaceNavigation extends Component{

	constructor(props){
		super(props);
		this.state = {
			nav: this.props.navigation
		};
		this.changeNav = this.changeNav.bind(this);
		this.activeAnimation = new Animated.Value(-1);
		this.singleWidth = Dimensions.get('window').width / this.props.navigation.length;
		this.startPoint = (this.singleWidth - iconSize) / 2;
		this.endPoint = this.singleWidth - this.startPoint;
		this.points = this.startPoint + ",0 0," + spaceNavigationHeight + " " + this.singleWidth + "," + spaceNavigationHeight + " " + this.endPoint + ",0";
	}

	componentDidMount(){
		this.changeNav(this.props.firstPage, false);
	}
	
	changeNav(id, change = true){
		let nav = [];
		this.state.nav.map((item, index) => nav.push({ ...item, active: index === id }) );
		this.setState({ nav }, () => {
			this.animation(id);
			if ( change ) this.props.changeNavigation(id);
		});
	}

	animation(val){
		Animated.timing( this.activeAnimation, {
			toValue: val, duration: 250, useNativeDriver: true, easing: Easing.ease
		}).start();
	}

	render(){
		const animationLeft =  this.activeAnimation.interpolate({
			inputRange: [-1, 0, 1],
			outputRange: [-this.singleWidth, 0, this.singleWidth]
		});
		return (
			<View style={styles.spaceNavigation}>
				<View style={styles.spaceIcons}>
					{ this.state.nav.map((item, index) =>
						<SpaceNavigationItem key={index} id={index} singleWidth={this.singleWidth} clickFunction={this.changeNav} {...item} />
					) }
				</View>
				<Animated.View style={[styles.active, { width: this.singleWidth, transform: [{ translateX: animationLeft }] }]}>
					<View style={styles.activeSmall} />
					<View style={styles.activeBackground}>

						<Svg width={this.singleWidth} height={spaceNavigationHeight}>
							<Defs>
								<LinearGradient id="grad" x1="0" y1="0" x2="0" y2={spaceNavigationHeight + 10}>
									<Stop offset="0" stopColor="#606060" stopOpacity="1" />
									<Stop offset="1" stopColor={backgroundColor} stopOpacity="1" />
								</LinearGradient>
							</Defs>
							<Polygon points={this.points} fill="url(#grad)" />
						</Svg>

					</View>
				</Animated.View>
			</View>
		);
	}

}