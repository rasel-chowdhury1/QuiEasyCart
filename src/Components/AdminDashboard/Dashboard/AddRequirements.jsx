import React from 'react';
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
const AddRequirements = ({getRequirement,handleRequirement,setIsOpen,modalIsOpen,getCategories,categories}) => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
//     const [departments,setDepartments] = useState([])

//     useEffect(()=>{
//       fetch(`http://localhost:5000/getDepartment`)
//       .then((data)=>data.json())
//       .then(data => setDepartments(data))
// },[])

 
    const onSubmit = data => {

      const requirementData = {
          category:data.category,
          subCategory: data.subCategory,
          brand: data.brand,
          size:data.size,
        }

      const category={
        category:data.category,
      }

      const findCategory = categories.find((category)=> category.category === data.category)


      const handleCategory = () =>{
        fetch("http://localhost:3000/addCategory", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      })
        .then((response) => response.json())
        .then((requirementResult) => {
          getCategories();
          getRequirement();
          console.log("Requirement Added");
          reset();
          handleRequirement(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      
        fetch("http://localhost:3000/addRequirement", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requirementData),
    })
      .then((response) => response.json())
      .then((requirementResult) => {
        
        if(findCategory){
        console.log("Requirement Added");
        getCategories();
        getRequirement();
        reset();
        handleRequirement(false);
        }else{
          handleCategory();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });  
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