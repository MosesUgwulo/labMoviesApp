import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import HomePage from '../pages/homePage';
import MoviePage from '../pages/movieDetailsPage';
import FavouriteMoviesPage from '../pages/favouriteMoviesPage'; // NEW
import MovieReviewPage from "../pages/movieReviewPage";
import SiteHeader from '../components/siteHeader/index';
import UpcomingMoviesPage from "../pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "../contexts/moviesContext";
import AddMovieReviewPage from '../pages/addMovieReviewPage';
import TrendingShows from '../pages/TrendingShows';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  }); 


function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Router>
        <SiteHeader />
        <MoviesContextProvider>
          <AuthProvider>
          
            <Routes>
              <Route exact path='/' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              }
              />

              <Route path='/update-profile' element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
              }
              />

              <Route path='/reviews/form' element={
              <PrivateRoute>
                <AddMovieReviewPage/>
              </PrivateRoute>
              }
              />

              <Route path='/movies/upcoming' element={
              <PrivateRoute>
                <UpcomingMoviesPage />
              </PrivateRoute>
              }
              />

              <Route path='/movies/favourites' element={
              <PrivateRoute>
                <FavouriteMoviesPage />
              </PrivateRoute>
              }
              />

              <Route path='/movies/:id' element={
              <PrivateRoute>
                <MoviePage />
              </PrivateRoute>
              }
              />

              <Route path='/homepage' element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
              }
              />

              <Route path='/reviews/:id' element={
              <PrivateRoute>
                <MovieReviewPage />
              </PrivateRoute>
              }
              />

              <Route path='/trendingshows' element={
              <PrivateRoute>
                <TrendingShows />
              </PrivateRoute>
              }
              />

              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />

            </Routes>
          </AuthProvider>
        </MoviesContextProvider>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
}

export default App;
