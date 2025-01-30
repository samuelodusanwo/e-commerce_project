import './collectionPreview.styles.scss';

const CollectionPreview = ({id, title, items}) => (
    <div className='collection-preview'>
        <h1 key={id} className='title'>{title}</h1>
        <div className="preview">
            {
                items.map((item) => (
                    <div className="name-amount">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;