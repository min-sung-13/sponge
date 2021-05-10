import React from 'react';


const Story = ({pac}) =>{
    return(
        <div className="story_zone" dangerouslySetInnerHTML={ {__html: pac.p_story} }></div>
    )
};

export default Story;