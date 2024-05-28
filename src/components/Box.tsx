import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/themeContext";
import '../box.css';

const Box = ({ data, size = 'large', round }) => {
    const sizes = {
        small: "box-small",
        medium: "box-medium",
        large: "box-large"
    };

    const roundedCorners = round ? "rounded" : "";
    const boxStyle = `box ${sizes[size]} ${roundedCorners}`;
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={boxStyle}>
            {data.map(product => (
                <div key={product.id} className="card-main" style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>
                    <img className="main-img" src={product.image} alt={product.title} />
                    <div className="card-content">
                        <Link to={`/products/${product.id}`} style={{ backgroundColor: theme.background, color: theme.foreground }}><h2>{product.title}</h2></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Box;
