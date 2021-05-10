import React from 'react';
import '../../scss/style_fundding.css';

const SearchNoticeForm = () => {
    return(
        <>
        <div className="inner_box">
            <div class="search inner_box">
                <form method="post" id="news-board-search">
                    <div class="filter-container">
                        <select id="searchSelectInBoard" class="filter" name="">
                            <option value="tc">제목+내용</option>
                            <option value="t">제목</option>
                            <option value="c">내용</option>
                        </select>
                    </div>
                    <div class="field">
                        <label class="text-hidden" for="">검색창</label>
                        <input id="searchTextInBoard" name="searchTextInBoard" class="search-form" type="text" value=""/>
                        <button class="btn-search dense" type="submit">검색</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default SearchNoticeForm;
