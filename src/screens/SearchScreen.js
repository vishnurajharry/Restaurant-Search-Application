import React  , {useState , useEffect} from 'react';
import {View , Text ,StyleSheet , ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

	const [term , setTerm] = useState('');
	const [searchApi , results , errorMessage] = useResults();

	const filterResults = (price)=> {
		return results.filter(result => {
			return result.price === price
		})
	}


	/*Instead of view we can use '<>' , 
	 to return multiple components rather 
	 encapsulting everything inside a view elementv #lecture 109*/

	return <View style = {{flex : 1}}>  

				<SearchBar 
					term = {term}
					onEditTerm= {newTerm => setTerm(newTerm)}
					onTermSubmit = {() => searchApi(term)}
				/>
				{errorMessage ? <Text>{errorMessage}</Text> : null}


				<Text style = {{fontSize:15,fontWeight:'bold',marginHorizontal:15}}>Total Results : {results.length}</Text>

				<ScrollView>

				<ResultList title = "Budget" dataList = {filterResults('$')}/>
				<ResultList title = "Bit Pricier" dataList = {filterResults('$$')}/>
				<ResultList title ="Expensive" dataList = {filterResults('$$$')}/>

				</ScrollView>

		   </View>
}

export default SearchScreen;