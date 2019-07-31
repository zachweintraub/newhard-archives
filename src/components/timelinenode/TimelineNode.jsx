import React from 'react';
import './TimelineNode.css'
import PreviewData from '../previewdata/PreviewData';

const TimelineNode = (props) => {
  return(
    //selected node renders as thumbnail with preview data window
    props.isSelected ?
    <div className='selectedNode'>
      <img 
        className='thumb'
        src={props.thisFilm.thumbs.node} alt="thumbnail"
      />
      {
        props.position % 2 === 0 &&
        <PreviewData
          thisFilm={props.thisFilm}
          className='left'  
        />
      }
      {
        props.position % 2 === 1 &&
        <PreviewData
          thisFilm={props.thisFilm}
          className='right'  
        />
      }
    </div> :
    //unselected node renders as small white circle
    <div
      className='unselectedNode'
      onMouseEnter={props.onSelectNode}
      onClick={props.onSelectNode}
    ></div>
  );
}

export default TimelineNode;