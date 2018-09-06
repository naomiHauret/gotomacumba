import React from "react"
import Grid from "views/components/wrappers/Grid"
import Col from "views/components/wrappers/Col"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"

const baseFontSize = ds.get("type.baseFontSize")
const TeamGallery = (props) => {
  const { locale, docs, pageType } = props

  if (docs !== null) {
    const images = docs[`${locale}`].filter((d) => d.type === pageType).map((d) => ({
      mini: d.data.photo.mini,
      preview: d.data.photo.preview,
    }))
    return (
      <Grid
        colBaseWidth="0fr"
        gridRowGap={`${pxTo(ds.get("grid.gutterWidth"), baseFontSize, "rem")}`}
        col={4}
        justifyContent="center"
      >
        {images.map((image) => (
          <Col>
            <img src={image.mini.url} />
          </Col>
        ))}
      </Grid>
    )
  }
  return (
    <div>
      <img src="http://bestanimations.com/Animals/Reptiles/Dinosaurs/Dinosaur-01-june.gif" />
    </div>
  )
}

export default TeamGallery
