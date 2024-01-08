import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import AddRequirements from './AddRequirements';

const img_hosting_token = "622e0d92c5c1dfc5ba8cf9cab3a6e860";
// console.log(img_hosting_token);
const AddProduct = () => {
    const [findData,setFindData] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [categories,setCategories] = useState([])
    const [requirements,setRequirements] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadedImages,setUploadedImages] = useState([])
    // console.log("first run uploaded image:",uploadedImages);
    console.log('categories',categories)
    console.log('requirements',requirements)
    console.log('FindData',findData)

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const getRequirement = () =>{
        fetch(`http://localhost:3000/allRequirements`)
        .then((data)=>data.json())
        .then(data => setRequirements(data))
      }

      //getDepartment
      const getCategories = () =>{
        fetch(`http://localhost:3000/allCategories`)
        .then((data)=>data.json())
        .then(data => setCategories(data))
      }

      useEffect(()=>{
        getCategories();
        getRequirement();
      },[])
      
      const handleSelection = (category) =>{
           console.log('passed category')
           const findCatagories = requirements.filter(requirement => requirement.category === category);
           setFindData(findCatagories)
      }


    const onSubmit = async (data) => {
        console.log(data);

          let formData = new FormData();

          for (let index = 0; index < data.image.length; index++) {
            // const image = fileList[index];
            formData.append("image", data.image[index]);

                const response = await axios.post(img_hosting_url, formData);
                console.log(response.data);

                uploadedImages.push(response.data.data.url);
                setUploadedImages(uploadedImages);
          
                // Process the response and handle it accordingly
                // if (response.data.success) {
                //   const imageUrls = response.data.data.images.map((img) => img.display_url);
                //   const { name, category, recipe, price } = data;
                //   const newItem = { name, price: parseFloat(price), category, recipe, images: imageUrls };
                //   console.log(newItem);
                // }


              formData = new FormData();
             }

             if(uploadedImages){
              const {name,category,size,price,brand,quantity,details} = data;
              const newItem = {name,category,size,price: parseFloat(price),brand,details,quantity: parseInt(quantity),images:uploadedImages}

              console.log(newItem)
              fetch("http://localhost:3000/addProduct", {
                 method: "POST",
                 headers: {
                    "content-type": 'application/json'
                 },
                 body: JSON.stringify(newItem)
              })
              
            }
          setUploadedImages([]);
      };

      const handleRequirements=(decision) => {
        setIsOpen(decision);
      }
      
    return (
        <div className='container mx-auto'>
        <div className=" bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Add New Product</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full my-4">
                <div className="label">
                    <span className="label-text font-semibold">Product name*</span>
                </div>
                <input type="text" placeholder="Product name"
                {...register("name", {required: true, maxLength: 120})}
                className="input input-bordered w-full " />
            </label>

            <div className='flex my-4'>
                <label className="form-control w-full mr-5 ">
                    <div className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </div>

                    <div className="flex">
                    <select onClick={(e) => handleSelection(e.target.value)} {...register("category", { required: true })}
                    className="select w-2/3 select-bordered rounded-l-lg">
                    {
                        categories.map(category => <option className='mt-2' key={category._id} value={category.category}>{category.category}</option>)
                    }
                    </select>

                    <button onClick={()=>handleRequirements(true)} className=" bg-blue-600 rounded-r-lg text-white py-2 -ml-2 px-2 w-1/3">Add New</button>
                    </div>
                </label>

                <label className="form-control w-full mr-5 ">
                    <div className="label">
                        <span className="label-text font-semibold">Size*</span>
                    </div>

                    <select {...register("size", { required: true })}
                    className="select select-bordered">
                    {
                        findData.map(data => <option key={data._id} value={data.size}>{data.size}</option>)
                      }
                    </select>
                </label>

            </div>

            <div className='flex my-4'>
                <label className="form-control w-full mr-5">
                <div className="label">
                    <span className="label-text font-semibold">Quantity*</span>
                </div>
                <input type="num" placeholder="Quantity"
                {...register("quantity", { required: true })}
                className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full mr-5">
                <div className="label">
                    <span className="label-text font-semibold">Price*</span>
                </div>
                <input type="num" placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full " />
                </label>

            </div>

            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text font-semibold">Brand*</span>
                </div>
                <input type="num" placeholder="Brand Name"
                {...register("brand", { required: true })}
                className="input input-bordered w-full " />
            </label>

            <label className="form-control my-4">
                <div className="label">
                    <span className="label-text">Product Details*</span>
                </div>
                <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
            </label>

            <label className="form-control w-full max-w-xs my-4">
                <div className="label">
                    <span className="label-text">Item Image</span>
                </div>
                <input multiple {...register('image', { required: 'At least one image is required.' })}
                type="file" className="file-input file-input-bordered w-full max-w-xs" />
                {errors.image && <p>{errors.image.message}</p>}
            </label>

            <input type="submit" value="Add Item" className='btn btn-sm mt-4'/>
            
        </form>

    </div>
       <AddRequirements getRequirement={getRequirement} categories={categories} getCategories={getCategories} handleRequirement={handleRequirements} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}></AddRequirements>
        </div>
    );
};

export default AddProduct;