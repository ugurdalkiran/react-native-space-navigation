import { StyleSheet } from 'react-native';

export const spaceNavigationHeight = 64;
export const iconSize = 32;

export const backgroundColor = '#000';
export const iconColor = '#4e4e4e';
export const iconActiveColor = '#fff';

export const styles = StyleSheet.create({

	spaceNavigation: { backgroundColor },
	spaceIcons: { flexDirection: 'row', zIndex: 2 },
	singleIcon: { height: spaceNavigationHeight, justifyContent: 'center', alignItems: 'center' },

	active: { position: 'absolute', top: 0, bottom: 0, left: 0, zIndex: 1, alignItems: 'center' },
	activeSmall: { backgroundColor: iconActiveColor, width: ( iconSize + 10 ), height: 5, borderRadius: 5, zIndex: 2 },
	activeBackground: { zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }

});