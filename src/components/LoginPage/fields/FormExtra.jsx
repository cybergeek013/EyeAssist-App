const FormExtra = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-[--light_green] focus:ring-[--medium_green] border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-[--dark_green]"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a
          href="#"
          className="font-medium text-[--orange_color] hover:text-[--dark_green]"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default FormExtra;
