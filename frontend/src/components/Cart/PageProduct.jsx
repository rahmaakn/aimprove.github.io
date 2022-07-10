import Cards from '../Cart/Card';
import data from './Data';
import './Pageproduct.css';

const PageProduct = () => {
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-5 text-uppercase'>Online Course</h3>
            <div className="container py-4">
                <div className="row">
                    {data.products.map((item, index) => {
                        return (
                            <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default PageProduct
