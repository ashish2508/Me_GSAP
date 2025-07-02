import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
	GsapFrom,
	GsapFromTo,
	GsapScrollTrigger,
	GsapStagger,
	GsapText,
	GsapTimeline,
	GsapTo,
	Home,
} from "./pages";

const App = () => {
	return (
		<Router>
			<div className="min-h-screen w-full relative bg-black text-white">
				{/* Emerald Depths Background with Top Glow */}
				<div
					className="absolute inset-0 z-0"
					style={{
						background:
							"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
					}}
				/>

				{/* Routes need to be in front of the background */}
				<div className="relative z-10 p-6">
					<Routes>
						<Route path="/gsapto" element={<GsapTo />} />
						<Route path="/gsapfrom" element={<GsapFrom />} />
						<Route path="/gsapfromto" element={<GsapFromTo />} />
						<Route path="/gsaptimeline" element={<GsapTimeline />} />
						<Route path="/gsapstagger" element={<GsapStagger />} />
						<Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
						<Route path="/gsaptext" element={<GsapText />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
