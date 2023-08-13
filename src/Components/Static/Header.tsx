import { useDispatch } from "react-redux";
import { logOut } from "../../Global/GlobalState";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-400 h-[70px] items-center flex justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="text-[30px] font-bold">Logo</div>
        <div
          className="w-[150px] h-[45px] items-center flex justify-center bg-slate-600 rounded-md text-slate-200 hover:scale-[1.05] duration-300 transition-all cursor-pointer"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default Header;
