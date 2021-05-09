// 9fbef606107a605d69c0edbcd8029e5d 
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getLabelValue } from '@tcp/core/src/utils';
import SkeletonView from '../views';

export class SkeletonViewContainer extends PureComponent {
  render() {
    return <SkeletonView {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    labels: {
      accessibility: {
        ariaNext: getLabelValue(state.Labels, 'nextIconButton', 'accessibility', 'global'),
        ariaPrevious: getLabelValue(state.Labels, 'previousButton', 'accessibility', 'global'),
      },
    },
  };
};

export default connect(mapStateToProps)(SkeletonViewContainer);
