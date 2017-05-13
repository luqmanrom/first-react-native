
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = (props) => {

	return (
		<Card>
			<CardSection>

				<View>

					<Image 
					source={{ uri : props.album.thumbnail_image }} 
					style={styles.thumbnailStyle} // If no width and image set, it will be zero hence not visible
					/>
				</View>

				<View style={styles.headerContentStyle}>
					<Text> {props.album.title}</Text>
					<Text> {props.album.artist}</Text>
				</View>
			</CardSection>

		</Card>
	);

};

const styles = {
	headerContentStyle : {
		flexDirection : 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle : {
		height: 50,
		width: 50
	}
}

export default AlbumDetail;