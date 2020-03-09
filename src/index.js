import 'react-native-gesture-handler';
import React from 'react'

import Routes from './routes'
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

console.disableYellowBox = true;

const App = () => {
	return (
		<>
			<ApplicationProvider mapping={mapping} theme={lightTheme} >
				<Routes />
			</ApplicationProvider>
		</>
	)
}

export default App