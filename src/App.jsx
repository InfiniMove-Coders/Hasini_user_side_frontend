import { useMediaQuery } from "@mui/material"
import Navbar4Footer from "./components/navbar/Navbar4Footer"
import IndexRouter from "./routers/IndexRouter"


const App = () => {

	const medium = useMediaQuery("(max-width:768px)");

	return (
		<>
			<IndexRouter />
			{medium &&
				<Navbar4Footer />
			}
		</>
	)
}

export default App