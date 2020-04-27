import React from 'react';
import {View , TextInput ,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term , onEditTerm , onTermSubmit}) => {
	return <View style = {styles.background}>
				<Feather name = 'search' style = {styles.IconStyle} />
				<TextInput 
					autoCapitalize = "none"
					autoCorrect= {false}
					style = {styles.InputStyle} 
					placeholder = "Search"
					value ={term} 
					onChangeText = {newTerm => onEditTerm(newTerm)}
					onEndEditing = {() => onTermSubmit()}
					 />
					

		   </View>
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEFF',
		height: 50,
		borderRadius:5,
		marginHorizontal : 15,
		marginVertical : 15,
		flexDirection: 'row'

	
	},
	InputStyle: {
		flex:1,
		fontSize:18
	},

	IconStyle: {
		fontSize: 35,
		alignSelf:'center',
		marginHorizontal: 15
	}

})

export default SearchBar;