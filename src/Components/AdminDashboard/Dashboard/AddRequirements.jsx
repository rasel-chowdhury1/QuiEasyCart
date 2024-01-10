import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(430px, 100px)',
  },
};
const AddRequirements = ({getRequirement,handleRequirement,getSubCategories,
                        getBrands,getSizes,setIsOpen,modalIsOpen,getCategories}) => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    useEffect(() =>{
      getCategories();
      getSubCategories();
      getBrands();
      getSizes();
    },[])
 
    const onSubmit = data => {
      const category={
        category:data.category,
      }

      const subCategory={
        category:data.category,
        subCategory:data.subCategory,
      }
      const brand={
        subCategory: data.subCategory,
        brand: data.brand,
      }
      const size={
        size:data.size,
        brand: data.brand,
      }

  
      const handleCategory = () =>{
        fetch(`http://localhost:3000/addCategory/${data.category}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      })
        .then((response) => response.json())
        .then((requirementResult) => {
          getCategories();
          getSubCategories();
          getBrands();
          getSizes();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }

      const handleSubCategory = () =>{
        fetch(`http://localhost:3000/addSubCategory/${data.subCategory}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subCategory),
      })
        .then((response) => response.json())
        .then((requirementResult) => {
          getCategories();
          getSubCategories();
          getBrands();
          getSizes();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }

      const handleBrand = () =>{
        fetch(`http://localhost:3000/addBrand/${data.brand}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brand),
      })
        .then((response) => response.json())
        .then((requirementResult) => {
          getCategories();
          getSubCategories();
          getBrands();
          getSizes();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }

      const handleSize = () =>{
        fetch(`http://localhost:3000/addSize/${data.size}`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(size),
      })
        .then((response) => response.json())
        .then((requirementResult) => {
          getCategories();
          getSubCategories();
          getBrands();
          getSizes();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
        handleCategory();
        handleSubCategory();
        handleBrand();
        handleSize();
        handleRequirement(false);
        getCategories();
        getSubCategories();
        getBrands();
        getSizes();

        reset()
    };

    function closeModal() {
      setIsOpen(false);
    }
    

    
    return (
    <div>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="requirementModal w-1/3 h-52 p-3 bg-blue-400 requirementModal-1 requirement-form"
    >
    
        <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* register your input into the hook by invoking the "register" function */}
        <input className="requirement-field mt-3 ml-3 p-2" placeholder='Category'  {...register("category")} />

        {/* register your input into the hook by invoking the "register" function */}
        <input className="requirement-field mt-3 ml-3 p-2" placeholder='Sub Category'  {...register("subCategory")} /> <br />

        {/* register your input into the hook by invoking the "register" function */}
        <input className="requirement-field mt-3 ml-3 p-2" placeholder='Brand'  {...register("brand")} />
       
        {/* include validation with required or other standard HTML validation rules */}
        <input className="requirement-field ml-3 p-2" placeholder='Size' {...register("size", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
       
        <div className="flex justify-between mt-3">
        <input  className='req-subBtn btn px-6 ml-2 mt-5 cursor-pointer' type="submit" value="Submit" />
        <button className='btn px-6 mt-4 ' onClick={closeModal} >Cancel</button>
        </div>
      </form>
      
        </Modal>
      </div>
    );
};

export default AddRequirements;