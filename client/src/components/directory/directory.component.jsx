import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import TeamCard from "../teamcard/teamcard.component"

import './directory.styles.scss';

export const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
     {sections.map((section) => (
       <TeamCard key={section.id} section={section}/>
     ))} 
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
