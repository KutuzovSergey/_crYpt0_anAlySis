import React from "react";

import "../styles/componentStyles/ListСoinСharacteristics.scss";

const ListСoinСharacteristics = (props) => {
    return (
        <div className="property">
            <div className="property__info">
                <div className="property__value">
                    <span>{props.capitalization}</span>
                </div>
                <div className="property__name">
                    <span>капитализация</span>
                </div>
            </div>
            <div className="property__info">
                <div className="property__value">
                    <span>{props.cost}</span>
                </div>
                <div className="property__name">
                    <span>стоимость</span>
                </div>
            </div>
            <div className="property__info">
                <div className="property__value">
                    <span>{props.chenge}</span>
                </div>
                <div className="property__name">
                    <span>изменения за 24 часа</span>
                </div>
            </div>
            <div className="property__info">
                <div className="property__value">
                    <span>{props.maximum}</span>
                </div>
                <div className="property__name">
                    <span>максимум за 24 часа</span>
                </div>
            </div>
            <div className="property__info">
                <div className="property__value">
                    <span>{props.minimum}</span>
                </div>
                <div className="property__name">
                    <span>минимум за 24 часа</span>
                </div>
            </div>
        </div>
    )
}

export default ListСoinСharacteristics;