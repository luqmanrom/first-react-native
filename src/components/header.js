
// Import libraries

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = () => {

	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> Albums!</Text>
		</View>
	);

};

const styles = {
	textStyle : {
		fontSize: 28
	},
	viewStyle : {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center', // Up and down
		alignItems: 'center', // Left and right,
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2, 

		// Will be discussed later
		elevation: 2,
		position: 'relative'
	}
}

// Export component to make it available on other part of the apps

export default Header;