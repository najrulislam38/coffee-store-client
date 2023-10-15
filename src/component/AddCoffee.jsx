import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const available = form.available.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      available,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //
    fetch(
      "https://coffee-store-server-7s7v49n2k-md-najrul-islams-projects.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee making successfully.",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="bg-base-300 p-24 my-10">
      <h2 className="text-4xl text-center mb-10">Add a coffee.</h2>
      <form onSubmit={handleAddCoffee} className="space-y-8">
        {/* coffee name and available */}
        <div className="md:flex gap-6">
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Coffee Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Coffee Name"
              className="p-2 rounded w-full"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Available
            </label>
            <input
              type="text"
              name="available"
              id=""
              placeholder="Available coffee"
              className="p-2 rounded w-full"
            />
          </div>
        </div>
        {/* coffee supplier and taste */}
        <div className="md:flex gap-6">
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              id=""
              placeholder="Enter your supplier"
              className="p-2 rounded w-full"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              id=""
              placeholder="Enter coffee taste"
              className="p-2 rounded w-full"
            />
          </div>
        </div>
        {/* coffee category and details */}
        <div className="md:flex gap-6">
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              id=""
              placeholder="Enter your category"
              className="p-2 rounded w-full"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Details
            </label>
            <input
              type="text"
              name="details"
              id=""
              placeholder="Enter coffee details"
              className="p-2 rounded w-full"
            />
          </div>
        </div>
        {/* Photo url */}
        <div className="">
          <div className="">
            <label htmlFor="name" className="block font-medium text-lg mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id=""
              placeholder="Enter your Photo url"
              className="p-2 rounded w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-stone-700 text-white hover:bg-black"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
