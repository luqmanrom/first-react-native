

// React is required because Babel will convert the JSC into React.createElement components
import React, { Component } from 'react'; 
import { View, Text } from 'react-native';


class AlbumList extends Component {

	render() {
		return (
			<View>
				<Text> Inside album list </Text>
			</View>
		);
	}
}


export default AlbumList;