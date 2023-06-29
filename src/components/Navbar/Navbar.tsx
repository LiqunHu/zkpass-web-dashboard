import Link from 'next/link';
import Image from 'next/image';

import Account from './Account';
import logo from 'public/img/zkPass.svg';

import s from './Navbar.module.css';

export default async function Navbar() {
  return (
    <nav className={s.root}>
      <div className="mx-auto px-10">
        <div className="align-center relative flex flex-row justify-between py-4 md:py-6">
          <div className="flex flex-1 items-center">
            <Link href="/" className={s.logo} aria-label="Logo">
              {/* <Image src={logo} alt={'Logo'} ></Image> */}
            </Link>
            <nav className="ml-6 hidden space-x-2 lg:block">
              {/* {user && (
                <Link href="/account" className={s.link}>
                  Account
                </Link>
              )} */}
            </nav>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            {/* {user ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" className={s.link}>
                Sign in
              </Link>
            )} */}
            <Account />
          </div>
        </div>
      </div>
    </nav>
  );
}
