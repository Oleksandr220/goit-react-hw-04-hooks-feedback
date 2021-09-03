import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  title: ' ',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
