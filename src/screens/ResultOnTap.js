import React ,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultOnTap= ({navigation}) => {

	const id = navigation.getParam('id');

	const [results , setResults] = useState(null);

	console.log(results);

	const resultList = async (id)=> {
		const response = await yelp.get(`/${id}`);
		setResults(response.data);
	}

	useEffect(()=> {
		resultList(id);
	},[]);
	
	if(!results){
		return null;
	}

	return <View style={styles.viewStyle}>
			<Text>Showing results for {results.name}</Text>
			<FlatList 
			 data = {results.photos}
			 keyExtractor = {photo=> photo}
			 renderItem = { ({item}) => {
			 	return <Image style = {styles.resultStyle} source = {{uri : item}} />
			 }}
			 />
		   </View>
}

const styles = StyleSheet.create({

	resultStyle:{
		height:250,
		width:250,
		marginVertical:10
	},
	viewStyle:{
		margin:15
	}

})

export default ResultOnTap;