import React, { useState } from 'react'
import Swipe from './Test/Swipe'
import Framer1 from './FramerMotion/Framer1'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Storage from './Test/Storage';

export default function App() {
	const [routes,] = useState('framer,swipe,storage'.split(','));
	const [elements,] = useState([<Framer1 />, <Swipe />, <Storage />]);
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home {...{ routes }} />} />
					{elements.map((element, index) => <Route key={index} path={routes[index]} element={element} />)}
				</Routes>
			</HashRouter>
		</>
	)
}
