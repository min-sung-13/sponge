import React, { useEffect, useState } from 'react';
import '../../scss/filterbar.css';
import AsyncSelect from 'react-select/async';
import { sponge, cate, condi} from './data';
import {HiOutlineSearch} from 'react-icons/hi'
import {GrRefresh} from 'react-icons/gr';

const FilterBar = ( { onSubmit, history }) => {

    const [fms, setFms] = useState('');
    const [fmc, setFmc] = useState('');
    const [fmo, setFmo] = useState('');
    const [ftag, setFtag] = useState('');

    var mtag;
    const onChange = e => {
        // mtag = e.target.value;
        setFtag(e.target.value);
    }

    const filterSponge = (inputValue) => {
        return sponge.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
      
    const promiseOptions = (inputValue) =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(filterSponge(inputValue));
        }, 500);
    });

    const filterCate = (inputValue) => {
        return cate.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
      
    const promiseOptions2 = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(filterCate(inputValue));
        }, 500);
    });

    const filterCondi = (inputValue) => {
        return condi.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
      
    const promiseOptions3 = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(filterCondi(inputValue));
        }, 500);
    });

    const h1 = e => {
        console.log(e);
        setFms(e.value);
    };
    const h2 = e => {
        console.log(e);
        setFmc(e.value);
    };
    const h3 = e => {
        setFmo(e.value);
    };
    const h4 = e => {
        onSubmit({fms, fmc, fmo, ftag});
    };
    const refresh = () => {
        setFmc(null);
        setFms(null);
        setFmo(null);
        setFtag('');
        // mtag = '';
        onSubmit({fms, fmc, fmo, ftag});
    }
    useEffect(() => {
        console.log(fms)
        onSubmit({fms, fmc, fmo, ftag});
    },[fmc, fms, fmo,  mtag]);


    return(
        <div className="content_div">
            <div className="inner_box33">
            <GrRefresh className="floatLeft" size="22" style={{'marginTop' : '10px', 'marginRight' : '7px'}} onClick={refresh} />
            <AsyncSelect
                cacheOptions
                defaultOptions
                placeholder={"스폰지"}
                loadOptions={promiseOptions}
                theme={theme => ({
                    ...theme,
                    height:'300px',
                    colors: {
                      ...theme.colors,
                      primary25: '#f8e8ff',
                      primary: '#BA65E1',
                    },
                  })}
                className="filter_menu"
                onChange={h1}
            />
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={promiseOptions2}
                placeholder={"카테고리"}
                className="filter_menu"
                theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#f8e8ff',
                      primary: '#BA65E1',
                    },
                  })}
                  onChange={h2}
            />
            <AsyncSelect
                cacheOptions
                defaultOptions
                placeholder={"상태"}
                loadOptions={promiseOptions3}
                className="filter_menu"
                theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#f8e8ff',
                      primary: '#BA65E1',
                    },
                    })}
                  onChange={h3}
            />
            <HiOutlineSearch style={{float:'right', marginTop: '15px'}} size="22" onClick={h4}/>
            <input type="text" placeholder="태그를 입력해주세요" className="sisisisi" onChange={onChange} value={ftag}/>
            <div className="mo"></div>
            </div>
        </div>
    );
};

export default FilterBar;
