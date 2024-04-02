import React, { useState } from 'react'
import Swipe from './Test/Swipe'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Storage from './Test/Storage';
import Framer from './FramerMotion/Framer';
import Carosel from './Test/Carosel';
import ClipboardMobile from './Test/ClipboardMobile';
import DuplicateRemover from './Video/DuplicateRemover';

export default function App() {
	const [routes,] = useState('framer,swipe,storage,carosel,clip,duplicateFrameRemover'.split(','));
	const [elements,] = useState([<Framer />, <Swipe />, <Storage />, <Carosel />, <ClipboardMobile />, <DuplicateRemover />]);
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
