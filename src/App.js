import './scss/app.scss';
import Header from './components/Header'
import {useState, useEffect, createContext} from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

import {Routes,Route} from "react-router-dom";

export const SearchContext = createContext()
function App() {
    const [searchValue, setSearchValue] = useState('');
    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            fetch("https://639b31b331877e43d6857379.mockapi.io/items")
                .then(res => res.json())
                .then(json=> {
                    setItems(json)
                    setIsLoading(false)
                })
    }, []);


    return (
        <div className="wrapper">
            <SearchContext.Provider value={ {searchValue, setSearchValue} }>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
