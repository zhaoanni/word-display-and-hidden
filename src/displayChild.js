import React, { useState, useRef, useEffect } from 'react';
 export function DisplayChild (props){
    return (
      <div className='displayZone'>
        {props.words}
      </div>
    )
  }
