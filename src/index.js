import JrdCarousel from 'jrd-carousel'
import { getImages } from './articlePage.js'
import './css/style.css'

(async function loadCarousel() {
const { images } = await getImages()

const options = {
  interval: 1500,
  autoplay: false,
  imagesToPreload: 2,
  images: images
}

JrdCarousel('carousel', options)
})()


