import React from 'react';
import Button from 'react-bootstrap/Button'

const Footer = (props) => {
    const {desc} = props;
    return <footer className='bg-dark text-white text-center'>
            {desc}
            <br/>
            <Button href='https://www.sport.es/bicio/tipos-de-bicicletas-y-como-elegir-la-mejor-para-ti/'>Más información</Button>
        </footer>
};

export default Footer;