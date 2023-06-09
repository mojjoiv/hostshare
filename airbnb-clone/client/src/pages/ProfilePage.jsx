import React, { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import PlacesPage from './PlacesPage';
import AccountNav from '../components/AccountNav';
import Spinner from '../components/Spinner';
import logo from '../assets/logo.png'
import { removeItemFromLocalStorage } from '../utils';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const { loading, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  let { subpage } = useParams();
  if (!subpage) {
    subpage = 'profile';
  }

  const logout = async () => {
    setUser(null);
    removeItemFromLocalStorage('token');
    toast.success('Logged out');
    setRedirect('/');
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg my-center mx-auto flex flex-col items-center ">
         
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 px-8">
                      <img src={logo} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                      <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                          <h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
                          <p className="px-5 text-xs sm:text-base dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <button className="primary max-w-sm mt-2" onClick={logout}>
                          Logout
                      </button>
          </div>

        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;
