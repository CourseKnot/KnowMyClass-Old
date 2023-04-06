import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function MainPageRate() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const buttonStyle = {
    background: isHovering
      ? 'linear-gradient(97.01deg, #7B61FF 33.24%, #FBC420 115.91%)'
      : '#000',
    borderColor: isHovering ? 'linear-gradient(97.01deg, #7B61FF 33.24%, #FBC420 115.91%)' : '#000'
  };

  return (
    <>
      <Button
        variant="dark"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}
      >
        RATE A COURSE. {isHovering ? '✍️' : '✋'}
      </Button>
    </>
  );
}

export default MainPageRate;
