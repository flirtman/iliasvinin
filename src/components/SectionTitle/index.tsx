import React from "react";

type SectionTitleProps = {
    text: string,
    color: any
};

const SectionTitle: React.FC<SectionTitleProps> = ({text, color}) => {

    let mainColor = 'white';
    if(color === 'primary') mainColor = '#b4847a';

    const styles = {
        color: mainColor,
        fontSize: "2em",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        fontFamily: 'Bookman Old Style',
        fontWeight: "bold",
    };

    const stylesDecor = {
        display: "block",
        height: "2px",
        backgroundColor:  mainColor,
        width: "100px"
    };

    return (
        <h2 style={styles}>
            {text} <div style={stylesDecor}></div>
        </h2>
    )
};

export default SectionTitle;
