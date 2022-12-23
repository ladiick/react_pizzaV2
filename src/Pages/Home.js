import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories"
import {useEffect, useState} from "react";
import sort from "../components/Sort";


const Home = () => {

    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name:'популярности',
        sort:'rating'
    });


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://639b31b331877e43d6857379.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&order=desc`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId,sortType]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId}
                            onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType}
                      onClickSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoading ? [...new Array(6)].map((_, Index) => <Skeleton
                        key={Index}/>) : items.map((obj) => <PizzaBlock
                        key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Home