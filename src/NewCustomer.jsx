import { useState } from "react"
import { useDispatch } from "react-redux"
import { createCustomer } from "./redux/slices/customer"
import { useNavigate } from "react-router-dom"

const NewCustomer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        customerName: '',
        product: '',
        price: '',
        discount: ''
    })

    const addNewCustomer = (e)=>{
        e.preventDefault()
        dispatch(createCustomer(form))
        navigate("/")
    }

const handleChange = (e)=>{
    const input = e.target
    const name = input.name
    const value = input.value
    setForm({
        ...form,
        [name]: value
    })
}
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-6/12 bg-white mx-auto p-8 shadow-lg space-y-8">
        <h1 className="text-5xl font-bold text-center">New Customers</h1>
        <form className="space-y-6" onSubmit={addNewCustomer}>
            <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Customer`s Name</label>
                <input 
                    name="customerName"
                    required
                    className="border border-gray-300 rounded p-3"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Product</label>
                <input 
                    name="product"
                    required
                    className="border border-gray-300 rounded p-3"
                    placeholder="double bed"
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Price</label>
                <input 
                    type="number"
                    name="price"
                    required
                    className="border border-gray-300 rounded p-3"
                    placeholder="25000"
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Discount</label>
                <input 
                    type="number"
                    name="discount"
                    required
                    className="border border-gray-300 rounded p-3"
                    placeholder="5"
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-3">
                <button className="py-3 rounded bg-indigo-600 text-white font-medium">Submit</button>
            </div>
        </form>
      </div>
    </div>  
  )
}

export default NewCustomer
