import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
import axios from 'axios';
import DefaultNavbar from "../Mini_Components/User_Site/Header/Header"
import DefaultFooter from "../Mini_Components/User_Site/Footer/Footer";
import { ProductCard } from "../Mini_Components/User_Site/ProductPageComponents/ProductCard";
import { ProductGrid } from "../Mini_Components/User_Site/ProductPageComponents/ProductGrid";

function getData() {
    return axios.get(`http://localhost:3004/products`)
}

function Product() {
    // on component mount make a upi call get the data & display the data.
    // as soon as someone clicks on the card u move to a new page where u will get more data.
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(false);
    // const isAuth = true;
    //  const nav = useNavigate();


    const fetchHandleData = () => {
        setLoading(true);
        getData()
            .then((res) => { setLoading(false); setData(res.data) })
            .catch((err) => { setLoading(false); setError(true) })
    }

    React.useEffect(() => {
        fetchHandleData();
    }, [])

    // if (!isAuth) {
    //     return <Navigate to="/" />
    // }


    console.log(data);


    return (
        loading ? <h1>Ruko Jara Sabar Karo</h1> : error ? <h1>Ruka Bhai Phr ja aur check kara sb</h1> : <div>
            <div>
                {/* <button onClick={()=>nav("/")}>Go to home page</button> */}
                <DefaultNavbar />
            </div>
            <div>
                <Box bg={'#EEEEEE'}>
                    <Box
                        maxW="7xl"
                        mx="auto"
                        px={{
                            base: '4',
                            md: '8',
                            lg: '12',
                        }}
                        py={{
                            base: '6',
                            md: '8',
                            lg: '12',
                        }}
                    >
                        <ProductGrid>
                            {data.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ProductGrid>
                    </Box>
                </Box>
            </div>

        </div>
    )
}
export default Product;