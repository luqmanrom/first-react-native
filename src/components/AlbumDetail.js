
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// @todo Destructring props and styles


const AlbumDetail = (props) => {

	return (
		<Card>
			<CardSection>

				<View style={styles.thumbnailContainerStyle}>

					<Image 
						source={{ uri : props.album.thumbnail_image }} 
						style={styles.thumbnailStyle} // If no width and image set, it will be zero hence not visible
					/>
				</View>

				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}> {props.album.title}</Text>
					<Text> {props.album.artist}</Text>
				</View>
			</CardSection>

			<CardSection>

				<Image 
					source={{ uri : props.album.image }} 
					style={styles.imageStyle} 
				/>	
			</CardSection>

			<CardSection>
				<Button />
			</CardSection>

		</Card>
	);

};

const styles = {
	headerContentStyle : {
		flexDirection : 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 20
	},
	thumbnailStyle : {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10


	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}


}

export default AlbumDetail;