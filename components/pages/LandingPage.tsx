"use client";

import { T_Comment, T_Property } from "@/types/Model";
import React, { useEffect } from "react";
import PropertyCard from "../cards/PropertyCard";
import PropertyList from "../landing-pages/PropertyList";
import SliderProperties from "../landing-pages/SliderProperties";
import ConnectionAndSponsors from "../landing-pages/ConnectionAndSponsors";
import StatAndVideoPlayer from "../landing-pages/StatAndVideoPlayer";
import CommentList from "../landing-pages/CommentList";
import { useDispatch, useSelector } from "react-redux";

import { setProperties } from "@/redux/features/property/property_list-slice";
import { setComments } from "@/redux/features/comment/comment_list-slice";

import { RootState } from "@/redux/store";

type Props = {
  comments: Array<T_Comment> | undefined;
  properties: Array<T_Property> | undefined;
};

export default function LandingPage({ comments, properties }: Props) {
  const dispatch = useDispatch();

  // Assign constant to reducer to get global value of state
  const redux_properties = useSelector(
    (state: RootState) => state.propertyListReducer
  );

  // Assign constant to reducer to get global value of state
  const redux_comments = useSelector(
    (state: RootState) => state.commentListReducer
  );

  useEffect(() => {
    // Set props value get from SSR to the global state using redux
    dispatch(setProperties(properties));
    dispatch(setComments(comments));
  });

  return (
    <main className="flex flex-col items-center min-h-screen bg-palete-4">
      <SliderProperties
        properties_slide={
          redux_properties ? redux_properties.properties.slice(0, 3) : []
        }
      />
      <ConnectionAndSponsors />
      <StatAndVideoPlayer url_video="https://www.youtube.com/watch?v=QhBnZ6NPOY0" />
      {properties ? (
        <PropertyList
          properties={
            redux_properties ? redux_properties.properties.slice(0, 6) : []
          }
        />
      ) : (
        <p>No Image</p>
      )}
      <CommentList
        comment_list={redux_comments ? redux_comments.comments : []}
      />
    </main>
  );
}
