import React from "react";
import withStyle from "../../../common/hoc/withStyle";
import styles from "../style/NewsRow.style";

const NewsRow = ({
  className,
  data,
  hideButtonHandler,
  upVotesButtonHandler,
}) => {
  return (
    <li className={className}>
      <div className="alignTop col">
        <span className="comments">{data.num_comments}</span>
        <div className="upVotes">
          <span>{data.upVotes}</span>
          <button
            onClick={() => upVotesButtonHandler(data.index)}
            className="link"
          >
            <span className="voteArrow"></span>
          </button>
        </div>
      </div>
      <div className="col wrap">
        <div className="col wrap">
          <a className="marginRight title" target="_new" href={data.url}>
            <span>{data.title}</span>
          </a>
          <span className="marginRight colorGray">{data.linkDomain}</span>
        </div>
        <div className="col wrap">
          <span className="marginRight">{`by ${data.author} `}</span>
          <span className="colorGray">{`${data.created_at}  `}</span>
          <button
            onClick={() => hideButtonHandler(data.index)}
            className="link"
          >
            [ hide ]
          </button>
        </div>
      </div>
    </li>
  );
};

export default withStyle(NewsRow, styles);
