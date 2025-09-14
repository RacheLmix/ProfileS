import LogoLoop from "../components/LogoLoop";

const logos = [
  { src: 'https://example.com/logo1.png', alt: 'Logo 1' },
  { src: 'https://example.com/logo2.png', alt: 'Logo 2' },
  { src: 'https://example.com/logo3.png', alt: 'Logo 3' },
];

const SliderLogo = () => {
  return (
    <div className="my-10">
      <LogoLoop logos={logos} speed={100} direction="left" pauseOnHover={true} />
    </div>
  )
}

export default SliderLogo