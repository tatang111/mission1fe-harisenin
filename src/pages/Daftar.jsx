import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Daftar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleDaftarClick = (e) => {
    e.preventDefault();

    if (!username || !password || !passwordConfirm) {
      return;
    }

    if (passwordConfirm !== password) {
      setError("Konfirmasi salah");
      setPasswordConfirm("");
      confirmPasswordRef.current.focus();
      return;
    }

    const userIdentity = {
      username: username,
      password: password,
    };
    localStorage.setItem("infoUser", JSON.stringify(userIdentity));
    navigate("/masuk");
  };

  return (
    <div className="bg-[url(/auth/daftar.jpg)] bg-cover bg-center flex justify-center items-start md:items-center min-h-screen p-4">
      <form className="w-full max-w-[420px] border border-gray-600 p-6 md:p-10 flex flex-col gap-4 rounded-md bg-[#181A1CD6] text-white">
        <div className="text-center mt-2 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faFilm} />
            <span>CHILL</span>
          </h1>
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Daftar</h1>
          <p className="text-sm md:text-base">Selamat datang!</p>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="text-sm md:text-base">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              className="w-full p-2 md:p-3 border border-gray-500 rounded-full bg-transparent text-sm md:text-base"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 relative">
            <span className="text-sm md:text-base">Kata Sandi</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 md:p-3 border border-gray-500 rounded-full bg-transparent text-sm md:text-base"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 md:top-10 cursor-pointer text-gray-400"
            />
          </label>
          <label className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base">
                Konfirmasi Kata Sandi
              </span>
              {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
            <input
              ref={confirmPasswordRef}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Konfirmasi password"
              type="password"
              className="w-full p-2 md:p-3 border border-gray-500 rounded-full bg-transparent text-sm md:text-base"
            />
          </label>
        </div>
        <div className="text-xs md:text-sm -mt-2">
          <p>
            Sudah punya akun?{" "}
            <Link to="/masuk" className="font-semibold hover:underline">
              Masuk
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            onClick={handleDaftarClick}
            className="w-full py-2 bg-gray-600 hover:bg-gray-700 rounded-full text-sm md:text-base"
          >
            Daftar
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
