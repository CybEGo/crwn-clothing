import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections })=> {
  return (
    <div className='collections-overviews'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>    
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)