import React, {memo, useCallback, useEffect, useState} from 'react';

import CatCard from "./CatCard.jsx";
import {useStore} from "@src/hooks/useStore.js";
import {CAT_REDUCER} from "@store/features/cats/reducer.js";
import {CATS} from "@store/features/cats/actionTypes.js";
import {getAllCats} from "@store/features/cats/actions.js";
import CatCategoriesWidget from "@features/cats/components/CatCategoriesWidget.jsx";
import styles from "../styles/cats.module.scss"

const Cats = () => {
    const {loading, data, success, call} = useStore({
        store: CAT_REDUCER,
        key: CATS,
        action: getAllCats
    });

    const [selectedCategory,setSelectedCategory] = useState("");
    const [page,setPage] = useState(1);

    useEffect(() => {
        getRecords()
    }, [selectedCategory, page]);

    const getRecords = () => {
        const params = {
            page,
            limit: 10,
            category_ids: selectedCategory
        }
        call({params, options:{withLoadMore: page > 1}});
    }


    const onSelectCategory = useCallback((id) => {
        setSelectedCategory(id);
        setPage(1)
    },[selectedCategory])


    const onLoadMore = () => {
        setPage(page + 1);
    }

    return (
       <div className={styles["cats-section"]}>
           <div className={styles["categories-widget-block"]}>
               <CatCategoriesWidget activeCategory={selectedCategory} onSelectCategory={onSelectCategory}/>
           </div>
           <div className={styles["cats-grid"]}>
               <div className={`grid columns-3 columns-auto-fill`}>
                   {
                       !data.length && loading && <h1>Loading...</h1>
                   }
                   {
                       data.length && data.map(({url, id}) => {
                           return <div key={id + url} className="grid-item"><CatCard url={url}/></div>
                       })
                   }
               </div>
               <div className="d-flex justify-center mt-3">
                   <button onClick={onLoadMore}>Load more...</button>
               </div>
           </div>
       </div>

    );
};

export default memo(Cats, () => false);