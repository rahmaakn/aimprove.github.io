import imgOne from '../Assets/javascript.jpg.webp';
import imgTwo from '../Assets/PHP.png';
import imgThree from '../Assets/html.png';
import imgFour from '../Assets/golang.png';

const data = {
    products: [
        {
            id: 1,
            img: imgOne,
            title: 'Pemrograman Javascript',
            desc: 'Online Course Javascript Beginner',
            price: 125,
        },

        {
            id: 2,
            img: imgTwo,
            title: 'Pemrograman PHP',
            desc: 'Online Course PHP Beginner',
            price: 150
        },
        {
            id: 3,
            img: imgThree,
            title: 'Pemrograman HTML',
            desc: 'Online Course HTML Beginner',
            price: 130,
        },
        {
            id: 4,
            img: imgFour,
            title: 'Pemrograman GoLang',
            desc: 'Online Course GoLang Beginner',
            price: 155,
        },
    ]
}

export default data;