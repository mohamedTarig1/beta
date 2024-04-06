import React, { ReactNode } from 'react'
import Pargraph from './pargaph'


const Layout = (props: {
  definition: ReactNode,
  purpose: ReactNode,
  procedure: ReactNode,
  criteria: ReactNode,
 }) => {
  return (
    <div className='flex flex-col items-start gap-4'>
      <Pargraph title='A. Definition' desc={props.definition}/>
      <Pargraph title='B. Purpose' desc={props.purpose}/>
      <Pargraph title='C. Procedure' desc={props.procedure}/>
      <Pargraph title='D. Criteria' desc={props.criteria}/>
    </div>
  )
}

export default Layout