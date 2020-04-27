import {useEffect ,useState} from 'react';
import yelp from '../api/yelp';

	export default () => {

		const [results , setResults] = useState([]);
		const [errorMessage , setErrorMessage] = useState('');


		const searchApi = async (searchTerm) => {
			
			try{
			const response = await yelp.get('/search',{
				params: {
					limit: 50,
					// term, //es shorthand  // equivalent to term:term
					term: searchTerm,
					location: 'san jose'
				}
			});
			setResults(response.data.businesses)
			} catch(err){
				setErrorMessage('Something went Wrong')
			}	
	}

	//  searchApi('pasta'); Bad practice ,infinite loop whenever component rerenders

	useEffect(()=> {
		searchApi('pasta');
	},[])   //Emptystring toindicate only once initially

	return [searchApi , results , errorMessage];

}
