import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopPropTypes = {
    history: any,
    children: any
};

const ScrollToTop : React.FC<ScrollToTopPropTypes> = ({ history, children }) => {
    const location = useLocation();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, [location.pathname]);

    return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
