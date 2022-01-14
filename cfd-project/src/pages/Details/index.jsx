import TabItem from "./Tabs/TabItem";
import DetailBox from './DetailBox'
import BoxImgs from "./BoxImg";
import Tabs from "./Tabs";
import { useState } from "react";
export default function DetailPage() {
    let [index, setIndex] = useState(0);
    function handleIndex(i) {
        setIndex(i);
    }
    return (
        <div className='detailPage'>
            <section className='productDetail'>
                <div className='container'>
                    <div><BoxImgs /></div>
                    <div>
                        <DetailBox />
                        <Tabs index={index} handleIndex={handleIndex}>
                            <TabItem tabName='Description'>
                                <div className='content'>
                                    <h5>Origins</h5>
                                    <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
                                    </p>
                                </div>
                                <div className='content'>
                                    <h5>How to cook</h5>
                                    <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
                                </div>
                                <div className='content'>
                                    <h5>Full of Vitamins!</h5>
                                    <table>
                                        <tr>
                                            <th>Vitamins</th>
                                            <th>Quantity</th>
                                            <th>% DV</th>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin A equiv.</td>
                                            <td>735 μg</td>
                                            <td>104%</td>
                                        </tr>
                                    </table>
                                </div>
                            </TabItem>
                            <TabItem tabName='Reviews' index='1'>Tab2</TabItem>
                            <TabItem tabName='Questions' index='2'>Tab3</TabItem>
                        </Tabs>
                    </div>

                </div>
            </section>
            <section className='relatedProduct'>
                <div className='container'>
                    {/* <ProductList title='Related products' /> */}
                </div>
            </section>
        </div>
    )
}