import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signInAPI } from "../../Api/authAPI";
import { SignIn } from "../../Global/GlobalState";
import { Link } from "react-router-dom";

const SignInScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit((data: any) => {
    const { email, password } = data;

    signInAPI({ email, password }).then((res: any) => {
      dispatch(SignIn(res));
      navigate("/");
    });
  });
  return (
    // Register Body
    <div className="bg-slate-600 w-full h-[100vh] flex items-center justify-center flex-col">
      {/* <span className="text-[white] text-[30px] mb-3">Register</span> */}
      <form
        onSubmit={onHandleSubmit}
        className="w-[400px] p-5 min-h-[200px] bg-white rounded-md flex flex-col items-center"
      >
        <div className="flex justify-between items-center w-full">
          <span className="text-[12px] flex items-center">
            New here?{" "}
            <Link to="/register">
              <span className="ml-1 text-[grey] cursor-pointer">
                {" "}
                Register{" "}
              </span>
            </Link>
          </span>
          <button
            type="submit"
            className="px-[15px] py-2 bg-slate-500 text-white"
          >
            Sign in
          </button>
        </div>

        {/* email Input Setup */}

        <div className="w-full mt-7 flex h-[40px] relative">
          <div className="absolute top-[-15px] font-semibold lowercase text-[12px]">
            email
          </div>
          <AiOutlineMail className="text-[45px] text-[silver]" />
          <input
            type="text"
            {...register("email")}
            className="flex-1 outline-none pl-5"
            placeholder="Enter your email"
          />
        </div>
        {errors.email?.message && (
          <label className="font-bold text-[8px] text-red-600">Error</label>
        )}
        {/* email Input Setup Ends */}

        {/* password Input Setup */}

        <div className="w-full mt-7 flex h-[40px] relative">
          <div className="absolute top-[-15px] font-semibold lowercase text-[12px]">
            password
          </div>
          <AiOutlineKey className="text-[45px] text-[silver]" />
          <input
            type="text"
            {...register("password")}
            className="flex-1 outline-none pl-5"
            placeholder="Enter your password"
          />
        </div>
        {errors.password?.message && (
          <label className="font-bold text-[8px] text-red-600">Error</label>
        )}
        {/* password Input Setup Ends */}
      </form>
    </div>
  );
};

export default SignInScreen;
