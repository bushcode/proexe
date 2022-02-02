import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/home';
import NewUser from './pages/addUser';
import './styles/styles.css';
import EditUser from './pages/editUser';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add-user" element={<NewUser />} />
						<Route path="/edit-user/:id" element={<EditUser />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
