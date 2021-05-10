import React , {useEffect, useCallback} from 'react';
import Editor from '../../components/common/write/Editor';
import {useSelector, useDispatch} from 'react-redux';
import {changeField, initialize} from '../../modules/write';


const EditorContainer = () => {
    const dispatch = useDispatch();
    const {n_title, n_cateCode, n_content} = useSelector(({write}) => ({
        n_title: write.n_title,
        n_cateCode :write.n_cateCode,
        n_content: write.n_content
    }));
  
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);
    return <Editor onChangeField={onChangeField} n_title={n_title} n_cateCode={n_cateCode} n_content={n_content}/>;
    
};

export default EditorContainer;