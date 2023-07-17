import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import FormMakanan from "../Form/FormMakanan";

const listmakanan = [
    {
        NamaMakanan: "Nasi Padang",
        Harga: "20.000"
    },
    {
        NamaMakanan: "sate",
        Harga: "20.000"
    },
    {
        NamaMakanan: "soto",
        Harga: "10.000"
    },
    {
        NamaMakanan: "uduk",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Nasi Kuning",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Ayam Geprek",
        Harga: "15.000"
    },
    {
        NamaMakanan: "pecel lele",
        Harga: "15.000"
    },
    {
        NamaMakanan: "pecel",
        Harga: "10.000"
    },
    {
        NamaMakanan: "mie ayam",
        Harga: "10.000"
    }

];
class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan Favourite</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data,index)=>{
                                return(
                                    <td key={index}>
                                        <img
                                        src={data.img}
                                        alt="Product Makanan"
                                        width="150"
                                        height="100"
                                        />
                                        <center>
                                            <p>{data.NamaMakanan}</p>
                                            <p>harga : Rp. {data.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>list makanan</h4>
                {listmakanan.map((data,index)=>{
                    return(
                        <div key={index}>
                            <p>
                                {data.NamaMakanan} | Harga Rp. {data.Harga}
                            </p>
                        </div>
                    )
                })}
                <FormMakanan/>
                
            </div>
        )
    }
}
export default MenuMakanan;