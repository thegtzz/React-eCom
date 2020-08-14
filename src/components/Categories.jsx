import React from "react";
import PropTypes, {number} from "prop-types";

export const Categories = React.memo(function Categories({items, onSelectCategory, activeCategory}) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSelectCategory(null)}>Все</li>
                {items.map((cat, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onSelectCategory(index)}
                        key={`${cat}_${index}`}
                    >
                        {cat}
                    </li>))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
    onSelectCategory: PropTypes.func,
    activeCategory: PropTypes.number
}

Categories.defaultProps = {
    items: [],
    activeCategory: null
}