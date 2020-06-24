import React from 'react';
import {Categories, Pizza, SortPopup} from "../components";

const Home = ({items}) => {

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={(name) => console.log(name)}
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]}/>
                <SortPopup
                    items={[
                        'популярности',
                        'цене',
                        'алфавиту'
                    ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((obj) => <Pizza key={obj.id} {...obj}/>)
                }

            </div>
        </div>
    );
};

export default Home;