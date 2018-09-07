import React, { Fragment, PureComponent } from "react"
import Grid from "views/components/wrappers/Grid"
import Col from "views/components/wrappers/Col"
import Container from "views/components/wrappers/Container"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"

class CarouselTeam extends PureComponent {
  state = { currentIndex: null }

  setCurrentIndex = (n) => {
    this.setState({ currentIndex: parseInt(n.value) })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setCurrentIndex({ value: e.currentTarget.getAttribute("to") })
  }
  render() {
    const { currentIndex } = this.state
    const { locale, docs, styles } = this.props
    if (docs !== null) {
      const slides = docs[`${locale}`].filter((d) => d.type === "page_t").map((d, i) => {
        const socials = d.data.socials
          .filter((social) => social.social_media_link.url !== undefined && social.social_media_link.url !== null)
          .map((s) => s.social_media_link.url)

        return {
          index: i,
          mini: d.data.photo.mini,
          preview: d.data.photo.preview,
          img: d.data.photo.url,
          name: d.data.name,
          pseudo: d.data.pseudo,
          description: d.data.description,
          quote: d.data.quote,
          socials,
        }
      })
      if (currentIndex) {
        const nextIndex = currentIndex + 1 <= slides.length ? currentIndex + 1 : 0
        const previousIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1
        const currentSlide = slides.filter((slide) => slide.index === currentIndex)[0]
        const previousSlide = slides.filter((slide) => slide.index === previousIndex)[0]
        const nextSlide = slides.filter((slide) => slide.index === nextIndex)[0]

        return (
          <Container contained={true} position="relative" marginTop={pxTo(75, baseFontSize, "rem")}>
            <div className={styles.dataWrapper}>
              <img src={currentSlide.img} />
              <div>
                <h2>{currentSlide.name}</h2>
                <small>{currentSlide.pseudo}</small>
                <p>{currentSlide.description}</p>
                <i>{currentSlide.quote}</i>
              </div>
            </div>
            <button className={styles.prevButton} to={previousSlide.index} onClick={this.handleClick}>
              <img src={previousSlide.mini.url} />
            </button>
            <button className={styles.nextButton} to={nextSlide.index} onClick={this.handleClick}>
              <img src={nextSlide.mini.url} />
            </button>
          </Container>
        )
      }
      return (
        <Grid
          colBaseWidth="0fr"
          gridRowGap={`${pxTo(ds.get("grid.gutterWidth"), baseFontSize, "rem")}`}
          col={4}
          justifyContent="center"
          marginTop={pxTo(75, baseFontSize, "rem")}
        >
          {slides.map((image) => (
            <Col>
              <button to={image.index} onClick={this.handleClick}>
                <img src={image.mini.url} />
              </button>
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
}

const baseFontSize = ds.get("type.baseFontSize")
const rules = {
  dataWrapper: () => ({
    display: "flex",
    alignItems: "center",
    "> div": {
      marginLeft: pxTo(45, baseFontSize, "rem"),
    },
  }),
  prevButton: () => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: "translateY(50%) rotate(-15deg)",
  }),
  nextButton: () => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: "translateY(50%) rotate(15deg)",
  }),
}

export default connect(rules)(CarouselTeam)
