import React from "react";

import "./UiKit.scss";
import Button from "../../components/Button/Button";
import {Input} from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Select from "../../components/Select/Select";
import {dataLanguage, dataNewTask, dataTimeZone} from "../Main/data";

const UiKit = () => {
  return (
    <div className="kit-examples">
      <div className="kit-examples__header">Typography</div>
      <div className="kit-examples__typography">
        <h1 className="title-h1">Header 1</h1>
        <h2 className="title-h2">Header 2</h2>
        <h3 className="title-h3">Header 3</h3>

        <p className="main-text">Main text</p>

        <span className="secondary-text">Secondary text</span>

        <div className="kit-examples__text-example">
          <p className="main-text">

            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium asperiores consectetur consequuntur deleniti et illo
            officiis voluptatibus? A architecto commodi dolorum necessitatibus
            nobis quasi ullam? Fugiat fugit molestiae quisquam voluptatem? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
            asperiores consectetur consequuntur deleniti et illo officiis
            voluptatibus?
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {" "}<a href="#">A architecto commodi dolorum</a>{" "}
            necessitatibus nobis quasi ullam? Fugiat fugit molestiae quisquam
            voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusantium asperiores consectetur consequuntur deleniti et
            illo officiis
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {" "}<a href="#">voluptatibus</a>? A architecto commodi
            dolorum necessitatibus nobis quasi ullam? Fugiat fugit molestiae
            quisquam voluptatem?
          </p>
        </div>
      </div>

      <div className="kit-examples__header">Colors</div>

      <div className="kit-examples__colors">
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_main"></div>
          <span>
            Main font color
            <br />
            rgba (0, 0, 0, 0.9)
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_invert"></div>
          <span>
            Inverted font color
            <br />
            rgba (255, 255, 255, 0.9)
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_panel"></div>
          <span>
            Panel color
            <br />
            #284159
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_high"></div>
          <span>
            Highlight color
            <br />
            #4488FF
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_high-2"></div>
          <span>
            Highlight 2 color
            <br />
            #3D7AE6
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_high-3"></div>
          <span>
            Highlight 3 color
            <br />
            #69A0F6
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color  kit-examples__color_error"></div>
          <span>
            Error color
            <br />
            #F15866
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_grey"></div>
          <span>
            Grey color
            <br />
            #ABABAB
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_border"></div>
          <span>
            Border color
            <br />
            rgba (0, 0, 0, 0.16)
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_hinted"></div>
          <span>
            Hinted color
            <br />
            rgba (0, 0, 0, 0.32)
          </span>
        </div>
        <div className="kit-examples__colors-block">
          <div className="kit-examples__color kit-examples__color_black"></div>
          <span>
            Black light
            <br />
            rgba (0, 0, 0, 0.04)
          </span>
        </div>
      </div>

      <div className="kit-examples__header">Buttons</div>

      <div className="kit-examples__buttons">
        <div className="kit-examples__btn-block">
          <span>Normal</span>
          <Button textBtn="Default Button" />
          <Button textBtn="Default Button" isTextBtn={true} />
        </div>

        <div className="kit-examples__btn-block">
          <span>Hover/Focus</span>
          <Button classname="kit-examples__btn kit-examples__btn_hover" textBtn="Default Button" />
          <Button classname="kit-examples__btn-text kit-examples__btn-text_hover" textBtn="Default Button" isTextBtn={true} />
        </div>

        <div className="kit-examples__btn-block">
          <span>Active</span>
          <Button classname="kit-examples__btn kit-examples__btn_active" textBtn="Default Button" />
          <Button classname="kit-examples__btn-text kit-examples__btn-text_hover" textBtn="Default Button" isTextBtn={true} />
        </div>

        <div className="kit-examples__btn-block">
          <span>Disabled</span>
          <Button disabled={true} textBtn="Default Button" />
          <Button disabled={true} textBtn="Default Button" isTextBtn={true} />
        </div>
      </div>

      <div className="kit-examples__header">Input</div>

      <div className="kit-examples__inputs">
        <div className="kit-examples__input-block">
          <span>Empty</span>
          <Input id={"bek"} placeholder="Label (optional)" labelValue="Label (optional)"/>
        </div>

        <div className="kit-examples__input-block">
          <span>With text</span>
          <Input id={"bek"} defaultValue="Text" labelValue="Label (optional)"/>
        </div>

        <div className="kit-examples__input-block kit-examples__input-block_focus">
          <span>Focus</span>
          <Input id={"bek"} defaultValue="Text" labelValue="Label (optional)"/>
        </div>

        <div className="kit-examples__input-block kit-examples__input-block_error">
          <span>Error</span>
          <Input id={"bek"} defaultValue="Text" labelValue="Label (optional)"/>
        </div>

        <div className="kit-examples__input-block">
          <span>Disabled</span>
          <Input disabled={true} id={"bek"} defaultValue="Text" labelValue="Label (optional)"/>
        </div>
      </div>

      <div className="kit-examples__header">Checkbox</div>

      <div className="kit-examples__checkboxes">
        <div className="kit-examples__chek-block">
          <span>Normal</span>
          <Checkbox id={"zak"} name={"zak"} text="Label text"/>
          <Checkbox id={"zak0"} name={"zak"} text="Label text" checked={true}/>
        </div>

        <div className="kit-examples__chek-block kit-examples__chek-block_hover">
          <span>Hover</span>
          <Checkbox id={"zak1"} name={"zak"} text="Label text"/>
          <Checkbox id={"zak2"} name={"zak"} text="Label text" checked={true}/>
        </div>

        <div className="kit-examples__chek-block kit-examples__chek-block_focus">
          <span>Focus</span>
          <Checkbox id={"zak3"} name={"zak"} text="Label text"/>
          <Checkbox id={"zak4"} name={"zak"} text="Label text" checked={true}/>
        </div>

        <div className="kit-examples__chek-block kit-examples__chek-block_error">
          <span>Error</span>
          <Checkbox id={"zak5"} name={"zak"} text="Label text"/>
          <Checkbox id={"zak6"} name={"zak"} text="Label text" checked={true}/>
        </div>

        <div className="kit-examples__chek-block">
          <span>Normal</span>
          <Checkbox disabled id={"zak7"} name={"zak"} text="Label text"/>
          <Checkbox disabled id={"zak8"} name={"zak"} text="Label text" checked={true}/>
        </div>
      </div>


      <div className="kit-examples__header">Select</div>

      <div className="kit-examples__selects">
        <div className="kit-examples__chek-block">
          <span>With text</span>
          <Select selectedTitle="Label (optional)" data={dataLanguage} />
        </div>

        <div className="kit-examples__chek-block kit-examples__chek-block_focus">
          <span>Focus</span>
          <Select selectedTitle="Label (optional)" data={dataNewTask}/>
        </div>

        <div className="kit-examples__chek-block kit-examples__chek-block_error">
          <span>Error</span>
          <Select selectedTitle="Label (optional)" data={dataTimeZone}/>
        </div>
      </div>

    </div>
  );
};

export default UiKit;
