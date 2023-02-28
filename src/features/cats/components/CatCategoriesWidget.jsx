import React, {useEffect, useState} from 'react';
import {useStore} from "@src/hooks/useStore.js";
import {CAT_REDUCER} from "@store/features/cats/reducer.js";
import {CATS_CATEGORIES} from "@store/features/cats/actionTypes.js";
import {getAllCatsCategories} from "@store/features/cats/actions.js";
import styles from "../styles/cats.module.scss"

const CatCategoriesWidget = ({onSelectCategory, activeCategory}) => {
    const {loading, data, success, call} = useStore({
        store: CAT_REDUCER,
        key: CATS_CATEGORIES,
        action: getAllCatsCategories
    });

    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        getRecords()
    }, []);


    const getRecords = () => {
        call();
    }

    const onSelect = (id) => () => {
        onSelectCategory(id)
    }

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={styles["categories-widget"]}>
            <div className={styles["categories-widget--header"]}>
                <h3>Categories {(activeCategory && !collapsed) ? "(1)" : ""}</h3>
                <div className="d-flex align-center ">
                    {
                        activeCategory && <span className="pointer mr-2" onClick={onSelect("")}>Reset</span>
                    }
                    <span className="pointer" onClick={toggleCollapse}>{collapsed ? "^" : ">"}</span>
                </div>
            </div>
            {
                collapsed &&
                <ul>
                    {
                        success && data.map(item => <li
                            className={`${styles["category-item"]} ${activeCategory === item.id ? "category-item--active" : ""}`}
                            style={{backgroundColor: activeCategory === item.id ? "rgba(250,250,250,0.08)" : ""}}
                            onClick={onSelect(item.id)} key={item.id}>{item.name}</li>)
                    }
                </ul>
            }
        </div>
    );
};

CatCategoriesWidget.propTypes = {};

export default CatCategoriesWidget;