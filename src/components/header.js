
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
		backgroundColor: '#f8f8f8'
	}
}

// Export component to make it available on other part of the apps

export default Header;