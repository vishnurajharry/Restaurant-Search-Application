import React from 'react'
import {View ,Text, Image , StyleSheet} from 'react-native';

const ResultImage = ({result}) => {
	return <View style = {styles.viewStyle}>
			  <Image style = {styles.imageStyle} source = {{ uri: result.image_url }}/>
			  <Text>{result.name}</Text>
			  <Text>{result.rating} Stars ,{result.review_count} Reviews </Text>
		   </View>
}

const styles= StyleSheet.create({
	imageStyle : {
		width:250,
		borderRadius: 5,
		height:200
		
	},

	viewStyle:{
		marginHorizontal:15,
		marginBottom:5
	}
})

export default ResultImage;