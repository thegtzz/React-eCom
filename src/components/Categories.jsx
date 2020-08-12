import React, {useState} from "react";

export const Categories = ({items}) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>Все</li>
                {items.map((cat, index) => (
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${cat}_${index}`}
                    >
                        {cat}
                    </li>))}
            </ul>
        </div>
    )
}