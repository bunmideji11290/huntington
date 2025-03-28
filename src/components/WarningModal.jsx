'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WarningModal() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.showModal) {
        setIsVisible(true);
      }
    }
  }, []);

  if (!isVisible) return null;

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsVisible(false);
    router.push('/');
    window.location.reload();
  };

  return (
    <div className="fixed flx-col inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white w-full h-screen p-6 pt-[50px] rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold">This account has been suspended by the bank.</h2>
        <div className="mt-3">
          <button onClick={handleLogout} className="p-7 py-2 rounded-lg border-none outline-none font-medium border bg-[#5ba63c] text-white text-sm">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
