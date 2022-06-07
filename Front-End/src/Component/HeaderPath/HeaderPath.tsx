import { FC, Fragment } from "react";
import { SpanStylised, LinkStylised } from "./style";

interface PathItem {
  label: string;
  path: string;
  clickHandler?: (path: string) => (e?: any) => void;
}

interface PathProps {
  paths: PathItem[];
}

const Path: FC<PathProps> = ({ paths }) => {
  const arrow = "/";
  const iMax = paths.length - 1;
  return (
    <SpanStylised>
      {paths.map((path, i) => {
        return (
          <Fragment key={path.label}>
            <LinkStylised
              to={path.path}
              onClick={path.clickHandler && path.clickHandler(path.path)}
            >
              {`${i > 0 ? " " : ""}${path.label}${i < iMax ? " " : ""}`}
            </LinkStylised>
            {i < iMax ? ` ${arrow}` : ""}
          </Fragment>
        );
      })}
    </SpanStylised>
  );
};

export default Path;
