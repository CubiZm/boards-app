import React from "react";
import cn from "classnames";

import "./Avatar.scss";

import noPicture from "./static/img/user-avatar.svg";

interface Props {
  userAvatarImg?: string;
  userName: string;
  userStuff?: string;
  userTeam?: string;
  classnameAvatar?: string;
  classnameAvatarImg?: string;
}

const Avatar = (props: Props) => {
  return (
    <div className={cn("avatar-box", props.classnameAvatar)}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="avatar-box__loader" href="#" tabIndex={1}>
        <img
          className={cn("avatar-box__picture", props.classnameAvatarImg)}
          src={props.userAvatarImg || noPicture}
          alt="your avatar"
        />
        <span>upload</span>
      </a>

      <div className="avatar-box__info">
        <p className="avatar-box__user-name">{props.userName}</p>
        <p className="avatar-box__staff">
          {props.userStuff} {props.userTeam}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
