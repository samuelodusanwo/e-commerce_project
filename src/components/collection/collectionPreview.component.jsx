import React from 'react';
import CollectionItem from './collection-item/collection-item.component';
import './collectionPreview.styles.scss';

const CollectionPreview = ({id, title, items}) => (
    <div className='collection-preview'>
        <h1 key={id} className='title'>{title}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;