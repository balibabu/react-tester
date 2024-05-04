import React, { useState } from 'react'
import Swipe from './Test/Swipe'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Storage from './Test/Storage';
import Framer from './FramerMotion/Framer';
import Carosel from './Test/Carosel';
import ClipboardMobile from './Test/ClipboardMobile';
import DuplicateRemover from './Video/DuplicateRemover';
import VideoProcessor from './FFmpeg/VideoProcessor';
import Tester from './cryptography/Tester';
import Intervaling from './Test/Intervaling';
import ProgressiveWebApp from './Test/ProgressiveWebApp';
import ApiTester from './Api/ApiTester';
import ToastProgress from './Test/ToastProgress';
import PseudoCodeEditor from './Editor/PseudoCodeEditor';
import MyDoc from './Editor/MyDoc';
import ReactQuillTest from './Editor/ReactQuillTest';
import PrivatePage from './private/PrivatePage';

export default function App() {
	const [routes,] = useState('ReactQuillTest,MyDoc,PseudoCodeEditor,ToastProgress,ApiTester,framer,swipe,storage,carosel,clip,duplicateFrameRemover,VideoProcessor,Crypto,Interval,PWA-SW,PrivatePage'.split(','));
	const [elements,] = useState([
		<ReactQuillTest />, <MyDoc />,
		<PseudoCodeEditor />, <ToastProgress />, <ApiTester />,
		<Framer />, <Swipe />, <Storage />, <Carosel />,
		<ClipboardMobile />, <DuplicateRemover />, <VideoProcessor />,
		<Tester />, <Intervaling />, <ProgressiveWebApp />, <PrivatePage />
	]);
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
