import * as React from "react";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import Content from "../../components/Content/Content";

import "./Main.scss";
import Select from "../../components/Select/Select";
import { Input } from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { dataLanguage, dataNewTask, dataTimeZone } from "./data";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";

const Main = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <Content>
        <div className="profile">
          <h1 className="profile__title">Profile details</h1>

          <Avatar
            userAvatarImg="http://heyanton.com/_images/userpics/all/49.jpg"
            userName="Jhon Smith"
            userStuff="UI developer"
            userTeam="crafting"
          />

          <form action="" className="profile__form-info">
            <fieldset className="profile__fiedset">
              <div className="profile__fiedset-wrap">
                <Input
                  id={"name"}
                  labelValue="First name"
                  defaultValue={"Jhon"}
                />

                <Input
                  id={"name"}
                  labelValue="Last name"
                  defaultValue={"Smith"}
                />

                <Input
                  id={"name"}
                  labelValue="Company name"
                  defaultValue={"Wrike"}
                />

                <Input
                  id={"name"}
                  labelValue="Job title"
                  defaultValue={"UI Developer (crafting team)"}
                />

                <Input
                  id={"name"}
                  labelValue="Location"
                  defaultValue={"Saint-Petersburg"}
                />

                <Input
                  id={"name"}
                  labelValue="Phone number"
                  defaultValue={"+7 (923) 345-34-32"}
                />
              </div>
            </fieldset>

            <Button textBtn="Save changes" />
            <Button isTextBtn={true} textBtn="Cancel" />
          </form>

          <h2 className="profile__title">Workspace settings</h2>

          <form action="" className="profile__form-workplace">
            <fieldset className="profile__fiedset  profile__fiedset_big-margin">
              <div className="profile__fiedset-wrap">
                <Select selectedTitle="Time Zone" data={dataTimeZone} />

                <Select selectedTitle="Language" data={dataLanguage} />

                <Select
                  selectedTitle="New task created by default as"
                  data={dataNewTask}
                />
              </div>
            </fieldset>

            <fieldset className="profile__fiedset">
              <Checkbox
                id="suggest"
                name="suggest"
                text="Show pop-up with suggestion to align the dates of tasks and subtasks."
              />

              <a href="#" className="profile__link" tabIndex={1}>How does subtask alignment work?</a>
            </fieldset>

            <Button textBtn="Save settings" disabled={true} />
          </form>

          {/*<div className="test">*/}
          {/*  <Select selectedTitle="smb" data={dataLanguage} />*/}
          {/*</div>*/}

          {/*<div style={{ marginTop: "20px" }}>*/}
          {/*  <Input id={"name"} defaultValue={"Hello"} placeholder={"hello"} />*/}
          {/*</div>*/}

          {/*<div style={{ marginTop: "20px" }}>*/}

          {/*</div>*/}
        </div>
      </Content>
    </>
  );
};

export default Main;
