import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="border p-[15px]">
        <div>
          <div className="flex items-center justify-between gap-10">
            <Link href="/">
              <div className="flex items-center gap-10">
                <div className="flex gap-3 items-center">
                  <p className="text-xl">Joevano Alfeus Pangangkat</p>
                  <p className="text-xs relative font-medium border p-2 rounded-xl cursor-pointer hover:text-white hover:bg-black hover:border-black transition-colors">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </Link>
            <ul>
              <li>
                <Link href="/test">
                  <a href="#">test</a>
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
