import { useForm } from "react-hook-form";

function FormDemo2() {
  let { register, handleSubmit } = useForm();

  //form submission
  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h1 className="display-1 text-center text-info">Form Demo</h1>

      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          {...register("username")}
        />
        <input
          type="password"
          className="form-control mb-3"
          {...register("password")}
        />
        <select id="" className="form-select mb-3" {...register("skill")}>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="react">ReactJS</option>
        </select>

        <div>
          {/* male */}
          <div className="form-check">
            <input type="radio"  id="m" className="form-check-input" {...register('gender')} value='male' />
            <label htmlFor="m" className="form-check-label">Male</label>
          </div>
          {/* female */}
          <div className="form-check">
            <input type="radio"  id="f" className="form-check-input" {...register('gender')} value='female' />
            <label htmlFor="f" className="form-check-label">Female</label>
          </div>
        </div>

        <textarea
          rows="5"
          className="form-control mb-3"
          {...register("feedback")}
        ></textarea>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormDemo2;
