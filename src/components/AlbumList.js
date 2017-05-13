

// React is required because Babel will convert the JSC into React.createElement components
import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {

	state = { albums : [] }

	componentWillMount() {

		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => {

				this.setState({ albums : response.data }) // The only way to change state. Will rerender the component
			})
	}

	render() {
		return (
			<View>
				<Text> Inside album list { this.state.albums.length} </Text>
			</View>
		);
	}
}


export default AlbumList;