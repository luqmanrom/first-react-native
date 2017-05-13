

// React is required because Babel will convert the JSC into React.createElement components
import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

	state = { albums : [] }

	componentWillMount() {

		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => {

				console.log(response.data);
				this.setState({ albums : response.data }) // The only way to change state. Will rerender the component
			})
	}

	renderAlbums() {

		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album}/>
		); 
		
	}

	render() {
		return (
			<View>
				{ this.renderAlbums() }
			</View>
		);
	}
}


export default AlbumList;