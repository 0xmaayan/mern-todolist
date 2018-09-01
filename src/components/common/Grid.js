import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = props => {
  const { fluid, className, children } = props;
  const containerClasses = classNames(
    fluid ? 'container-fluid' : 'container',
    className
  );
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children : PropTypes.node,
  fluid    : PropTypes.bool,
  className: PropTypes.string
};

const Row = props => {
  const { className, children } = props;
  const rowClasses = classNames(
    'row',
    className
  );

  return (
    <div className={rowClasses}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children : PropTypes.node,
  className: PropTypes.string
};

const Col = props => {
  const { children, className, span, xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset } = props;
  const _isVisibleHidden = (str) => {
    return str === 'hidden' || str === 'visible';
  };
  const _isLegalCol = (numStr) => {
    if (numStr && !_isVisibleHidden(numStr)) {
      const num = Number(numStr);
      return Number.isInteger(num) && num > 0 && num <= 12;
    }
    return false;
  };
  const columnClasses = classNames(
    className,
    {[`col-xs-${span}`]: _isLegalCol(span)},
    {[`col-xs-${xs}`]: _isLegalCol(xs)},
    {[`col-sm-${sm}`]: _isLegalCol(sm)},
    {[`col-md-${md}`]: _isLegalCol(md)},
    {[`col-lg-${lg}`]: _isLegalCol(lg)},
    {[`${xs}-xs`]: _isVisibleHidden(xs)},
    {[`${sm}-sm`]: _isVisibleHidden(sm)},
    {[`${md}-md`]: _isVisibleHidden(md)},
    {[`${lg}-lg`]: _isVisibleHidden(lg)},
    {[`col-xs-offset-${xsOffset}`]: _isLegalCol(xsOffset)},
    {[`col-sm-offset-${smOffset}`]: _isLegalCol(smOffset)},
    {[`col-md-offset-${mdOffset}`]: _isLegalCol(mdOffset)},
    {[`col-lg-offset-${lgOffset}`]: _isLegalCol(lgOffset)}
  );
  return (
    <div className={columnClasses}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children : PropTypes.node,
  className: PropTypes.string,
  span     : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg       : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xsOffset : PropTypes.number,
  smOffset : PropTypes.number,
  mdOffset : PropTypes.number,
  lgOffset : PropTypes.number
};

export {Container, Row, Col};