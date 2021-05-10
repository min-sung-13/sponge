import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FilterBar from '../components/common/FilterBar';
import '../scss/filterbar.css';
import PacListContainer from '../containers/pac/PacListContainer';
import { sort } from './data';
import AsyncSelect from 'react-select/async';

const FundingPage = () => {

    const [fms, setFms] = useState('');
    const [fmc, setFmc] = useState('');
    const [fmo, setFmo] = useState('');
    const [ftag, setFtag] = useState('');

    const onSubmit = ({fms, fmc, fmo, ftag}) => {
        setFms(fms);
        setFmc(fmc);
        setFmo(fmo);
        setFtag(ftag);
    }

    const [sorttype, setSorttype] = useState('인기순');

    const h2 = e => {
        setSorttype(e.value);
    };
    const orderoption = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(filterCate(inputValue));
        }, 500);
    });
    const filterCate = (inputValue) => {
        return sort.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    useEffect(()=>{
        console.log("sorttype : " + sorttype);
    }, [sorttype])
    return(
        <>
            <Header/>
            <FilterBar onSubmit={onSubmit}/>
            
            <div className="sub_filter inner_box">
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={orderoption}
                    className="filter_menu2"
                    theme={theme => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: '#f8e8ff',
                            primary: '#BA65E1',
                        },
                    })}
                    onChange={h2}
                    placeholder="인기순"
                />
            </div>
            <PacListContainer fms={fms} fmc={fmc} fmo={fmo} ftag={ftag} sort={sorttype} />
            <Footer />
        </>
    );
};

export default FundingPage;