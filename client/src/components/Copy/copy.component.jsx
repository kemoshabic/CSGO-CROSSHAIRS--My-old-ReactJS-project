import React from "react";
import { connect } from "react-redux";

import { CopyToClipboard } from "react-copy-to-clipboard";
import InfoButton from "../info-buton/info-button.component";

import { toggleCopiedButton } from "../../redux/settings/settings.actions";

import ClipboardImg from "../../assets/copy.png";

import "./copy.styles.scss";

export const Copy = ({ toggleCopiedButton, crosshair }) => (
    <CopyToClipboard
      text={crosshair}
      onCopy={() =>
        toggleCopiedButton(true) &&
        setTimeout(() => toggleCopiedButton(false), 1200)
      }
    >
      <button className="copy">
        <InfoButton img={ClipboardImg} purple fix text={"Copy crosshair"} />
      </button>
    </CopyToClipboard>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCopiedButton: (boolVal) => dispatch(toggleCopiedButton(boolVal)),
});

export default connect(null, mapDispatchToProps)(Copy);
