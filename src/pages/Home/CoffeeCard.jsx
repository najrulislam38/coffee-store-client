import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, available, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(
          `https://coffee-store-server-7s7v49n2k-md-najrul-islams-projects.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
            const remaining = coffees?.filter((cof) => cof._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="md:flex gap-5 p-5">
      <div className="md:w-1/3 ">
        <img src={photo} alt="" />
      </div>
      <div className="md:w-2/3 lg:flex justify-between items-center">
        <div className="">
          <h1>Name: {name} </h1>
          <p>Category: {category}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Details: {details}</p>
          <p>Available: {available} Piece</p>
        </div>
        <div className="lg:flex flex-col gap-4">
          <button className="btn btn-black"> View</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-success"> Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
