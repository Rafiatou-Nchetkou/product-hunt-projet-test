import BodyHead from "../Components/BodyHead";
import Header from "../Components/Header";
import Products from "../Components/ProductList";

export default function Launches(){
    return (

        <>
            <div className="body">
                <div className="adapt" >
                    <Header />
                </div>
                <BodyHead/>
                <Products/>
            </div>
        </>
    );
}