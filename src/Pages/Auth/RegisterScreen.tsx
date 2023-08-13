import pix from "../../assets/project ideas to build.jpg";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../Api/authAPI";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(pix);
  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(saveImage);
  };

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit((data: any) => {
    const { name, email, password } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", image);

    registerAPI(formData).then(() => {
      navigate("/sign-in");
    });
  });
  return (
    // Register Body
    <div className="bg-slate-600 w-full h-[100vh] flex items-center justify-center flex-col">
      {/* <span className="text-[white] text-[30px] mb-3">Register</span> */}
      <form
        onSubmit={onHandleSubmit}
        className="w-[400px] p-5 min-h-[400px] bg-white rounded-md flex flex-col items-center"
      >
        <div className="flex justify-between items-center w-full">
          <span className="text-[12px] flex items-center">
            Registered?{" "}
            <span className="ml-1 text-[grey] cursor-pointer"> Sign in </span>
          </span>
          <button
            type="submit"
            className="px-[15px] py-2 bg-slate-500 text-white"
          >
            Register
          </button>
        </div>
        {/* Avatar Setup Starts */}
        <img
          className="w-[150px] h-[150px] border-[2px] border-[white] rounded-[50%] object-cover"
          src={avatar}
        />
        <label
          htmlFor="id"
          className="py-4 px-10 bg-slate-800 text-white mt-3 hover:translate-y-2 uppercase cursor-pointer duration-300 transition-all"
        >
          upload image
        </label>
        <input
          type="file"
          className="hidden"
          id="id"
          accept="image/png, image/jpeg, image/jpg"
          placeholder="image"
          onChange={onHandleImage}
        />
        {/* Avatar Setup Ends */}

        {/* User name Input Setup */}

        <div className="w-full mt-7 flex h-[40px] relative">
          <div className="absolute top-[-15px] font-semibold lowercase text-[12px]">
            name
          </div>
          <BsFillPersonFill className="text-[45px] text-[silver]" />
          <input
            type="text"
            className="flex-1 outline-none pl-5"
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>
        {errors.name?.message && (
          <label className="font-bold text-[8px] text-red-600">
            User name Error
          </label>
        )}

        {/* User name Input Setup Ends */}

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

        {/* confirm password Input Setup */}

        <div className="w-full mt-7 flex h-[40px] relative">
          <div className="absolute top-[-15px] font-semibold lowercase text-[12px]">
            retype password
          </div>
          <AiOutlineKey className="text-[45px] text-[silver]" />
          <input
            type="text"
            {...register("confirm")}
            className="flex-1 outline-none pl-5"
            placeholder="Re-enter your password"
          />
        </div>
        {errors.confirm?.message && (
          <label className="font-bold text-[8px] text-red-600">Error</label>
        )}
        {/* confirm Input Setup Ends */}
      </form>
    </div>
  );
};

export default RegisterScreen;
