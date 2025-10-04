import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg from '../../assets/food1.jpg';
import bg1 from '../../assets/bannerhome.svg';
import { Banner, ImgContainer, Logo, Container } from './styles';
import LogoPng from '../../assets/logo.png';
const background = [
  {
    img: bg,
    alt: 'bg',
  },
  {
    img: bg1,
    alt: 'bg1',
  },
];

export function HomeCarousel() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  return (
    <Container>
      <Carousel
        additionalTransfrom={0}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderDotsOutside={false}
        responsive={responsive}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable
      >
        {background.map((bg) => (
          <div>
            <Banner>
              <Logo src={LogoPng} alt="logo-burgerKing" />
              <h1>Bem-vindo(a)!</h1>
            </Banner>
            <ImgContainer src={bg.img} alt={bg.alt} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
