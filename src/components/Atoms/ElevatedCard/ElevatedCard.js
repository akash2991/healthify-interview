import React from "react";
import "./ElevatedCard.css";

export function ElevatedCard({ children, style }) {
    return (
        <div className='Elevated-card' style={style}>
            {children}
        </div>
    );
}
