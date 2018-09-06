import React, { Fragment } from "react"
import { RichText } from "prismic-reactjs"

const ManagedContent = ({ locale, docs, pageType, dataId }) => {
  if (docs !== null) {
    const docData = docs[`${locale}`].filter((d) => d.type === pageType)
    return <Fragment>{RichText.render(docData[0]["data"][`${dataId}`])}</Fragment>
  }
  return (
    <div>
      <img src="http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-01-june.gif" />
    </div>
  )
}

export default ManagedContent
