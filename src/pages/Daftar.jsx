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
    <main className="forbglayar bg-[url(/auth/daftar.jpg)] py-6 relative md:flex justify-center h-screen">
      <form className="forForm w-90/100 max-w-[420px] top-1/2 left-1/2 -translate-1/2 md:left-0 md:-translate-0  md:h-full overflow-y-hidden md:mt-[0px] border border-gray-500  p-[40px] pt-[20px] md:pt-[13px] flex flex-col gap-[15px] rounded-md bg-[#181A1CD6] text-white md:top-0 relative ">
        <header className="grid gap-4">
          <h1 className="text-center flex justify-center mt-1 gap-1 text-4xl font-bold">
            <FontAwesomeIcon icon={faFilm} />
            <span className="-pb-4 flex items-center -mt-1">CHILL</span>
          </h1>
          <div className="text-center -mt-2 -mb-4">
            <h1 className="text-2xl font-semibold">Daftar</h1>
            <h1>Selamat datang!</h1>
          </div>
        </header>
        <section>
          <div className="username">
            <label className="flex gap-2 flex-col">
              Username
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                type="text"
                className="p-[10px] border-gray-500 border-2 rounded-full bg-transparent"
              />
            </label>
          </div>

          <div className="kata-password flex flex-col gap-[15px]">
            <label className="flex gap-2 flex-col relative">
              Kata Sandi
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata password"
                type={`${showPassword ? "text" : "password"}`}
                className="p-[10px] border-gray-500 border-2 rounded-full bg-transparent"
              />
              <FontAwesomeIcon
                onClick={() => setShowPassword(!showPassword)}
                className="fa-regular fa-eye-slash absolute right-4 cursor-pointer top-12"
                icon={showPassword ? faEyeSlash : faEye}
              />
            </label>

            <label className="flex gap-2 flex-col relative">
              <div className="flex gap-2">
                Konfirmasi Kata Sandi
                <span className="text-red-400">{error}</span>
              </div>
              <input
                ref={confirmPasswordRef}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Konfirmasi kata password"
                type="password"
                className="p-[10px] border-gray-500 border-2 rounded-full bg-transparent"
              />
            </label>
          </div>
        </section>

        <section className="flex justify-between relative md:text-md text-sm -mt-[14px] mb-4">
          <h1>
            Sudah punya akun?
            <Link
              to="/masuk"
              className="font-bold cursor-pointer hover:underline"
            >
              {" "}
              Masuk
            </Link>
          </h1>
        </section>

        <section className="flex flex-col gap-1 -mt-3">
          <button
            onClick={(e) => handleDaftarClick(e)}
            type="submit"
            className="p-[6px] border-white w-full rounded-full cursor-pointer hover:underline bg-gray-500"
          >
            Daftar
          </button>

          <p
            className="text-gray-500 text-sm text-center"
            style={{ lineHeight: "14px" }}
          >
            Atau
          </p>

          <button className="border-2 p-[6px] border-white w-full rounded-full cursor-pointer hover:underline">
            <FontAwesomeIcon className="text-red-500 mr-2" icon={faGoogle} />
            Masuk dengan Google
          </button>
        </section>
      </form>
    </main>
  );
};
