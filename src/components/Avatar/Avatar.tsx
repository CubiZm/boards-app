import React from "react";

import "./Avatar.scss";

import noPicture from "./static/img/user-avatar.svg";

interface Props {
  userAvatarImg?: string;
  userName: string;
  userStuff: string;
  userTeam?: string;
}

const Avatar = (props: Props) => {
  return (
    <div className="avatar-box">
      <a className="avatar-box__loader" href="#">
        <img className="avatar-box__picture" src={props.userAvatarImg || noPicture} alt="your avatar" />
        <span>upload</span>
      </a>

      <div className="avatar-box__info">
        <p className="avatar-box__user-name">
          {props.userName}
        </p>
        <p className="avatar-box__staff">
          {props.userStuff} {" "} ({props.userTeam} Team)
        </p>
      </div>
    </div>
  );
};

export default Avatar;
