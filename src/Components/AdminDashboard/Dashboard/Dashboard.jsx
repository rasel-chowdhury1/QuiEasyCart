import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
      const [itemsPerPage, setItemPerPage] = useState(8);
      const [totalProducts, setTotalProducts] = useState(0)
    //   const [totalProducts] = useTotalProuduct()

        const [totalProuduct, setTotalProduct] = useState(0)
  
      //const itemsPerPage = 10; //TODO: make it dynamic
      const totalPages = Math.ceil(totalProuduct/itemsPerPage)
    
      
      const pageNumbers = [];
      for(let i=1; i<=totalPages; i++){git 
          pageNumbers.push(i);
      }

      useEffect( ()=>{
        async function fetchData() {
            const response = await fetch(`https://quieasycarts.onrender.com/adminproducts?page=${currentPage}&limit=${itemsPerPage}`)
  
            const data = await response.json();
            // console.log(data)
            // console.log(data.productlen)
            setProducts(data.result);
            setTotalProducts(data.productlen)
            console.log(totalProducts)
        }
        fetchData();
    },[currentPage,totalPages])
    // console.log(products)
    // console.log("current page - ",currentPage);
    // console.log("total page - ",totalPages);

    const [users, setUsers] = useState([])
    const getUser = () => {
        fetch("https://quieasycarts.onrender.com/allUsers")
            .then(res => res.json())
            .then(data => setUsers(data))
    }
    console.log(users)



