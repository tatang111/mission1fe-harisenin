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
  const navigate = useNavigate();

  const handleMasukClick = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    if (infoUser.username !== username || infoUser.password !== password) {
      setUsername("");
      setPassword("");
      setError("Username Atau Password Salah!");
      return;
    }

    navigate("/beranda");
  };

  return (
    <div className="bg-[url(/auth/daftar.jpg)] bg-cover bg-center flex justify-center items-start md:items-center min-h-screen p-4">
      <form
        onSubmit={handleMasukClick}
        className="w-full max-w-[420px] border border-gray-600 p-6 md:p-10 flex flex-col gap-4 rounded-md bg-[#181A1CD6] text-white"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faFilm} />
            <span>CHILL</span>
          </h1>
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Masuk</h1>
          <p className="text-sm md:text-base">Selamat datang kembali!</p>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base">Username</span>
              {error && (
                <span className="text-red-500 text-xs md:text-sm">{error}</span>
              )}
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              className="w-full p-2 md:p-3 border border-gray-500 rounded-full bg-transparent text-sm md:text-base"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-1 relative">
            <span className="text-sm md:text-base">Kata Sandi</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 md:p-3 border border-gray-500 rounded-full bg-transparent text-sm md:text-base"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 md:top-10 cursor-pointer text-gray-400"
            />
          </label>
        </div>
        <div className="flex justify-between text-xs md:text-sm -mt-2 mb-2">
          <p>
            Belum punya akun?{" "}
            <Link to="/daftar" className="font-semibold hover:underline">
              Daftar
            </Link>
          </p>
          <button className="font-semibold hover:underline">
            Lupa kata sandi?
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="w-full py-2 bg-gray-600 hover:bg-gray-700 rounded-full text-sm md:text-base"
          >
            Masuk
          </button>
          <p className="text-center text-gray-400 text-xs">Atau</p>
          <button
            type="button"
            className="w-full py-2 border border-gray-400 hover:bg-gray-800 rounded-full flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
            <span>Masuk dengan Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};
