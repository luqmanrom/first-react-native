
// Import libraries

import React from 'react';
import { Text } from 'react-native';

// Make a component

const Header = () => {

	const { textStyle } = styles;

	return (
		<Text style={textStyle}> Albums!</Text>
	);

};

const styles = {
	textStyle : {
		fontSize: 28
	}
}

// Export component to make it available on other part of the apps

export default Header;