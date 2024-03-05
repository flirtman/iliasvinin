import React, {useEffect} from 'react';
import Routes from "./Routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.scss';
import i18next from "i18next";
import queryParam from './utils/queryParam';

const App: React.FC = () => {
  const handleLangChange = (lang: any) => {
    i18next.changeLanguage(lang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key'); // -> same as i18next.t
    });
  };

  useEffect(() => {
    if(queryParam('lang'))
      handleLangChange(queryParam('lang'));
  }, []);

  return (
      <div className="wrapper">
        <Routes/>
      </div>
  );
};

export default App;
