import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
function App() {
	return <View style = {styles.container}>
		<Image source = {require('./assets/profile_image.png')} style={styles.Image}/>

		<View style= {styles.detailsContainer}>
			<Text style= {styles.label}>Name</Text>
			<Text style= {[styles.label,styles.info]}>Tony Stark</Text>
		</View>

		<View style= {styles.detailsContainer}>
			<Text style= {styles.label}>Email</Text>
			<Text style= {[styles.label,styles.info]}>stark@tony.com</Text>
		</View>

		<View style= {styles.detailsContainer}>
			<Text style= {styles.label}>Gender</Text>
			<Text style= {[styles.label,styles.info]}>Male</Text>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 15
	},

	Image: {
		marginTop: 120,
		height: 200,
		width: 200,
		marginBottom: 45,
		alignSelf: 'center'
	},

	detailsContainer: {
		flexDirection: 'row',
		marginVertical: 3
	},

	label: {
		borderColor: "orange",
		borderWidth: 1,
		fontSize: 20,
		flex: 2.5,
		paddingHorizontal: 7,
		color: 'blue'
	},

	info: {
		flex: 7.5
	}
});
export default App;