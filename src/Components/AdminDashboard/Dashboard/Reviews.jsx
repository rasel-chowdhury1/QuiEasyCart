import React from 'react';

// const Reviews = () => {
//     return (
//         <div>
//           <div className="overflow-x-auto">
//   <ul className="steps">
//     <li className="step">start</li>
//     <li className="step step-secondary">2</li>
//     <li className="step step-secondary">3</li>
//     <li className="step step-secondary">4</li>
//     <li className="step">5</li>
//     <li className="step step-accent">6</li>
//     <li className="step step-accent">7</li>
//     <li className="step">8</li>
//     <li className="step step-error">9</li>
//     <li className="step step-error">10</li>
//     <li className="step">11</li>
//     <li className="step">12</li>
//     <li className="step step-warning">13</li>
//     <li className="step step-warning">14</li>
//     <li className="step">15</li>
//     <li className="step step-neutral">16</li>
//     <li className="step step-neutral">17</li>
//     <li className="step step-neutral">18</li>
//     <li className="step step-neutral">19</li>
//     <li className="step step-neutral">20</li>
//     <li className="step step-neutral">21</li>
//     <li className="step step-neutral">22</li>
//     <li className="step step-neutral">23</li>
//     <li className="step step-neutral">end</li>
//   </ul>
// </div>
//         </div>
//     );
// };


const Reviews = () => {

    const menuItems = [
        { id: 1, label: 'Dashboard', link: '/dashboard' },
        { id: 2, label: 'Stats', link: '/stats' },
        { id: 3, label: 'User', link: '/user' },
        { id: 4, label: 'Product', link: '/product' },
        { id: 5, label: 'Orders', link: '/orders' },
        { id: 6, label: 'Reviews', link: '/reviews' },
        { id: 7, label: 'Payments', link: '/payments' },
        { id: 8, label: 'Hot Offers', link: '/hotoffers' },
        { id: 9, label: 'Appearance', link: '/appearance' },
        { id: 10, label: 'Settings', link: '/settings' },
        { id: 11, label: 'Help', link: '/help' },
        // Add more menu items as needed
    ];
    return (
        <div className="admin-dashboard flex">
            {/* Sidebar */}
            <div className="sidebar  text-white mx-2 bg-black opacity-80 text-8xl w-60 min-h-screen rounded-md">
                <ul className="menu ">
                    <a href="/"> <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className=" w-20 h-20 rounded-lg shadow-2xl p-2" /></a>
                    {menuItems.map((item) => (
                        <li className='text-2xl btn btn-ghost ' key={item.id}>
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="main-content  min-h-screen bg-black  text-black rounded-md">
            <div className="overflow-x-auto">
  <ul className="steps">
    <li className="step">start</li>
    <li className="step step-secondary">2</li>
    <li className="step step-secondary">3</li>
    <li className="step step-secondary">4</li>
    <li className="step">5</li>
    <li className="step step-accent">6</li>
    <li className="step step-accent">7</li>
    <li className="step">8</li>
    <li className="step step-error">9</li>
    <li className="step step-error">10</li>
    <li className="step">11</li>
    <li className="step">12</li>
    <li className="step step-warning">13</li>
    <li className="step step-warning">14</li>
    <li className="step">15</li>
    <li className="step step-neutral">16</li>
    <li className="step step-neutral">17</li>
    <li className="step step-neutral">18</li>
    <li className="step step-neutral">19</li>
    <li className="step step-neutral">20</li>
    <li className="step step-neutral">21</li>
    <li className="step step-neutral">22</li>
    <li className="step step-neutral">23</li>
    <li className="step step-neutral">end</li>
  </ul>
</div>
            </div>
        </div>




    );
};
export default Reviews;