import React from "react"
import { connect } from "react-fela"

const TeamGallery = (props) => {
  const { locale, docs, pageType, styles } = props

  if (docs !== null) {
    const images = docs[`${locale}`].filter((d) => d.type === pageType).map((d) => ({
      mini: d.data.photo.mini,
      preview: d.data.photo.preview,
    }))
    return (
      <div className={styles.wrapper}>
        {images.map((image) => (
          <div dimensions={image.mini.dimensions}>
            <img src={image.mini.url} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      <img src="http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-01-june.gif" />
    </div>
  )
}

const rules = {
  wrapper: () => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }),
}
export default connect(rules)(TeamGallery)