useEffect(() => {
    getUser()
}, []);

    return (
        <div>

            {/* Dashboard Top Card */}
            <div>
                <div className='flex flex-col md:flex-row  lg:flex-row gap-4 shadow-xl rounded-md '>

                    <div className="card md:basis-1/4 bg-secondary shadow-xl image-full m-4 ">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total User</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">{users.length + 2543}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <Link to="/admin/admin/user" className="btn btn-primary ">View Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-secondary shadow-xl image-full m-4 ">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Product</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">{totalProducts}</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <Link to="/admin/admin/product" className="btn btn-primary ">View Details </Link>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-info shadow-xl image-full m-4">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Order</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">3165000</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <button className="btn btn-primary ">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-primary shadow-xl image-full m-4">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Payment</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">$6500060</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <button className="btn btn-primary ">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card md:basis-1/4 bg-neutral shadow-xl image-full m-4">
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className=" text-3xl text-center">Total Revenue</h2>
                            <hr className='' />
                            <p className=" text-5xl text-center">$128M</p>
                            <div className="card-actions justify-center py-4 m-2">
                                <button className="btn btn-primary ">View Details</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            {/* slider section  */}
            <div className=''>
                {/* <div className="carousel w-60% m-4 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className='flex flex-col md:flex-row lg:flex-row gap-4'>


                <div className='flex-grow'>
                    <h2 className="overflow-x-auto m-4 shadow-xl text-3xl p-2 text-center">Recent Orders</h2>
                    <div className="overflow-x-auto m-4 shadow-xl">
                        <table className="table table-xs">
                            <thead>
                                <tr className='bg-gradient-to-r from-cyan-500 to-blue-500'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>company</th>
                                    <th>location</th>
                                    <th>Last Login</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Zemlak, Daniel and Leannon</td>
                                    <td>United States</td>
                                    <td>12/5/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Carroll Group</td>
                                    <td>China</td>
                                    <td>8/15/2020</td>
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Marjy Ferencz</td>
                                    <td>Office Assistant I</td>
                                    <td>Rowe-Schoen</td>
                                    <td>Russia</td>
                                    <td>3/25/2021</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Yancy Tear</td>
                                    <td>Community Outreach Specialist</td>
                                    <td>Wyman-Ledner</td>
                                    <td>Brazil</td>
                                    <td>5/22/2020</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Irma Vasilik</td>
                                    <td>Editor</td>
                                    <td>Wiza, Bins and Emard</td>
                                    <td>Venezuela</td>
                                    <td>12/8/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>Meghann Durtnal</td>
                                    <td>Staff Accountant IV</td>
                                    <td>Schuster-Schimmel</td>
                                    <td>Philippines</td>
                                    <td>2/17/2021</td>
                                    <td>Yellow</td>
                                </tr>
                                <tr>
                                    <th>8</th>
                                    <td>Sammy Seston</td>
                                    <td>Accountant I</td>
                                    <td>OHara, Welch and Keebler</td>
                                    <td>Indonesia</td>
                                    <td>5/23/2020</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>9</th>
                                    <td>Lesya Tinham</td>
                                    <td>Safety Technician IV</td>
                                    <td>Turner-Kuhlman</td>
                                    <td>Philippines</td>
                                    <td>2/21/2021</td>
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>10</th>
                                    <td>Zaneta Tewkesbury</td>
                                    <td>VP Marketing</td>
                                    <td>Sauer LLC</td>
                                    <td>Chad</td>
                                    <td>6/23/2020</td>
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <th>11</th>
                                    <td>Andy Tipple</td>
                                    <td>Librarian</td>
                                    <td>Hilpert Group</td>
                                    <td>Poland</td>
                                    <td>7/9/2020</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>12</th>
                                    <td>Sophi Biles</td>
                                    <td>Recruiting Manager</td>
                                    <td>Gutmann Inc</td>
                                    <td>Indonesia</td>
                                    <td>2/12/2021</td>
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>13</th>
                                    <td>Florida Garces</td>
                                    <td>Web Developer IV</td>
                                    <td>Gaylord, Pacocha and Baumbach</td>
                                    <td>Poland</td>
                                    <td>5/31/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>14</th>
                                    <td>Maribeth Popping</td>
                                    <td>Analyst Programmer</td>
                                    <td>Deckow-Pouros</td>
                                    <td>Portugal</td>
                                    <td>4/27/2021</td>
                                    <td>Aquamarine</td>
                                </tr>
                                <tr>
                                    <th>15</th>
                                    <td>Moritz Dryburgh</td>
                                    <td>Dental Hygienist</td>
                                    <td>Schiller, Cole and Hackett</td>
                                    <td>Sri Lanka</td>
                                    <td>8/8/2020</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>16</th>
                                    <td>Reid Semiras</td>
                                    <td>Teacher</td>
                                    <td>Sporer, Sipes and Rogahn</td>
                                    <td>Poland</td>
                                    <td>7/30/2020</td>
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <th>17</th>
                                    <td>Alec Lethby</td>
                                    <td>Teacher</td>
                                    <td>Reichel, Glover and Hamill</td>
                                    <td>China</td>
                                    <td>2/28/2021</td>
                                    <td>Khaki</td>
                                </tr>
                                <tr>
                                    <th>18</th>
                                    <td>Aland Wilber</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Kshlerin, Rogahn and Swaniawski</td>
                                    <td>Czech Republic</td>
                                    <td>9/29/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>19</th>
                                    <td>Teddie Duerden</td>
                                    <td>Staff Accountant III</td>
                                    <td>Pouros, Ullrich and Windler</td>
                                    <td>France</td>
                                    <td>10/27/2020</td>
                                    <td>Aquamarine</td>
                                </tr>
                                <tr>
                                    <th>20</th>
                                    <td>Lorelei Blackstone</td>
                                    <td>Data Coordiator</td>
                                    <td>Witting, Kutch and Greenfelder</td>
                                    <td>Kazakhstan</td>
                                    <td>6/3/2020</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>company</th>
                                    <th>location</th>
                                    <th>Last Login</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>


                <div className='flex-grow'>
                    <h2 className="overflow-x-auto m-4 shadow-xl text-3xl p-2 text-center">New User</h2>
                    <div className="overflow-x-auto shadow-xl rounded w-full m-4">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-black text-white text-2xl'>
                                <tr>

                                    <th>Name</th>
                                    <th>Addess</th>
                                    <th>Type</th>
                                    <th> <button className='btn-ghost'>  </button> <button className='btn btn-outline btn-accent'> Add New User</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com//tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Admin</td>
                                    <th>
                                        <button className="btn btn-accent  p-2 m-2 ">details</button>
                                        <button className="btn btn-neutral px-4  py-2">Edit</button>
                                        <button className="btn btn-secondary  p2 m-2">Delete</button>
                                    </th>
                                </tr>
                                {/* row 2 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com//tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Brice Swyre</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Carroll Group
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>User</td>
                                    <th>
                                        <button className="btn btn-accent  p-2 m-2 ">details</button>
                                        <button className="btn btn-neutral px-4  py-2">Edit</button>
                                        <button className="btn btn-secondary  p2 m-2">Delete</button>
                                    </th>
                                </tr>
                                {/* row 3 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com//tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>User</td>
                                    <th>
                                        <button className="btn btn-accent  p-2 m-2 ">details</button>
                                        <button className="btn btn-neutral px-4  py-2">Edit</button>
                                        <button className="btn btn-secondary  p2 m-2">Delete</button>
                                    </th>
                                </tr>
                                {/* row 4 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com//tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <td>Admin</td>
                                    <th>
                                        <button className="btn btn-accent  p-2 m-2 ">details</button>
                                        <button className="btn btn-neutral px-4  py-2">Edit</button>
                                        <button className="btn btn-secondary  p2 m-2">Delete</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com//tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Admin</td>
                                    <th>
                                        <button className="btn btn-accent  p-2 m-2 ">details</button>
                                        <button className="btn btn-neutral px-4  py-2">Edit</button>
                                        <button className="btn btn-secondary  p2 m-2">Delete</button>
                                    </th>
                                </tr>
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr >
                                    <th></th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Dashboard;