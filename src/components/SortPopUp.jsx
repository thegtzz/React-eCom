import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

export const SortPopUp = React.memo(function SortPopUp({ items, activeSortType, onClickSortType }) {
    const [visiblePopUp, setVisiblePopUp] = useState(false)
    const sortRef = useRef()
    const activeLabel = items.find(obj => obj.type === activeSortType).name

    const toggleVisiblePopUp = () => {
        setVisiblePopUp(!visiblePopUp)
    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if(!path.includes(sortRef.current)) {
            setVisiblePopUp(false)
        }
    }

    const onSelectItem = (index) => {
        onClickSortType(index)
        setVisiblePopUp(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopUp ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopUp}>{activeLabel}</span>
            </div>
            {visiblePopUp
            && <div className="sort__popup">
                    <ul>
                        {items.map((cat, index) => (
                            <li className={activeSortType === cat.type ? 'active' : ''}
                                onClick={() => onSelectItem(cat)}
                                key={`${cat.name}_${index}`}
                            >
                                {cat.name}
                            </li>))}
                    </ul>
                </div>
            }
        </div>
    )
})

SortPopUp.propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
    activeSortType: PropTypes.string.isRequired,
    onSelectCategory: PropTypes.func
}

SortPopUp.defaultProps = {
    items: []
}