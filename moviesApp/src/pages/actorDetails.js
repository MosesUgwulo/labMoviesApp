import React from "react";
import Spinner from '../components/spinner'
import ActorsDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorsPage";
import { useParams } from 'react-router-dom';
import { getActorsDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";

export default function ActorDetails(props) {

    const { id } = useParams();
    const { data: actors, error, isLoading, isError } = useQuery( ["actors", { id: id }], getActorsDetails );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

  return (
    <>
      {actors ? (
        <>
          <PageTemplate actors={actors}>
            <ActorsDetails actors={actors} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for details</p>
      )}
    </>
  );
};

