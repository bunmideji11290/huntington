'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import PersistentModal from '../WarningModal';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.showModal) {
        setShowModal(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    if (userAccount.showModal) {
      setShowModal(true);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div>
      {showModal && <PersistentModal />}
      <Header />
      <div className="pl-5 min-h-[60px] text-white bg-[#5ba63c] flex items-center justify-start">
        <p>Welcome To Huntington Online Banking</p>
      </div>
      <div className="bg-white p-4">
        {error && (
          <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
            {error}
          </p>
        )}
        <div className="bg-white mx-auto rounded-xl max-w-[350px] py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 border p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <label htmlFor="Username" className="text-[#5c5c5c] text-[16px]">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  className="p-4 py-3 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-[#5c5c5c] text-[16px]">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="p-4 py-3 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button
                  type="submit"
                  className="p-4 py-3 bg-[#fc9e03] w-[200px] text-white font-semibold rounded-md"
                >
                  LOG IN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] flex items-center absolute bottom-0 z-20 px-[10px] p-[20px]">
        <p className="text-sm text-[#22262A] text-center">
          Mastercard and the Mastercard Brand Mark are registered trademarks of Mastercard International Incorporated. <br />
          The Huntington National Bank is an Equal Housing Lender and Member FDIC.
          <br /><br /> The HNB Logo®, Huntington®, The HNB LogoHuntington®, Huntington.Welcome.®, and Huntington Heads Up® are federally registered service marks of Huntington Bancshares Incorporated. ©
          2025 Huntington Bancshares Incorporated.
        </p>
      </div>
    </div>
  );
}
