import _ from './table.module.scss';
const Table = ({...props}) => {
  const {head, body} = props;
  return (
    <table border={1} className={_.table}>
      <thead>
      {head}
      </thead>
      <tbody>
      {body}
      </tbody>
    </table>
  );
};

export {Table};
