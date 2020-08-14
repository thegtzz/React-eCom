import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="139" cy="128" r="127" />
            <rect x="0" y="262" rx="6" ry="6" width="280" height="22"/>
            <rect x="0" y="293" rx="6" ry="6" width="280" height="84"/>
            <rect x="0" y="386" rx="6" ry="6" width="85" height="31"/>
            <rect x="133" y="386" rx="30" ry="30" width="147" height="41"/>
        </ContentLoader>
    )
}