import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const Masuk = () => {
  const [infoUser, setInfoUser] = useState(() => {
    const saved = localStorage.getItem("infoUser");
    return saved ? JSON.parse(saved) : null;
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleMasukClick = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    if (infoUser.username !== username || infoUser.password !== password) {
      setUsername("");
      setPassword("");
      setError("Username Atau Password Salah!")
      return;
    }

    navigate("/beranda")
  };

  return (
    <div className="forbglayar bg-[url(/auth/daftar.jpg)] flex justify-center pt-[1px] relative md:items-center h-screen">
      <form
        onSubmit={(e) => handleMasukClick(e)}
        className="forForm w-90/100 max-w-[420px] overflow-y-hidden mt-[80px] md:mt-[0px] border border-[gray] md:h-89/100 h-60/100 top-20 relative p-[40px] pt-[28px] flex flex-col gap-[15px] rounded-md bg-[#181A1CD6] text-white"
      >
        <h1 className="text-center flex justify-center gap-1 text-4xl font-[700]">
          <FontAwesomeIcon icon={faFilm} />
          <span className="-pb-4 flex items-center -mt-1">CHILL</span>
        </h1>

        <div className="text-center">
          <h1 className="text-2xl font-[650]">Masuk</h1>
          <h1>Selamat datang kembali!</h1>
        </div>

        <div className="username">
          <label className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <span>Username</span>
              <span className="text-red-500 ">{error}</span>
            </div>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              type="text"
              className="p-[10px] border-[gray] border-[2px] rounded-full bg-transparent"
            />
          </label>
        </div>

        <div className="username">
          <label className="flex gap-2 flex-col relative">
            Kata Sandi
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              type={showPassword ? "text" : "password"}
              className="p-[10px] border-[gray] border-[2px] rounded-full bg-transparent"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 cursor-pointer top-12"
            />
          </label>
        </div>

        <div className="flex justify-between relative md:text-md text-sm -mt-[14px] mb-4">
          <h1>
            Belum punya akun?{" "}
            <Link
              to="/daftar"
              className="font-bold cursor-pointer hover:underline"
            >
              Daftar
            </Link>
          </h1>
          <h1 className="font-[600] hover:underline cursor-pointer">
            Lupa kata sandi?
          </h1>
        </div>

        <div className="flex flex-col gap-1">
          <button
            type="submit"
            onClick={(e) => handleMasukClick(e)}
            className="p-[6px] border-white w-full rounded-full cursor-pointer hover:underline bg-[gray]"
          >
            Masuk
          </button>
          <h1
            style={{ lineHeight: "14px" }}
            className="text-[gray] text-sm text-center"
          >
            Atau
          </h1>
          <button className="border-2 p-[6px] border-white w-full rounded-full cursor-pointer hover:underline">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 mr-2" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};
