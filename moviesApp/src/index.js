import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// import React from "react";
// import {createRoot} from "react-dom/client";
// import {Link} from 'react-router-dom'
// import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
// import MovieReviewPage from "./pages/movieReviewPage";
// import SiteHeader from './components/siteHeader'
// import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from 'react-query/devtools'
// import MoviesContextProvider from "./contexts/moviesContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 360000,
//       refetchInterval: 360000, 
//       refetchOnWindowFocus: false
//     },
//   },
// }); 
// //let me just test this
// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}> 
//       <BrowserRouter>
//         <SiteHeader />
//         <MoviesContextProvider>   {/* New Header  */}
//         <Routes>
//         <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
//         <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
//         <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
//         <Route path="/movies/:id" element={<MoviePage />} />
//         <Route path="/" element={<HomePage />} />
//         <Route path="*" element={ <Navigate to="/" /> } />
//         <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
//         </Routes>
//         </MoviesContextProvider> 
//       </BrowserRouter>
//         <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// const rootElement = createRoot( document.getElementById("root") )
// rootElement.render(<App /> );