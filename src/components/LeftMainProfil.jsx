import { faFileImport, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const LeftMainProfil = () => {
  const [infoUser, setInfoUser] = useState(() => {
    const saved = localStorage.getItem("infoUser");
    return saved
      ? JSON.parse(saved)
      : { username: "", password: "", email: "" };
  });

  const [username, setUsername] = useState(infoUser.username);
  const [password, setPassword] = useState(infoUser.password);
  const [email, setEmail] = useState(infoUser.email || "");
  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSave = () => {
    const updatedInfo = {
      ...infoUser,
      username,
      password,
      email,
    };

    localStorage.setItem("infoUser", JSON.stringify(updatedInfo));
    setInfoUser(updatedInfo);
    setEditUsername(false);
    setEditPassword(false);
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className="profilSaya flex flex-col gap-5 md:w-5/10 ">
      <h1 className="mt-20 md:mt-0 text-2xl font-[600]">Profil Saya</h1>

      <div className="profilIdentitas w-95/100 flex">
        <div>
          <img
            src="/profilSaya.png"
            alt="Profil"
            className="w-[120px] h-[120px] rounded-full"
          />
        </div>
        <div className="profil flex flex-col items-center gap-2 justify-center p-8">
          <button className="rounded-full border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 cursor-pointer px-5 py-3 text-lg font-[500]">
            Ubah Foto
          </button>
          <p>
            <FontAwesomeIcon icon={faFileImport} /> Maksimal 2MB
          </p>
        </div>
      </div>

      <form className="w-full flex flex-col gap-4 relative -top-6">
        <label className="flex justify-between w-full h-[60px] bg-[#22282A] rounded-lg outline-2 outline-[#E7E3FC3B] py-2 px-4">
          <div className="flex flex-col w-[480px]">
            <span className="text-[#9D9EA1] text-sm">Nama Pengguna</span>
            <input
              ref={usernameRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!editUsername}
              type="text"
              className="outline-0 text-lg -top-1 relative bg-transparent text-white"
            />
          </div>
          <div className="logoTulis flex items-center justify-center">
            <FontAwesomeIcon
              icon={faPencil}
              className="cursor-pointer"
              onClick={() => {
                setEditUsername(true);
                setTimeout(() => usernameRef.current?.focus(), 100);
              }}
            />
          </div>
        </label>

        <label className="flex justify-between w-full h-[60px] bg-[#22282A] rounded-lg outline-2 outline-[#E7E3FC3B] py-2 px-4">
          <div className="flex flex-col w-[480px]">
            <span className="text-[#9D9EA1] text-sm">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="outline-0 text-lg -top-1 relative bg-transparent text-white"
              placeholder="Masukkan email"
            />
          </div>
        </label>

        <label className="flex justify-between w-full h-[60px] bg-[#22282A] rounded-lg outline-2 outline-[#E7E3FC3B] py-2 px-4">
          <div className="flex flex-col w-[480px]">
            <span className="text-[#9D9EA1] text-sm">Password</span>
            <input
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!editPassword}
              type="password"
              className="outline-0 text-white text-lg -top-1 relative bg-transparent"
            />
          </div>
          <div className="logoTulis flex items-center justify-center">
            <FontAwesomeIcon
              icon={faPencil}
              className="cursor-pointer"
              onClick={() => {
                setEditPassword(true);
                setTimeout(() => passwordRef.current?.focus(), 100);
              }}
            />
          </div>
        </label>
      </form>

      <button
        onClick={handleSave}
        className="py-3 px-6 bg-[#09147A] hover:bg-[#192DB7] cursor-pointer text-white relative -top-4 rounded-full w-[106px]"
      >
        Simpan
      </button>
    </div>
  );
};
