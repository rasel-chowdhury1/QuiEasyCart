import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import AddRequirements from './AddRequirements';

const img_hosting_token = "622e0d92c5c1dfc5ba8cf9cab3a6e860";
// console.log(img_hosting_token);
const AddProduct = () => {
    const [findSubCatagories,setFindSubCatagories] = useState([]);
    const [findBrands,setFindBrands] = useState([]);
    const [findSizes,setFindSizes] = useState([]);
    const [subCategories,setSubCategories] = useState([]);
    const [brands,setBrands] = useState([]);
    const [sizes,setSizes] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [categories,setCategories] = useState([])
    const [requirements,setRequirements] = useState([])
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const [uploadedImages,setUploadedImages] = useState([])
    // console.log("first run uploaded image:",uploadedImages);
    console.log('categories',categories)
    // console.log('requirements',requirements)
    // console.log('FindData',findData)
    console.log('subCategories',subCategories)
    console.log('brand',brands)
    console.log('size',sizes)

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const getRequirement = () =>{
        fetch(`http://localhost:3000/allRequirements`)
        .then((data)=>data.json())
        .then(data => setRequirements(data))
      }

      //getCategories
      const getCategories = () =>{
        fetch(`http://localhost:3000/allCategories`)
        .then((data)=>data.json())
        .then(data => setCategories(data))
      }

       //getSubCategories
       const getSubCategories = () =>{
        fetch(`http://localhost:3000/allSubCategories`)
        .then((data)=>data.json())
        .then(data => setSubCategories(data))
      }

       //getBrand
       const getBrands = () =>{
        fetch(`http://localhost:3000/allBrands`)
        .then((data)=>data.json())
        .then(data => setBrands(data))
      }

       //getSizes
       const getSizes = () =>{
        fetch(`http://localhost:3000/allSizes`)
        .then((data)=>data.json())
        .then(data => setSizes(data))
      }

      useEffect(()=>{
        getCategories();
        getRequirement();
        getSubCategories();
        getBrands();
        getSizes();
      },[])
      
      const handleSelectionSubCategory = (category) =>{
           console.log('passed category')
           const findSubCatagories = subCategories.filter(subCategory => subCategory.category === category);
           setFindSubCatagories(findSubCatagories)
      }



    const handleBrand = (subCategory) => {
        const findBrands = brands.filter((data) => data.subCategory === subCategory)
        setFindBrands(findBrands)
  }

  const handleSizes = (brand) => {
    const findSizes = sizes.filter((data) => data.brand === brand)
    setFindSizes(findSizes)
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
              const {name,category,size,price,brand,quantity,details, subCategory} = data;
              const newItem = {name,category,subCategory,size,price: parseFloat(price),brand,details,quantity: parseInt(quantity),images:uploadedImages}

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
          reset();
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
                    <select onClick={(e) => handleSelectionSubCategory(e.target.value)} {...register("category", { required: true })}
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
                        <span className="label-text font-semibold">Sub Category*</span>
                    </div>

                    <select onClick={(e) => handleBrand(e.target.value)}  {...register("subCategory", { required: true })}
                    className="select select-bordered">
                    {
                        findSubCatagories.map(data => <option key={data._id} value={data.subCategory}>{data.subCategory}</option>)
                    }
                    </select>
               </label>

               

            </div>

            <div className='flex my-4'>

            <label className="form-control w-full mr-5">
                <div className="label">
                    <span className="label-text font-semibold">Brand*</span>
                </div>
               
                <select onClick={(e) => handleSizes(e.target.value)}  {...register("brand", { required: true })}
                className="select select-bordered">
                {
                    findBrands.map(data => <option key={data._id} value={data.brand}>{data.brand}</option>)
                }
                </select>
             </label>

            <label className="form-control w-full mr-5 ">
            <div className="label">
                <span className="label-text font-semibold">Size*</span>
            </div>

            <select {...register("size", { required: true })}
            className="select select-bordered">
            {
                findSizes.map(data => <option key={data._id} value={data.size}>{data.size}</option>)
              }
            </select>
        </label>
            </div>

         <div className="flex my-4">
            <label className="form-control w-full mr-5">
            <div className="label">
                <span className="label-text font-semibold">Price*</span>
            </div>
            <input type="num" placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full " />
        </label>


        <label className="form-control w-full mr-5">
        <div className="label">
            <span className="label-text font-semibold">Quantity*</span>
        </div>
        <input type="num" placeholder="Quantity"
        {...register("quantity", { required: true })}
        className="input input-bordered w-full " />
        </label>

         </div>

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
       <AddRequirements
        getRequirement={getRequirement} categories={categories} getCategories={getCategories}
        getSubCategories={getSubCategories} getBrands={getBrands} getSizes={getSizes} subCategories={subCategories} 
        handleRequirement={handleRequirements} setIsOpen={setIsOpen} brands={brands} sizes={sizes}
        modalIsOpen={modalIsOpen}></AddRequirements>
        </div>
    );
};

export default AddProduct;