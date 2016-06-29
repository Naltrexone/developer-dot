import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

const handleToggleVisibility = (e, propertyName, endpointId) => {
    store.dispatch({
        type: actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY,
        postBodyParamName: propertyName,
        endpointId: endpointId
    });
};

/*
 * Defines a wrapper to nest object properties or
 * array items in a PostBodyå
 * */
const PostBodySectionHeader = ({endpointId, propertyName, children}) => {
    const namePath = propertyName.split(';');
    const sectionName = namePath[namePath.length - 1];

    return (
        <tr>
            <td colSpan='2'>
                <table style={{width: '100%'}}>
                    <tbody>
                        <tr>
                            <td
                                colSpan='2'
                                onClick={
                                    (e) => {
                                        handleToggleVisibility(e, propertyName, endpointId);
                                    }
                                }
                                style={{cursor: 'pointer'}}
                            >
                                <label style={{cursor: 'pointer'}}>{sectionName}</label>
                            </td>
                        </tr>
                        {children}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

PostBodySectionHeader.displayName = 'Post Body Array';

PostBodySectionHeader.propTypes = {
    //children: React.PropTypes.element.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    propertyName: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodySectionHeader;
