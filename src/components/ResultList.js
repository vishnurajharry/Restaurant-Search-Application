import React from 'react';;
import {View ,Text , StyleSheet , FlatList ,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultImage from './ResultImage';

const ResultList = ({title , dataList , navigation}) => {
	return <View>
		<Text style = {styles.textStyle}>{title}({dataList.length})</Text>
		<FlatList 
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			keyExtractor = {result => result.id} 
			data = {dataList}
			renderItem = {( {item} ) => { 
				return  <TouchableOpacity onPress = {()=> navigation.navigate('result', {id:item.id})}>	
				 	 <ResultImage result= {item} />
				 </TouchableOpacity>
			}}
		/>
	</View>
};

const styles = StyleSheet.create({
	textStyle:{
		fontWeight:"bold",
		fontSize:20,
		marginHorizontal:15
	}

});

export default withNavigation(ResultList);