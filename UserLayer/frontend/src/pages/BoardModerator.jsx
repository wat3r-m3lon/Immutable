import React, { useState, useEffect } from "react";
import usePageTitle from '../../src/hooks/usePageTitle';
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import axios from "axios";

axios.defaults.withCredentials = true;
const BoardModerator = () => {
  usePageTitle("Moderator Dashboard"); 

  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardModerator;
